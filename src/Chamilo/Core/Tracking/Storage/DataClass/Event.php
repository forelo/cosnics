<?php
namespace Chamilo\Core\Tracking\Storage\DataClass;

use Chamilo\Core\Tracking\Manager;
use Chamilo\Core\Tracking\Storage\DataManager;
use Chamilo\Libraries\Platform\Configuration\PlatformSetting;
use Chamilo\Libraries\Storage\DataClass\DataClass;

/**
 * $Id: event.class.php 213 2009-11-13 13:38:50Z vanpouckesven $
 * 
 * @package tracking.lib
 */

/**
 * This class presents a event
 * 
 * @author Sven Vanpoucke
 */
class Event extends DataClass
{

    private $trackers;
    const CLASS_NAME = __CLASS__;
    
    /**
     * Event properties
     */
    const PROPERTY_NAME = 'name';
    const PROPERTY_ACTIVE = 'active';
    const PROPERTY_CONTEXT = 'context';

    /**
     * Get the default properties
     * 
     * @return array The property names.
     */
    public static function get_default_property_names()
    {
        return parent :: get_default_property_names(
            array(self :: PROPERTY_NAME, self :: PROPERTY_ACTIVE, self :: PROPERTY_CONTEXT));
    }

    /**
     * inherited
     */
    public function get_data_manager()
    {
        return DataManager :: get_instance();
    }

    /**
     * Returns the name of this Event.
     * 
     * @return the name.
     */
    public function get_name()
    {
        return $this->get_default_property(self :: PROPERTY_NAME);
    }

    /**
     * Sets the name of this Event.
     * 
     * @param name
     */
    public function set_name($name)
    {
        $this->set_default_property(self :: PROPERTY_NAME, $name);
    }

    /**
     * Returns the active of this Event.
     * 
     * @return the active.
     */
    public function get_active()
    {
        return $this->get_default_property(self :: PROPERTY_ACTIVE);
    }

    /**
     * Sets the active of this Event.
     * 
     * @param active
     */
    public function set_active($active)
    {
        $this->set_default_property(self :: PROPERTY_ACTIVE, $active);
    }

    /**
     *
     * @return boolean
     */
    public function is_active()
    {
        return $this->get_active() == true;
    }

    /**
     * Returns the context of this Event.
     * 
     * @return the context.
     */
    public function get_context()
    {
        return $this->get_default_property(self :: PROPERTY_CONTEXT);
    }

    /**
     * Sets the context of this Event.
     * 
     * @param context
     */
    public function set_context($context)
    {
        $this->set_default_property(self :: PROPERTY_CONTEXT, $context);
    }

    /**
     *
     * @param string $name The name of the event
     * @param string $application The name of the application
     * @return Event The event
     */
    public static function factory($name, $context)
    {
        return DataManager :: retrieve_event_by_name($name, $context);
    }

    public function get_trackers()
    {
        if (! $this->trackers)
        {
            $tracker_registrations = DataManager :: retrieve_trackers_from_event($this->get_id());
            $trackers = array();
            
            foreach ($tracker_registrations as $tracker_registration)
            {
                $trackers[] = Tracker :: factory(
                    $tracker_registration->get_tracker(), 
                    $tracker_registration->get_context());
            }
            
            $this->trackers = $trackers;
        }
        return $this->trackers;
    }

    public function set_trackers($trackers)
    {
        $this->trackers = $trackers;
    }

    /**
     *
     * @deprecated Use get_trackers() now
     */
    public function get_tracker_registrations()
    {
        return DataManager :: retrieve_trackers_from_event($this->get_id());
    }

    public static function trigger($name, $context, $parameters)
    {
        $context .= '\Integration\Chamilo\Core\Tracking';
        return self :: factory($name, $context)->run($parameters);
    }

    public function run($parameters)
    {
        $setting = PlatformSetting :: get('enable_tracking', Manager :: context());
        
        if (! $setting)
        {
            return false;
        }
        
        if ($this->is_active())
        {
            $parameters['event'] = $this->get_name();
            $data = array();
            
            $trackers = $this->get_trackers();
            foreach ($trackers as $tracker)
            {
                // FIXME: Temporary solution untill all trackers have been converted
                if (method_exists($tracker, 'set_event'))
                {
                    $tracker->set_event($this);
                }
                
                $tracker->run($parameters);
                
                $data[] = $tracker;
            }
            
            return $data;
        }
        else
        {
            return false;
        }
    }
}
