<?php
namespace Chamilo\Application\Weblcms\Course\Form;

use Chamilo\Application\Weblcms\Course\Storage\DataClass\Course;
use Chamilo\Application\Weblcms\CourseSettingsConnector;
use Chamilo\Application\Weblcms\CourseSettingsController;
use Chamilo\Application\Weblcms\Form\CommonCourseForm;
use Chamilo\Application\Weblcms\Rights\CourseManagementRights;
use Chamilo\Configuration\Configuration;
use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Format\Utilities\ResourceManager;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Storage\DataClass\DataClass;

/**
 * This class describes a form for the course object
 * 
 * @package \application\weblcms\course
 * @author Yannick & Tristan
 * @author Sven Vanpoucke - Hogeschool Gent - Refactoring
 */
class CourseForm extends CommonCourseForm
{
    /**
     * The name of a button used to select a different course type (automatic trigger through javascript)
     */
    const PROPERTY_SELECT_COURSE_TYPE = 'select_course_type';

    /**
     * **************************************************************************************************************
     * Inherited Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Constructor
     * 
     * @param String $action
     * @param DataClass $base_object
     */
    public function __construct($action, DataClass $base_object)
    {
        $change_course_type_request = Request::post(self::PROPERTY_SELECT_COURSE_TYPE);
        if (! is_null($change_course_type_request))
        {
            unset($_REQUEST['_qf__' . ClassnameUtilities::getInstance()->getClassNameFromNamespace(__CLASS__, true)]);
        }
        
        parent::__construct($action, $base_object);
        
        $this->addElement(
            'submit', 
            self::PROPERTY_SELECT_COURSE_TYPE, 
            'SelectCourseType', 
            array('class' => 'select_course_type', 'style' => 'display: none;'));
        
        $this->addElement(
            'html', 
            ResourceManager::getInstance()->get_resource_html(
                Path::getInstance()->getJavascriptPath('Chamilo\Application\Weblcms\Course', true) . 'CourseForm.js'));
    }

    /**
     * Builds the elements for the general tab
     */
    public function build_general_tab_form_elements()
    {
        $course_type_options = array();
        
        $course_type_options[- 1] = '-- ' . Translation::get('SelectCourseType') . ' --';
        
        $allowCourseCreationWithoutCoursetype = Configuration::getInstance()->get_setting(
            array('Chamilo\Application\Weblcms', 'allow_course_creation_without_coursetype'));
        
        if ($allowCourseCreationWithoutCoursetype)
        {
            $course_type_options[0] = Translation::get('NoCourseType');
        }
        
        $course_management_rights = CourseManagementRights::getInstance();
        
        $course_types = \Chamilo\Application\Weblcms\CourseType\Storage\DataManager::retrieve_active_course_types();
        while ($course_type = $course_types->next_result())
        {
            if ($this->get_base_object()->get_course_type_id() == $course_type->get_id() || $course_management_rights->is_allowed(
                CourseManagementRights::CREATE_COURSE_RIGHT, 
                $course_type->get_id(), 
                CourseManagementRights::TYPE_COURSE_TYPE))
            {
                $course_type_options[$course_type->get_id()] = $course_type->get_title();
            }
        }
        
        $course_type_element = $this->addElement(
            'select', 
            Course::PROPERTY_COURSE_TYPE_ID, 
            Translation::get('CourseType'), 
            $course_type_options, 
            array('class' => 'course_type_selector'));
        
        $this->registerRule(
            'course_type', 
            null, 
            'HTML_QuickForm_Rule_Course_Type', 
            __DIR__ . '/Rule/HTML_QuickForm_Rule_Course_Type.php');
        
        $this->addRule(Course::PROPERTY_COURSE_TYPE_ID, Translation::get('SelectAValidCourseType'), 'course_type');
        $this->addRule(Course::PROPERTY_COURSE_TYPE_ID, Translation::get('ThisFieldIsRequired'), 'required');
        
        $course_title_element = $this->add_textfield(Course::PROPERTY_TITLE, Translation::get('Title'));
        
        $course_visual_code_element = $this->add_textfield(Course::PROPERTY_VISUAL_CODE, Translation::get('VisualCode'));
        
        if ($this->get_base_object()->is_identified())
        {
            $this->validate_element_change($course_type_element, CourseManagementRights::CAN_CHANGE_COURSE_TYPE_RIGHT);
            
            $this->validate_element_change($course_title_element, CourseManagementRights::CAN_CHANGE_COURSE_TITLE_RIGHT);
            
            $this->validate_element_change(
                $course_visual_code_element, 
                CourseManagementRights::CAN_CHANGE_COURSE_VISUAL_CODE_RIGHT);
        }
    }

    /**
     * Returns the defaults for the selected base object (course_type)
     * 
     * @param DataClass $base_object
     *
     * @return string[]
     */
    public function get_base_object_default_values(DataClass $base_object)
    {
        $default_values = array();
        
        $default_values[Course::PROPERTY_TITLE] = $base_object->get_title();
        $default_values[Course::PROPERTY_VISUAL_CODE] = $base_object->get_visual_code();
        $default_values[Course::PROPERTY_COURSE_TYPE_ID] = $base_object->get_course_type_id();
        
        return $default_values;
    }

    /**
     * Sets the default values (Need to overwrite a course setting manually when the object needs to be created to set
     * the current titular as a default)
     */
    public function set_default_values()
    {
        parent::set_default_values();
        
        if (! $this->get_base_object()->is_identified())
        {
            $default_values[CourseSettingsController::SETTING_PARAM_COURSE_SETTINGS . '[' .
                 CourseSettingsConnector::TITULAR . ']'] = \Chamilo\Libraries\Platform\Session\Session::get_user_id();
            
            $this->setDefaults($default_values);
        }
    }

    /**
     * **************************************************************************************************************
     * Helper Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Validates if a change of a given element is allowed and freezes the element if not
     * 
     * @param HTML_QuickForm_Element $element
     * @param int $right_id
     */
    private function validate_element_change($element, $right_id)
    {
        $course_management_rights = CourseManagementRights::getInstance();
        
        if (! $course_management_rights->is_allowed($right_id, $this->get_base_object()->get_id()))
        {
            $element->freeze();
        }
    }
}
