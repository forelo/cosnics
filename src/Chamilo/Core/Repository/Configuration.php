<?php
namespace Chamilo\Core\Repository;

use Chamilo\Core\Repository\Storage\DataClass\TemplateRegistration;
use Chamilo\Core\Repository\Storage\DataManager;
use Chamilo\Libraries\Storage\Cache\DataClassResultSetCache;
use Chamilo\Libraries\File\Cache\FilesystemCache;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrievesParameters;

/**
 * This class represents the current configuration
 *
 * @package libraries
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 */
class Configuration
{
    const REGISTRATION_ID = 1;
    const REGISTRATION_DEFAULT = 2;
    const REGISTRATION_USER_ID = 3;

    /**
     * Instance of this class for the singleton pattern.
     *
     * @var Configuration
     */
    private static $instance;

    /**
     *
     * @var Registration[]
     */
    private $registrations;

    /**
     * Constructor.
     */
    private function __construct()
    {
        $this->initialize();
    }

    /**
     * Returns the instance of this class.
     *
     * @return Configuration The instance.
     */
    public static function get_instance()
    {
        if (! isset(self :: $instance))
        {
            self :: $instance = new static();
        }
        return self :: $instance;
    }

    private function initialize()
    {
        $cache = new FilesystemCache(Path :: getInstance()->getCachePath(__NAMESPACE__));

        if ($cache->contains('configuration.registrations'))
        {
            $this->registrations = $cache->fetch('configuration.registrations');
        }
        else
        {
            $registrations = DataManager :: retrieves(
                TemplateRegistration :: class_name(),
                new DataClassRetrievesParameters());

            while ($registration = $registrations->next_result())
            {
                $this->registrations[self :: REGISTRATION_ID][$registration->get_id()] = $registration;
                $this->registrations[self :: REGISTRATION_USER_ID][$registration->get_user_id()][$registration->get_content_object_type()][] = $registration;

                if ($registration->get_default())
                {
                    $this->registrations[self :: REGISTRATION_DEFAULT][$registration->get_content_object_type()] = $registration;
                }
            }

            $cache->save('configuration.registrations', $this->registrations);
        }
    }

    /**
     *
     * @param int $id
     */
    public function get_registration_by_id($id)
    {
        return $this->registrations[self :: REGISTRATION_ID][$id];
    }

    /**
     *
     * @param int $id
     */
    public static function registration_by_id($id)
    {
        return self :: get_instance()->get_registration_by_id($id);
    }

    /**
     *
     * @param string $type
     */
    public function get_registration_default_by_type($type)
    {
        return $this->registrations[self :: REGISTRATION_DEFAULT][$type];
    }

    /**
     *
     * @param string $type
     */
    public static function registration_default_by_type($type)
    {
        return self :: get_instance()->get_registration_default_by_type($type);
    }

    /**
     * Get the template registrations for a specific content object type and/or user_id
     *
     * @param string[] $types
     * @param int $user_id
     * @return TemplateRegistration[]
     */
    public function get_registrations_by_types($types, $user_id = null)
    {
        $registered_types = array();

        if (! is_array($types))
        {
            $types = array($types);
        }

        foreach ($types as $type)
        {
            $common_registrations = $this->registrations[self :: REGISTRATION_USER_ID][0][$type];

            if (count($common_registrations) > 0)
            {
                $registered_types = array_merge($registered_types, $common_registrations);
            }

            if ($user_id)
            {
                $user_registrations = $this->registrations[self :: REGISTRATION_USER_ID][$user_id][$type];

                if (count($user_registrations) > 0)
                {
                    $registered_types = array_merge($registered_types, $user_registrations);
                }
            }
        }

        return $registered_types;
    }

    /**
     * Get the template registrations for a specific content object type and/or user_id
     *
     * @param string[] $types
     * @param int $user_id
     * @return TemplateRegistration[]
     */
    public static function registrations_by_types($types, $user_id = null)
    {
        return self :: get_instance()->get_registrations_by_types($types, $user_id);
    }

    /**
     *
     * @return Registration[]
     */
    public function get_registrations()
    {
        return $this->registrations;
    }

    /**
     * Trigger a reset of the entire configuration to force a reload from storage
     */
    public static function reset()
    {
        DataClassResultSetCache :: truncates(array(TemplateRegistration :: class_name()));
        self :: get_instance()->initialize();
    }
}
