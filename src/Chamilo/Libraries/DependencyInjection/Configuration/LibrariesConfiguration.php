<?php
namespace Chamilo\Libraries\DependencyInjection\Configuration;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * Configuration class to validate the configuration for this package
 *
 * @package Chamilo\Libraries\DependencyInjection\Configuration
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class LibrariesConfiguration implements ConfigurationInterface
{

    /**
     * Generates the configuration tree builder.
     *
     * @return \Symfony\Component\Config\Definition\Builder\TreeBuilder
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('chamilo_libraries');

        $rootNode->append($this->addDoctrineNode());

        return $treeBuilder;
    }

    /**
     * Builds and returns the node for doctrine
     *
     * @return \Symfony\Component\Config\Definition\Builder\NodeDefinition
     */
    protected function addDoctrineNode()
    {
        $builder = new TreeBuilder();
        $node = $builder->root('doctrine');

        $mappingsConfiguration = new DoctrineORMMappingsConfiguration();

        $node->children()->arrayNode('orm')->children()->arrayNode('resolve_target_entities')->useAttributeAsKey(
            'baseEntity')->requiresAtLeastOneElement()->prototype('scalar')->cannotBeEmpty()->end()->end()->end()->append(
            $mappingsConfiguration->buildRootNode())->end()->end();

        return $node;
    }
}