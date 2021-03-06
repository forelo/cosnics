<?php
namespace Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking\Storage\DataClass;

class PeerAssessmentGroup extends \Chamilo\Core\Tracking\Storage\DataClass\SimpleTracker
{
    const PROPERTY_PUBLICATION_ID = 'publication_id';
    const PROPERTY_NAME = 'name';
    const PROPERTY_DESCRIPTION = 'description';

    public function validate_parameters(array $parameters = array())
    {
        $this->set_publication_id($parameters[self::PROPERTY_PUBLICATION_ID]);
        $this->set_name($parameters[self::PROPERTY_NAME]);
        $this->set_description($parameters[self::PROPERTY_DESCRIPTION]);
    }

    public static function get_default_property_names($extended_property_names = array())
    {
        return parent::get_default_property_names(
            array(self::PROPERTY_PUBLICATION_ID, self::PROPERTY_NAME, self::PROPERTY_DESCRIPTION));
    }

    public function __call($name, array $arguments)
    {
        // generate error if no getter or setter is called and return
        if (! preg_match('/^(get|set)_(.+)$/', $name, $matches))
        {
            trigger_error('method not found', E_USER_ERROR);
            return;
        }
        // determine the method and property to be called
        $method = $matches[1] . '_default_property';
        $prop = constant($this::class_name() . '::PROPERTY_' . strtoupper($matches[2]));
        // prepend the property to the argument list
        array_unshift($arguments, $prop);
        // call get_default_property or set_default_property with the arguments
        return call_user_func_array(array($this, $method), $arguments);
    }
}
