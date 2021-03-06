<?php
namespace Chamilo\Application\Weblcms\Storage\DataClass;

use Chamilo\Libraries\Storage\DataClass\DataClass;
use Chamilo\Libraries\Storage\Query\Condition\EqualityCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Storage\Query\Variable\StaticConditionVariable;

/**
 * This class defines a registered course tool on the platform.
 * The relation between a course (type) and a
 * course tool is defined through the course tool setting "active".
 * 
 * @package application\weblcms\course;
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class CourseTool extends DataClass
{
    /**
     * **************************************************************************************************************
     * Table Properties *
     * **************************************************************************************************************
     */
    const PROPERTY_SECTION_TYPE = 'section_type';
    const PROPERTY_NAME = 'name';
    const PROPERTY_CONTEXT = 'context';

    /**
     * **************************************************************************************************************
     * Inherited Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Returns the default properties of this dataclass
     * 
     * @return String[] - The property names.
     */
    static function get_default_property_names($extended_property_names = array())
    {
        return parent::get_default_property_names(
            array(self::PROPERTY_SECTION_TYPE, self::PROPERTY_NAME, self::PROPERTY_CONTEXT));
    }

    /**
     * Returns the dependencies for this dataclass
     * 
     * @return string[string]
     *
     */
    protected function get_dependencies()
    {
        $id = $this->get_id();
        
        return array(
            CourseToolRelCourseSection::class_name() => new EqualityCondition(
                new PropertyConditionVariable(
                    CourseToolRelCourseSection::class_name(), 
                    CourseToolRelCourseSection::PROPERTY_TOOL_ID), 
                new StaticConditionVariable($id)));
    }

    /**
     * **************************************************************************************************************
     * Getters and Setters *
     * **************************************************************************************************************
     */
    
    /**
     * Returns the section_type property of this object
     * 
     * @return String
     */
    function get_section_type()
    {
        return $this->get_default_property(self::PROPERTY_SECTION_TYPE);
    }

    /**
     * Sets the section_type property of this object
     * 
     * @param $section_type String
     */
    function set_section_type($section_type)
    {
        $this->set_default_property(self::PROPERTY_SECTION_TYPE, $section_type);
    }

    /**
     * Returns the name property of this object
     * 
     * @return String
     */
    function get_name()
    {
        return $this->get_default_property(self::PROPERTY_NAME);
    }

    /**
     * Sets the name property of this object
     * 
     * @param $name String
     */
    function set_name($name)
    {
        $this->set_default_property(self::PROPERTY_NAME, $name);
    }

    /**
     *
     * @return string
     */
    function getContext()
    {
        return $this->get_default_property(self::PROPERTY_CONTEXT);
    }

    /**
     *
     * @param string $context
     */
    function setContext($context)
    {
        $this->set_default_property(self::PROPERTY_CONTEXT, $context);
    }
}