<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\CourseSections\Component;

use Chamilo\Application\Weblcms\Storage\DataClass\CourseSection;
use Chamilo\Application\Weblcms\Tool\Implementation\CourseSections\CourseSectionForm;
use Chamilo\Application\Weblcms\Tool\Implementation\CourseSections\Manager;
use Chamilo\Libraries\Format\Structure\Breadcrumb;
use Chamilo\Libraries\Format\Structure\BreadcrumbTrail;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\Utilities;

/**
 *
 * @package application.lib.weblcms.tool.course_sections.component
 */
class CreatorComponent extends Manager
{

    /**
     * Runs this component and displays its output.
     */
    public function run()
    {
        $trail = BreadcrumbTrail::getInstance();
        $trail->add(
            new Breadcrumb(
                $this->get_url(
                    array(\Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_CREATE_COURSE_SECTION)),
                Translation::get('Create', null, Utilities::COMMON_LIBRARIES)));

        if (! $this->get_course()->is_course_admin($this->get_parent()->get_user()))
        {
            throw new \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException();
        }

        $course_section = new CourseSection();
        $course_section->set_course_id($this->get_course_id());
        $course_section->set_type(CourseSection::TYPE_CUSTOM);

        $form = new CourseSectionForm(
            CourseSectionForm::TYPE_CREATE,
            $course_section,
            $this->get_url(array(self::PARAM_ACTION => self::ACTION_CREATE_COURSE_SECTION)));

        if ($form->validate())
        {
            $success = $form->create_course_section();
            if ($success)
            {
                // $course_section =
                $form->get_course_section();
                $this->redirect(
                    Translation::get(
                        'ObjectCreated',
                        array('OBJECT' => Translation::get('CourseSection')),
                        Utilities::COMMON_LIBRARIES),
                    (false),
                    array(self::PARAM_ACTION => self::ACTION_VIEW_COURSE_SECTIONS));
            }
            else
            {
                $this->redirect(
                    Translation::get(
                        'ObjectNotCreated',
                        array('OBJECT' => Translation::get('CourseSection')),
                        Utilities::COMMON_LIBRARIES),
                    (true),
                    array(self::PARAM_ACTION => self::ACTION_VIEW_COURSE_SECTIONS));
            }
        }
        else
        {
            $html = array();

            $html[] = $this->render_header();
            $html[] = $form->toHtml();
            $html[] = $this->render_footer();

            return implode(PHP_EOL, $html);
        }
    }
}
