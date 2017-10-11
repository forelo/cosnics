<?php
namespace Chamilo\Libraries\Architecture\Traits;

use Chamilo\Core\Rights\Structure\Service\Interfaces\AuthorizationCheckerInterface;
use Chamilo\Libraries\DependencyInjection\DependencyInjectionContainerBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 *
 * @package Chamilo\Libraries\Architecture\Traits
 * @author Sven Vanpoucke - Hogeschool Gent
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 */
trait DependencyInjectionContainerTrait
{

    /**
     * The dependency injection container
     *
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    protected $container;

    /**
     * Initializes the container
     */
    public function initializeContainer()
    {
        if (! isset($this->container))
        {
            $this->container = DependencyInjectionContainerBuilder::getInstance()->createContainer();
        }
    }

    /**
     * Sets the dependency injection container
     *
     * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
     */
    public function setContainer(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Returns the dependency injection container
     *
     * @return \Symfony\Component\DependencyInjection\ContainerInterface
     */
    public function getContainer()
    {
        return $this->container;
    }

    /**
     * Returns a service from the dependency injection container
     *
     * @param string serviceId
     * @return \stdClass
     */
    public function getService($serviceId)
    {
        return $this->getContainer()->get($serviceId);
    }

    /**
     * Returns the request
     *
     * @return \Chamilo\Libraries\Platform\ChamiloRequest
     */
    public function getRequest()
    {
        return $this->getService('symfony.component.http_foundation.request');
    }

    /**
     *
     * @return AuthorizationCheckerInterface
     */
    public function getAuthorizationChecker()
    {
        return $this->getService('chamilo.core.rights.structure.service.authorization_checker');
    }

    /**
     *
     * @return \Chamilo\Libraries\File\PathBuilder
     */
    public function getPathBuilder()
    {
        return $this->getService('chamilo.libraries.file.path_builder');
    }

    /**
     *
     * @return \Chamilo\Libraries\File\ConfigurablePathBuilder
     */
    public function getConfigurablePathBuilder()
    {
        return $this->getService('chamilo.libraries.file.configurable_path_builder');
    }

    /**
     *
     * @return \Chamilo\Configuration\Service\ConfigurationConsulter
     */
    public function getConfigurationConsulter()
    {
        return $this->getService('chamilo.configuration.service.configuration_consulter');
    }

    /**
     *
     * @return \Chamilo\Libraries\Architecture\ErrorHandler\ExceptionLogger\ExceptionLoggerInterface
     */
    protected function getExceptionLogger()
    {
        return $this->getService('chamilo.libraries.architecture.error_handler.exception_logger');
    }

    /**
     * Returns the validator form the dependency injection container
     *
     * @return \Symfony\Component\Validator\Validator
     */
    public function getValidator()
    {
        return $this->getService('symfony.component.validator.validator');
    }

    /**
     * Returns the symfony form builder and renderer
     *
     * @return \Symfony\Component\Form\FormFactory
     */
    public function getForm()
    {
        return $this->getService('symfony.component.forms.form');
    }

    /**
     * Returns the Twig_Environment
     *
     * @return \Twig_Environment
     */
    public function getTwig()
    {
        return $this->getService('twig.environment');
    }

    /**
     * Returns the Monolog Logger
     *
     * @return \Monolog\Logger
     */
    public function getLogger()
    {
        return $this->getService('monolog.logger');
    }

    /**
     * Returns the translator
     *
     * @return \Symfony\Component\Translation\Translator
     */
    public function getTranslator()
    {
        return $this->getService('symfony.component.translation.translator');
    }

    /**
     * Returns the event dispatcher
     *
     * @return \Symfony\Component\EventDispatcher\ContainerAwareEventDispatcher
     */
    public function getEventDispatcher()
    {
        return $this->getService('symfony.component.event_dispatcher');
    }

    /**
     * Returns the serializer service
     *
     * @return \JMS\Serializer\Serializer
     */
    public function getSerializer()
    {
        return $this->getService('jms.serializer');
    }

    /**
     * Returns the entity manager from the dependency injection container
     *
     * @return \Doctrine\ORM\EntityManager
     */
    public function getEntityManager()
    {
        return $this->getService('doctrine.orm.entity_manager');
    }

    /**
     *
     * @return \Chamilo\Libraries\Architecture\Factory\ApplicationFactory
     */
    public function getApplicationFactory()
    {
        return $this->getService('chamilo.libraries.architecture.factory.application_factory');
    }
}
