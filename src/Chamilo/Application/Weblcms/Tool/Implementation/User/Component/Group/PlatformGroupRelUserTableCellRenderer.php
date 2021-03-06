<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\User\Component\Group;

use Chamilo\Application\Weblcms\Rights\WeblcmsRights;
use Chamilo\Application\Weblcms\Tool\Implementation\User\Manager;
use Chamilo\Core\Group\Storage\DataClass\GroupRelUser;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Core\User\Storage\DataManager;
use Chamilo\Libraries\Format\Structure\Toolbar;
use Chamilo\Libraries\Format\Structure\ToolbarItem;
use Chamilo\Libraries\Format\Table\Extension\DataClassTable\DataClassTableCellRenderer;
use Chamilo\Libraries\Format\Table\Interfaces\TableCellRendererActionsColumnSupport;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Translation\Translation;

/**
 * *************************************************************************** Cell renderer for a platform group rel
 * user browser table.
 * 
 * @author Stijn Van Hoecke ****************************************************************************
 */
class PlatformGroupRelUserTableCellRenderer extends DataClassTableCellRenderer implements 
    TableCellRendererActionsColumnSupport
{

    public function render_cell($column, $groupreluser)
    {
        switch ($column->get_name())
        {
            case GroupRelUser::PROPERTY_USER_ID :
                $user_id = parent::render_cell($column, $groupreluser);
                $user = DataManager::retrieve_by_id(User::class_name(), $user_id);
                return $user->get_fullname();
        }
        
        return parent::render_cell($column, $groupreluser);
    }

    public function get_actions($groupreluser)
    {
        $hasEditRight = $this->get_component()->is_allowed(WeblcmsRights::EDIT_RIGHT);

        // construct the toolbar
        $toolbar = new Toolbar(Toolbar::TYPE_HORIZONTAL);
        
        // always show details
        $parameters = array();
        $parameters[\Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION] = Manager::ACTION_USER_DETAILS;
        $parameters[Manager::PARAM_TAB] = Request::get(Manager::PARAM_TAB);
        $parameters[\Chamilo\Application\Weblcms\Manager::PARAM_USERS] = $groupreluser->get_user_id();
        $details_url = $this->get_component()->get_url($parameters);

        if ($hasEditRight || $this->get_component()->getUser()->getId() == $groupreluser->get_user_id())
        {
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('Details'),
                    Theme::getInstance()->getCommonImagePath('Action/Details'),
                    $details_url,
                    ToolbarItem::DISPLAY_ICON
                )
            );
        }
        
        // if we have editing rights, display the reporting action but never
        // allow unsubscribe
        if ($hasEditRight)
        {
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('UnsubscribeNotAvailableForGroups'), 
                    Theme::getInstance()->getCommonImagePath('Action/UnsubscribeNa'), 
                    null, 
                    ToolbarItem::DISPLAY_ICON));
            
            $params = array();
            $params[Manager::PARAM_OBJECTS] = $groupreluser->get_user_id();
            $params[\Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION] = Manager::ACTION_REPORTING;
            $parameters[Manager::PARAM_TAB] = Request::get(Manager::PARAM_TAB);
            $reporting_url = $this->get_component()->get_url($params);
            
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('Report'), 
                    Theme::getInstance()->getCommonImagePath('Action/Reporting'), 
                    $reporting_url, 
                    ToolbarItem::DISPLAY_ICON));
        }
        
        // return
        return $toolbar->as_html();
    }
}
