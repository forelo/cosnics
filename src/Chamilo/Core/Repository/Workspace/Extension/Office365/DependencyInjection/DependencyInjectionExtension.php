<?php

namespace Chamilo\Core\Repository\Workspace\Extension\Office365\DependencyInjection;

use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\File\PathBuilder;
use Chamilo\Libraries\Utilities\StringUtilities;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;

/**
 * @package Chamilo\Core\Repository\Workspace\Extension\Office365\DependencyInjection
 *
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author - Sven Vanpoucke - Hogeschool Gent
 */
class DependencyInjectionExtension extends Extension implements ExtensionInterface
{

    /**
     * Loads a specific configuration.
     *
     * @param array $config An array of configuration values
     * @param ContainerBuilder $container A ContainerBuilder instance
     *
     * @throws \InvalidArgumentException When provided tag is not defined in this extension
     * @api
     */
    public function load(array $config, ContainerBuilder $container)
    {
        $pathBuilder = new PathBuilder(new ClassnameUtilities(new StringUtilities()));

        $loader = new XmlFileLoader(
            $container,
            new FileLocator(
                $pathBuilder->getConfigurationPath('Chamilo\Application\Weblcms\Tool\Implementation\CourseGroup\Extension\Office365') .
                'DependencyInjection'
            )
        );

//        $loader->load('services.xml');
    }

    /**
     * Returns the recommended alias to use in XML.
     * This alias is also the mandatory prefix to use when using YAML.
     *
     * @return string The alias
     * @api
     */
    public function getAlias()
    {
        return 'chamilo.application.weblcms.tool.implementation.course_group.extension.office365';
    }

}