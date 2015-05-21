<?php
namespace Chamilo\Core\Tracking\Archive;

use Chamilo\Core\Tracking\Manager;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\File\Redirect;
use Chamilo\Libraries\Format\Display;
use Chamilo\Libraries\Format\Structure\Breadcrumb;
use Chamilo\Libraries\Format\Structure\BreadcrumbTrail;
use Chamilo\Libraries\Format\Tabs\DynamicTabsRenderer;
use Chamilo\Libraries\Platform\Translation;
use HTML_QuickForm_Action_Display;

/**
 * $Id: archive_wizard_display.class.php 151 2009-11-10 12:23:34Z kariboe $
 *
 * @package tracking.lib.tracking_manager.component.wizards.archive
 */

/**
 * This class provides the needed functionality to show a page in a tracking archiver wizard.
 *
 * @author Sven Vanpoucke
 */
class ArchiveWizardDisplay extends HTML_QuickForm_Action_Display
{

    /**
     * The component in which the wizard runs
     */
    private $parent;

    /**
     * Constructor
     *
     * @param TrackingManagerArchiveComponent $parent The component in which the wizard runs
     */
    public function __construct($parent)
    {
        $this->parent = $parent;
    }

    /**
     * Displays the HTML-code of a page in the wizard
     *
     * @param HTML_Quickform_Page $page The page to display.
     */
    public function _renderForm($current_page)
    {
        $trail = BreadcrumbTrail :: get_instance();

        $redirect = new Redirect(
            array(
                Application :: PARAM_CONTEXT => \Chamilo\Core\Admin\Manager :: context(),
                \Chamilo\Core\Admin\Manager :: PARAM_ACTION => \Chamilo\Core\Admin\Manager :: ACTION_ADMIN_BROWSER));
        $trail->add(
            new Breadcrumb(
                $redirect->getUrl(),
                Translation :: get('Administration', null, \Chamilo\Core\Admin\Manager :: context())));

        $redirect = new Redirect(
            array(
                Application :: PARAM_CONTEXT => \Chamilo\Core\Admin\Manager :: context(),
                \Chamilo\Core\Admin\Manager :: PARAM_ACTION => \Chamilo\Core\Admin\Manager :: ACTION_ADMIN_BROWSER,
                DynamicTabsRenderer :: PARAM_SELECTED_TAB => Manager :: APPLICATION_NAME));
        $trail->add(
            new Breadcrumb($redirect->getUrl(), Translation :: get('Tracking')));
        $trail->add(
            new Breadcrumb(
                $this->parent->get_url(array(Application :: PARAM_ACTION => Manager :: ACTION_ARCHIVE)),
                Translation :: get('Archiver')));

        $html = array();

        $html[] = $this->parent->render_header();

        $html[] = '<div style="float: left; background-color:#EFEFEF; width: 17%; margin-right: 20px;padding: 15px; min-height: 400px;">';

        $all_pages = $current_page->controller->_pages;
        $total_number_of_pages = count($all_pages);
        $current_page_number = 0;
        $page_number = 0;

        $html[] = '<ol>';

        foreach ($all_pages as $page)
        {
            $page_number ++;

            if ($page->get_title() == $current_page->get_title())
            {
                $current_page_number = $page_number;
                $html[] = '<li style="font-weight: bold;">' . $page->get_title() . '</li>';
            }
            else
            {
                $html[] = '<li>' . $page->get_title() . '</li>';
            }
        }

        $html[] = '</ol>';
        $html[] = '</div>' . "\n";

        $html[] = '<div style="margin: 10px; float: right; width: 75%;">';
        $html[] = '<h2>' . Translation :: get('Step') . ' ' . $current_page_number . ' ' . Translation :: get('of') . ' ' .
             $total_number_of_pages . ' &ndash; ' . $current_page->get_title() . '</h2>';
        $html[] = '<div>';
        $html[] = $current_page->get_info();
        $html[] = '</div>';

        if (isset($_SESSION['install_message']))
        {
            $html[] = Display :: normal_message($_SESSION['install_message']);
            unset($_SESSION['install_message']);
        }
        if (isset($_SESSION['install_error_message']))
        {
            $html[] = Display :: error_message($_SESSION['install_error_message']);
            unset($_SESSION['install_error_message']);
        }

        $html[] = $current_page->toHtml();
        $html[] = '</div>';

        $html[] = $this->parent->render_footer();

        return implode(PHP_EOL, $html);
    }
}
