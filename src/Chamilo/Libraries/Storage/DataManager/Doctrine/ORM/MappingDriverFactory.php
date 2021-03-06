<?php

namespace Chamilo\Libraries\Storage\DataManager\Doctrine\ORM;

use Chamilo\Libraries\Cache\Doctrine\Provider\PhpFileCache;
use Chamilo\Libraries\DependencyInjection\Configuration\DoctrineORMMappingsConfiguration;
use Chamilo\Libraries\File\Path;
use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Annotations\CachedReader;
use Doctrine\Common\Persistence\Mapping\Driver\MappingDriverChain;
use Doctrine\Common\Persistence\Mapping\Driver\PHPDriver;
use Doctrine\Common\Persistence\Mapping\Driver\StaticPHPDriver;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\ORM\Mapping\Driver\XmlDriver;
use Doctrine\ORM\Mapping\Driver\YamlDriver;
use Doctrine\Persistence\Mapping\Driver\MappingDriver;

/**
 * Factory class to create a mapping driver for doctrine with a given configuration array
 *
 * The configuration array should look like this
 *
 *  array(
 *      'default' => array(
 *          'mapping_path1', 'mapping_path2'
 *      ),
 *      'custom' => array(
 *          'custom_mapping_name1' => array(
 *              'type' => choose between ('yaml', 'xml', 'annotation', 'php', 'staticphp'),
 *              'namespace' => 'common\libraries'
 *              'paths' => array('mapping_path1', 'mapping_path2')
 *          )
 *      )
 *  )
 *
 * @package Chamilo\Libraries\Storage\DataManager\Doctrine\ORM
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class MappingDriverFactory
{

    /**
     * The doctrine configuration class
     *
     * @var \Doctrine\ORM\Configuration
     */
    private $doctrineConfiguration;

    /**
     * The root path of chamilo
     *
     * @var string
     */
    private $chamiloRootPath;

    /**
     * Constructor
     *
     * @param \Doctrine\ORM\Configuration $doctrineConfiguration
     * @param string $chamiloRootPath
     */
    public function __construct(\Doctrine\ORM\Configuration $doctrineConfiguration, $chamiloRootPath = null)
    {
        $this->doctrineConfiguration = $doctrineConfiguration;
        $this->chamiloRootPath = !is_null($chamiloRootPath) ? $chamiloRootPath : Path::getInstance()->getBasePath();
    }

    /**
     * Creates the mapping configuration based on a given configuration array.
     * The configuration array is
     * processed and validated with the configuration processor
     *
     * @param string[] $mappingConfiguration
     *
     * @return MappingDriver
     */
    public function createMappingDriver(array $mappingConfiguration = array())
    {
        $mappingConfiguration = $this->processConfiguration($mappingConfiguration);

        $defaultDriver = new MappingDriverChain();

        if (array_key_exists('default', $mappingConfiguration) && !empty($mappingConfiguration['default']))
        {
            $annotationPaths = $this->createAbsoluteMappingPaths('annotation', $mappingConfiguration['default']);

            $defaultDriver = $this->createAnnotationDriver($annotationPaths);
        }

        if (array_key_exists('custom', $mappingConfiguration) && !empty($mappingConfiguration['custom']))
        {
            $mappingDriverChain = new MappingDriverChain();
            $mappingDriverChain->setDefaultDriver($defaultDriver);

            foreach ($mappingConfiguration['custom'] as $customMapping)
            {
                $paths = $this->createAbsoluteMappingPaths($customMapping['type'], $customMapping['paths']);

                $driver = null;

                switch ($customMapping['type'])
                {
                    case 'yaml' :
                        $driver = new YamlDriver($paths);
                        break;
                    case 'xml' :
                        $driver = new XmlDriver($paths);
                        break;
                    case 'php' :
                        $driver = new PHPDriver($paths);
                        break;
                    case 'staticphp' :
                        $driver = new StaticPHPDriver($paths);
                        break;
                    case 'annotation' :
                    default :
                        $driver = $this->createAnnotationDriver($paths);
                        break;
                }

                $mappingDriverChain->addDriver($driver, $customMapping['namespace']);
            }

            return $mappingDriverChain;
        }

        return $defaultDriver;
    }

    /**
     * @param string[] $paths
     *
     * @return AnnotationDriver
     */
    protected function createAnnotationDriver($paths)
    {
        return new AnnotationDriver(
            new CachedReader(
                new AnnotationReader(),
                new PhpFileCache(Path::getInstance()->getCachePath(__NAMESPACE__) . '/Annotations')
            ),
            (array) $paths
        );
    }

    /**
     * Processes the given configuration
     *
     * @param string[] $mappingConfiguration
     *
     * @return string[][][]
     */
    protected function processConfiguration(array $mappingConfiguration = array())
    {
        $doctrineORMMappingsConfiguration = new DoctrineORMMappingsConfiguration();
        $treeNode = $doctrineORMMappingsConfiguration->getConfigTreeBuilder()->buildTree();

        return $treeNode->finalize($mappingConfiguration);
    }

    /**
     * Helper function to create absolute mapping paths based on given relative mapping paths
     *
     * @param string $type
     * @param string[] $mappingPaths
     *
     * @return string[]
     */
    protected function createAbsoluteMappingPaths($type, $mappingPaths)
    {
        foreach ($mappingPaths as $index => $mappingPath)
        {
            $absoluteMappingPath = realpath($this->chamiloRootPath . $mappingPath);
            $mappingPaths[$index] = $absoluteMappingPath;

            if (!is_dir($absoluteMappingPath))
            {
                throw new \InvalidArgumentException(
                    'The given ' . $type . ' mapping path "' . $mappingPath . '" must be an existing directory'
                );
            }
        }

        return $mappingPaths;
    }
}
