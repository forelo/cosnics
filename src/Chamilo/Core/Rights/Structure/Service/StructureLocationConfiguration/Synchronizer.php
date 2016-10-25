<?php

namespace Chamilo\Core\Rights\Structure\Service\StructureLocationConfiguration;

use Chamilo\Configuration\Service\ConfigurationService;
use Chamilo\Core\Rights\Structure\Service\Interfaces\StructureLocationRoleServiceInterface;
use Chamilo\Core\Rights\Structure\Service\Interfaces\StructureLocationServiceInterface;
use Chamilo\Core\Rights\Structure\Service\StructureLocationConfiguration\Interfaces\LoaderInterface;
use Chamilo\Core\Rights\Structure\Service\StructureLocationConfiguration\Interfaces\SynchronizerInterface;

/**
 * Synchronizes configuration files where default structure locations and roles are defined with the database
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class Synchronizer implements SynchronizerInterface
{
    /**
     * @var LoaderInterface
     */
    protected $structureLocationConfigurationLoader;

    /**
     * @var ConfigurationService
     */
    protected $configuration;

    /**
     * @var StructureLocationServiceInterface
     */
    protected $structureLocationService;

    /**
     * @var StructureLocationRoleServiceInterface
     */
    protected $structureLocationRoleService;

    /**
     * StructureLocationConfigurationSynchronizer constructor.
     *
     * @param LoaderInterface $structureLocationConfigurationLoader
     * @param ConfigurationService $configuration
     * @param StructureLocationServiceInterface $structureLocationService
     * @param StructureLocationRoleServiceInterface $structureLocationRoleService
     */
    public function __construct(
        LoaderInterface $structureLocationConfigurationLoader,
        ConfigurationService $configuration,
        StructureLocationServiceInterface $structureLocationService,
        StructureLocationRoleServiceInterface $structureLocationRoleService
    )
    {
        $this->structureLocationConfigurationLoader = $structureLocationConfigurationLoader;
        $this->configuration = $configuration;
        $this->structureLocationService = $structureLocationService;
        $this->structureLocationRoleService = $structureLocationRoleService;
    }

    /**
     * Synchronizes configuration files where default structure locations and roles are defined with the database
     */
    public function synchronize()
    {
        $configuration = $this->structureLocationConfigurationLoader->loadConfiguration(
            $this->configuration->getRegistrationContexts()
        );

        $this->structureLocationService->truncateStructureLocations();
        
        foreach($configuration as $package => $packageConfiguration)
        {
            foreach($packageConfiguration as $actions)
            {
                foreach($actions as $action => $roles)
                {
                    if ($action == 'Package')
                    {
                        $action = null;
                    }

                    $structureLocation = $this->structureLocationService->createStructureLocation($package, $action);

                    if(!is_array($roles))
                    {
                        $roles = array($roles);
                    }

                    foreach ($roles as $role)
                    {
                        $this->structureLocationRoleService->addRoleToStructureLocation($structureLocation, $role);
                    }
                }
            }
        }
    }
}