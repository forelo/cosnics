<?php
namespace Chamilo\Libraries\Architecture\Application;

use Chamilo\Configuration\Storage\DataClass\Registration;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Exceptions\UserException;
use Chamilo\Libraries\Architecture\Interfaces\NoAuthenticationSupport;
use Chamilo\Libraries\File\FileLogger;
use Chamilo\Libraries\File\Filesystem;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\File\Redirect;
use Chamilo\Libraries\Format\NotificationMessage\NotificationMessage;
use Chamilo\Libraries\Format\NotificationMessage\NotificationMessageManager;
use Chamilo\Libraries\Format\NotificationMessage\NotificationMessageRenderer;
use Chamilo\Libraries\Format\Structure\BreadcrumbGenerator;
use Chamilo\Libraries\Format\Structure\BreadcrumbTrail;
use Chamilo\Libraries\Format\Structure\Page;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Platform\Session\Session;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\StringUtilities;

/**
 *
 * @package Chamilo\Libraries\Architecture\Application
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
abstract class Application
{
    use \Chamilo\Libraries\Architecture\Traits\ClassContext;
    use \Chamilo\Libraries\Architecture\Traits\DependencyInjectionContainerTrait;

    /**
     *
     * @var \Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface
     */
    protected $applicationConfiguration;

    // Parameters
    const PARAM_ACTION = 'go';
    const PARAM_MESSAGES = 'messages';
    const PARAM_MESSAGE = 'message';
    const PARAM_MESSAGE_TYPE = 'message_type';
    const PARAM_ERROR_MESSAGE = 'error_message';
    const PARAM_WARNING_MESSAGE = 'warning_message';
    // TODO: the value of this constant should eventually be changed to 'context', but an undefined number of hardcoded
    // references still exists and needs to be fixed first to avoid breaking functionality of an undefined number of
    // places
    const PARAM_CONTEXT = 'application';

    // Result types
    const RESULT_TYPE_CREATED = 'Created';
    const RESULT_TYPE_UPDATED = 'Updated';
    const RESULT_TYPE_DELETED = 'Deleted';
    const RESULT_TYPE_MOVED = 'Moved';

    /**
     *
     * @var string[]
     */
    public static $application_path_cache = array();

    /**
     *
     * @param \Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface $applicationConfiguration
     */
    public function __construct(ApplicationConfigurationInterface $applicationConfiguration)
    {
        $this->applicationConfiguration = $applicationConfiguration;

        $this->initializeContainer();
    }

    /**
     *
     * @return \Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface
     */
    public function getApplicationConfiguration()
    {
        return $this->applicationConfiguration;
    }

    /**
     * Helper function to call the authorization checker with the current logged in user.
     * Throws the NotAllowedException when not valid.
     *
     * @param string $context
     * @param string $action
     *
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    public function checkAuthorization($context, $action = null)
    {
        if($this instanceof NoAuthenticationSupport)
        {
            return;
        }

        if (! $this->getUser() instanceof User)
        {
            throw new NotAllowedException();
        }

        return $this->getAuthorizationChecker()->checkAuthorization($this->getUser(), $context, $action);
    }

    /**
     * Helper function to call the authorization checker with the current logged in user, returns true or false
     * and can be used in if statements
     *
     * @param string $context
     * @param string $action
     *
     * @return boolean
     */
    public function isAuthorized($context, $action = null)
    {
        if (! $this->getUser() instanceof User)
        {
            return false;
        }

        return $this->getAuthorizationChecker()->isAuthorized($this->getUser(), $context, $action);
    }

    /**
     * Get the parent application
     *
     * @return \Chamilo\Libraries\Architecture\Application\Application
     * @deprecated User get_application() now
     */
    public function get_parent()
    {
        return $this->get_application();
    }

    /**
     * Get the parent application
     *
     * @return \Chamilo\Libraries\Architecture\Application\Application
     */
    public function get_application()
    {
        return $this->getApplicationConfiguration()->getApplication();
    }

    /**
     * Gets the URL of the current page in the application.
     * Optionally takes an associative array of name/value pairs representing additional query string parameters; these
     * will either be added to the parameters already present, or override them if a value with the same name exists.
     *
     * @param string[] $parameters
     * @param string[] $filter
     * @param boolean $encodeEntities Whether or not to encode HTML entities. Defaults to false.
     * @return string
     */
    public function get_url($parameters = array(), $filter = array(), $encodeEntities = false)
    {
        $parameters = (count($parameters) ? array_merge($this->get_parameters(), $parameters) : $this->get_parameters());

        $redirect = new Redirect($parameters, $filter, $encodeEntities);
        return $redirect->getUrl();
    }

    /**
     * Redirect the end user to another location.
     * The current url will be used as the basis.
     *
     * @param string[] $parameters
     * @param string[] $filter
     * @param boolean $encodeEntities Whether or not to encode HTML entities. Defaults to false.
     * @param string $anchor
     */
    public function simple_redirect($parameters = array(), $filter = array(), $encodeEntities = false, $anchor = null)
    {
        $parameters = (count($parameters) ? array_merge($this->get_parameters(), $parameters) : $this->get_parameters());

        $redirect = new Redirect($parameters, $filter, $encodeEntities, $anchor);
        $redirect->toUrl();
        exit();
    }

    /**
     * Redirect the end user to another location.
     * The current url will be used as the basis. This method allows passing
     * on messages directly instead of using the parameters array
     *
     * @param string $message
     * @param boolean $error_message
     * @param string[] $parameters
     * @param string[] $filter
     * @param boolean $encodeEntities Whether or not to encode HTML entities. Defaults to false.
     * @param string $anchor
     */
    public function redirect($message = '', $errorMessage = false, $parameters = array(), $filter = array(), $encodeEntities = false,
        $anchor = null)
    {
        if ($message != null)
        {

            $messageType = (! $errorMessage) ? NotificationMessage::TYPE_INFO : NotificationMessage::TYPE_DANGER;

            $notificationMessageManager = new NotificationMessageManager();

            $notificationMessageManager->addMessage(new NotificationMessage($message, $messageType));
        }

        $this->simple_redirect($parameters, $filter, $encodeEntities, $anchor);
    }

    /**
     * Returns the current URL parameters.
     *
     * @return string[]
     */
    public function get_parameters()
    {
        return Parameters::getInstance()->get_parameters($this);
    }

    /**
     * Returns the value of the given URL parameter.
     *
     * @param string $name
     * @return string
     */
    public function get_parameter($name)
    {
        return Parameters::getInstance()->get_parameter($this, $name);
    }

    /**
     * Sets the value of a URL parameter.
     *
     * @param string $name
     * @param string $value
     */
    public function set_parameter($name, $value)
    {
        Parameters::getInstance()->set_parameter($this, $name, $value);
    }

    /**
     * Displays the header
     *
     * @param string $pageTitle
     * @return string
     */
    public function render_header($pageTitle = '')
    {
        $page = Page::getInstance();
        $page->setApplication($this);
        $page->setTitle($this->getPageTitle());

        $arrParameters = $page->getHeader()->toHtml();

        //Disabled
        //$arrParameters['APP_PAGE_TITLE'] = $this->renderPageTitle();

        $arrParameters['APP_SHORTCUT_MENU'] = $this->renderShortcutMenu();

        $arrParameters['APP_FULLPAGE'] = $page->isFullPage();
        $arrParameters['APP_HASLEFTMENU'] = $this->has_menu();
        $arrParameters['APP_LEFTMENU'] = $this->get_menu();

        // Display messages
        $messages = Session::retrieve(self::PARAM_MESSAGES);

        Session::unregister(self::PARAM_MESSAGES);
        if (is_array($messages))
        {
            $arrParameters['APP_MESSAGES'] = implode(PHP_EOL, $this->display_messages($messages[self::PARAM_MESSAGE], $messages[self::PARAM_MESSAGE_TYPE]));
        }

        $notificationMessageManager = new NotificationMessageManager();
        $arrParameters['APP_NOTIFICATION_MESSAGE'] = $notificationMessageManager->renderMessages();

        // DEPRECATED
        // Display messages
        $message = Request::get(self::PARAM_MESSAGE);

        if ($message)
        {
            $arrParameters['APP_DISPLAY_MESSAGE'] = $this->display_message($message);
        }

        $message = Request::get(self::PARAM_ERROR_MESSAGE);
        if ($message)
        {
            $arrParameters['APP_DISPLAY_ERROR_MESSAGE'] = $this->display_error_message($message);
        }

        $message = Request::get(self::PARAM_WARNING_MESSAGE);
        if ($message)
        {
            $arrParameters['APP_DISPLAY_WARNING_MESSAGE'] = $this->display_warning_message($message);
        }

        $template = $this->getTwig()->load('Chamilo\Libraries\Architecture:Application.html.twig');
        return $template->renderBlock('header', $arrParameters);
    }

    /**
     * Obligatory render shortcut menu
     * @return string|null
     */
    protected function renderShortcutMenu()
    {
        return null;
    }

    /**
     *
     * @return string
     */
    protected function getPageTitle()
    {
        return \Chamilo\Configuration\Configuration::get('Chamilo\Core\Admin', 'institution') . ' - ' .
             \Chamilo\Configuration\Configuration::get('Chamilo\Core\Admin', 'site_name');
    }

    /**
     * Renders the page title
     *
     * @return string
     */
    protected function renderPageTitle()
    {
        $breadcrumbTrail = BreadcrumbTrail::getInstance();

        if ($breadcrumbTrail->size() > 0)
        {
            return htmlentities(strip_tags(BreadcrumbTrail::getInstance()->get_last()->get_name()));
        }

        return '';
    }

    /**
     * Displays the footer
     *
     * @return string
     *
     * @throws \Twig_Error_Loader  When the template cannot be found
     * @throws \Throwable
     */
    public function render_footer()
    {
        $page = Page::getInstance();

        $arrParameters['APP_FULLPAGE'] = $page->isFullPage();

        $arrParameters = array_merge($arrParameters, $page->getFooter()->toHtml());

        $template = $this->getTwig()->load('Chamilo\Libraries\Architecture:Application.html.twig');
        return $template->renderBlock('footer', $arrParameters);
    }

    /**
     * Displays a normal message.
     *
     * @param string $message
     * @return string
     */
    public function display_message($message)
    {
        $notificationMessageRenderer = new NotificationMessageRenderer();
        $notificationMessage = NotificationMessage::normal($message);

        return $notificationMessageRenderer->render($notificationMessage);
    }

    /**
     *
     * @param string[] $messages
     * @param string[] $types
     *
     * @return string
     */
    public function display_messages($messages, $types)
    {
        $notificationMessageRenderer = new NotificationMessageRenderer();
        $notificationMessages = array();

        foreach ($types as $key => $type)
        {
            $notificationMessages[] = new NotificationMessage($messages[$key], $type);
        }

        return $notificationMessageRenderer->render($notificationMessages);
    }

    /**
     * Displays an error message.
     *
     * @param string $message
     * @return string
     */
    public function display_error_message($message)
    {
        $notificationMessageRenderer = new NotificationMessageRenderer();
        $notificationMessage = NotificationMessage::error($message);

        return $notificationMessageRenderer->render($notificationMessage);
    }

    /**
     * Displays a warning message.
     *
     * @param string $message
     * @return string
     */
    public function display_warning_message($message)
    {
        $notificationMessageRenderer = new NotificationMessageRenderer();
        $notificationMessage = NotificationMessage::warning($message);

        return $notificationMessageRenderer->render($notificationMessage);
    }

    /**
     * Displays an error page.
     *
     * @param string $message
     * @return string
     */
    public function display_error_page($message)
    {
        if ($this->get_application() instanceof Application)
        {
            return $this->get_application()->display_error_page($message);
        }

        $html = array();

        $html[] = $this->render_header();
        $html[] = $this->display_error_message($message);
        $html[] = $this->render_footer();

        return implode(PHP_EOL, $html);
    }

    /**
     * Displays a warning page.
     *
     * @param string $message
     * @return string
     */
    public function display_warning_page($message)
    {
        if ($this->get_application() instanceof Application)
        {
            return $this->get_application()->display_warning_page($message);
        }

        $html = array();

        $html[] = $this->render_header();
        $html[] = $this->display_warning_message($message);
        $html[] = $this->render_footer();

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @param string $showLoginForm
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    public function not_allowed($showLoginForm = true)
    {
        throw new NotAllowedException($showLoginForm);
    }

    /**
     * Gets the user id of this personal calendars owner
     *
     * @return integer
     * @deprecated Use getUser()->getId() now
     */
    public function get_user_id()
    {
        if ($this->getApplicationConfiguration()->getUser())
        {
            return $this->get_user()->get_id();
        }

        return 0;
    }

    /**
     * Gets the user.
     *
     * @return \Chamilo\Core\User\Storage\DataClass\User
     * @deprecated Use getUser() now
     */
    public function get_user()
    {
        return $this->getUser();
    }

    /**
     *
     * @return \Chamilo\Core\User\Storage\DataClass\User
     */
    public function getUser()
    {
        return $this->getApplicationConfiguration()->getUser();
    }

    /**
     *
     * @return \Chamilo\Libraries\Platform\ChamiloRequest
     */
    public function getRequest()
    {
        return $this->getApplicationConfiguration()->getRequest();
    }

    /**
     *
     * @return string
     */
    public function get_action()
    {
        return $this->get_parameter(static::PARAM_ACTION);
    }

    /**
     * Sets the current action.
     *
     * @param string $action
     */
    public function set_action($action)
    {
        return $this->set_parameter(static::PARAM_ACTION, $action);
    }

    /**
     *
     * @return string
     */
    public function get_application_name()
    {
        return ClassnameUtilities::getInstance()->getPackageNameFromNamespace(static::context());
    }

    /**
     * Does the entire application have a leftside menu? False per default.
     * Can be overwritten by the specific
     * application
     *
     * @return boolean
     */
    public function has_menu()
    {
        return false;
    }

    /**
     * Returns the html for the application-menu.
     * Empty per default Can be overwritten by the specific application
     *
     * @return string
     */
    public function get_menu()
    {
        return '';
    }

    /**
     * Determines if a given name is the name of an application
     *
     * @param string $string
     * @return boolean
     */
    public static function is_application_name($name)
    {
        return (preg_match('/^[a-z][a-z_]+$/', $name) > 0);
    }

    /**
     *
     * @param integer $failures
     * @param integer $count
     * @param string $failMessageSingle
     * @param string $failMessageMultiple
     * @param string $succesMessageSingle
     * @param string $succesMessageMultiple
     * @param null $context
     *
     * @return string
     */
    public function get_result($failures, $count, $failMessageSingle, $failMessageMultiple, $succesMessageSingle,
        $succesMessageMultiple, $context = null)
    {
        if ($failures)
        {
            if ($count == 1)
            {
                $message = $failMessageSingle;
            }
            else
            {
                $message = $failMessageMultiple;
            }
        }
        else
        {
            if ($count == 1)
            {
                $message = $succesMessageSingle;
            }
            else
            {
                $message = $succesMessageMultiple;
            }
        }

        return Translation::get($message, [], $context);
    }

    /**
     * Generates a general results message like ObjectCreated, ObjectUpdated, ObjectDeleted
     *
     * @param integer $failures
     * @param integer $count
     * @param string $singleObject
     * @param string $multipleObject
     * @param string $type
     * @return string
     */
    public function get_general_result($failures, $count, $singleObject, $multipleObject,
        $type = Application :: RESULT_TYPE_CREATED)
    {
        if ($count == 1)
        {
            $param = array('OBJECT' => $singleObject);

            if ($failures)
            {
                $message = 'ObjectNot' . $type;
            }
            else
            {
                $message = 'Object' . $type;
            }
        }
        else
        {
            $param = array('OBJECTS' => $multipleObject);

            if ($failures)
            {
                $message = 'ObjectsNot' . $type;
            }
            else
            {
                $message = 'Objects' . $type;
            }
        }

        return Translation::get($message, $param);
    }

    /**
     * Returns the breadcrumb generator
     *
     * @return \Chamilo\Libraries\Format\Structure\BreadcrumbGenerator
     */
    public function get_breadcrumb_generator()
    {
        return new BreadcrumbGenerator($this, BreadcrumbTrail::getInstance());
    }

    /**
     *
     * @param \Chamilo\Libraries\Format\Structure\BreadcrumbTrail $breadcrumbtrail
     */
    public function add_additional_breadcrumbs(BreadcrumbTrail $breadcrumbtrail)
    {
    }

    /**
     *
     * @return string[]
     */
    public function get_additional_parameters()
    {
        return array();
    }

    /**
     *
     * @param string $context
     * @return boolean
     */
    public static function is_active($context = null)
    {
        if (self::exists($context))
        {
            if (\Chamilo\Configuration\Configuration::getInstance()->isRegisteredAndActive($context))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    /**
     *
     * @param string[] $parameters
     * @param string[] $filter
     * @param boolean $encode_entities
     * @return string
     */
    public function get_link($parameters = array (), $filter = array(), $encodeEntities = false)
    {
        $redirect = new Redirect($parameters, $filter, $encodeEntities);
        return $redirect->getUrl();
    }

    /**
     *
     * @param string $application
     * @return boolean
     */
    public static function exists($application)
    {
        if (! isset(self::$application_path_cache[$application]))
        {
            $application_path = Path::getInstance()->namespaceToFullPath($application);
            self::$application_path_cache[$application] = is_dir($application_path);
        }
        return self::$application_path_cache[$application];
    }

    /**
     *
     * @param string $applicationName
     * @return string
     * @deprecated Fallback in case we still have an application name somewhere which can't be changed to
     */
    public static function get_application_namespace($applicationName)
    {
        $path = Path::getInstance()->namespaceToFullPath('Chamilo\Core') . $applicationName . '/';

        if (is_dir($path))
        {
            return 'Chamilo\Core\\' . $applicationName;
        }
        else
        {
            $path = Path::getInstance()->namespaceToFullPath('Chamilo\Application') . $applicationName . '/';

            if (is_dir($path))
            {
                return 'Chamilo\Application\\' . $applicationName;
            }
            else
            {
                return $applicationName;
            }
        }
    }

    /**
     * Get a list of core and web applications from the filesystem as an array
     *
     * @param string $type
     * @return string[]
     */
    public static function get_packages_from_filesystem($type = null)
    {
        $applications = array();

        if (! $type || $type == Registration::TYPE_CORE)
        {
            $directories = Filesystem::get_directory_content(
                Path::getInstance()->namespaceToFullPath('Chamilo\Core'),
                Filesystem::LIST_DIRECTORIES,
                false);

            foreach ($directories as $directory)
            {
                $namespace = self::get_application_namespace(basename($directory));

                if (\Chamilo\Configuration\Package\Storage\DataClass\Package::exists($namespace))
                {
                    $applications[] = $namespace;
                }
            }
        }

        if (! $type || $type == Registration::TYPE_APPLICATION)
        {
            $directories = Filesystem::get_directory_content(
                Path::getInstance()->namespaceToFullPath('Chamilo\Application'),
                Filesystem::LIST_DIRECTORIES,
                false);

            foreach ($directories as $directory)
            {
                $namespace = self::get_application_namespace(basename($directory));

                if (\Chamilo\Configuration\Package\Storage\DataClass\Package::exists($namespace))
                {
                    $applications[] = $namespace;
                }
            }
        }

        return $applications;
    }

    /**
     *
     * @param string $type
     * @return string[]
     */
    public static function get_active_packages($type = Registration :: TYPE_APPLICATION)
    {
        $applications = \Chamilo\Configuration\Configuration::registrations_by_type($type);

        $active_applications = array();

        foreach ($applications as $application)
        {
            if (! $application[Registration::PROPERTY_STATUS])
            {
                continue;
            }

            $active_applications[] = $application[Registration::PROPERTY_CONTEXT];
        }
        return $active_applications;
    }

    /**
     *
     * @param string $context
     * @param string[] $fallbackContexts
     * @return string
     * @throws \Chamilo\Libraries\Architecture\Exceptions\UserException
     */
    public static function context_fallback($context, array $fallbackContexts)
    {
        // Check if the context exists
        $context_path = Path::getInstance()->namespaceToFullPath($context);

        if (! is_dir($context_path))
        {
            $original_context = $context;

            // Adding a fallback for old-style contexts which might still exis in certain applications, links, etc.

            $convertedContextParts = explode('\\', $context);

            foreach ($convertedContextParts as $key => $convertedContextPart)
            {
                $convertedContextParts[$key] = (string) StringUtilities::getInstance()->createString(
                    $convertedContextPart)->upperCamelize();
            }

            $convertedContext = implode('\\', $convertedContextParts);

            foreach ($fallbackContexts as $fallbackContext)
            {
                $possibleContext = $fallbackContext . $convertedContext;
                if (is_dir(Path::getInstance()->namespaceToFullPath($possibleContext)))
                {
                    $context = $possibleContext;
                    break;
                }
            }

            $context_path = Path::getInstance()->namespaceToFullPath($context);
            if (! is_dir($context_path))
            {
                throw new UserException(Translation::get('NoContextFound', array('CONTEXT' => $context)));
            }
            else
            {
                $query = $_GET;
                $query[self::PARAM_CONTEXT] = $context;

                $redirect = new Redirect();
                $currentUrl = $redirect->getCurrentUrl();

                $logger = new FileLogger(Path::getInstance()->getLogPath() . '/application_parameters.log', true);
                $logger->log_message($currentUrl);

                $redirect = new Redirect($query);
                $redirect->toUrl();
            }
        }

        return $context;
    }

    /**
     *
     * @return integer
     */
    public function get_level()
    {
        $level = 0;
        $application = $this;

        while ($application->get_application() instanceof Application)
        {
            $level ++;
            $application = $application->get_application();
        }

        return $level;
    }

    /**
     *
     * @return string
     */
    public static function package()
    {
        $className = self::class_name(false);

        if ($className == 'Manager')
        {
            return static::context();
        }
        else
        {
            return ClassnameUtilities::getInstance()->getNamespaceParent(static::context());
        }
    }

    /**
     *
     * @return string
     */
    abstract function run();
}
