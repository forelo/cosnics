<?php
namespace Chamilo\Core\Repository\UserView\Table\UserView;

use Chamilo\Core\Repository\UserView\Manager;
use Chamilo\Libraries\Format\Table\Extension\DataClassTable\DataClassTable;
use Chamilo\Libraries\Format\Table\FormAction\TableFormAction;
use Chamilo\Libraries\Format\Table\FormAction\TableFormActions;
use Chamilo\Libraries\Format\Table\Interfaces\TableFormActionsSupport;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\Utilities;

/**
 *
 * @package core\repository\user_view
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class UserViewTable extends DataClassTable implements TableFormActionsSupport
{
    const TABLE_IDENTIFIER = Manager::PARAM_USER_VIEW_ID;

    /**
     *
     * @see \libraries\format\TableFormActionsSupport::get_implemented_form_actions()
     */
    public function get_implemented_form_actions()
    {
        $actions = new TableFormActions(__NAMESPACE__, self::TABLE_IDENTIFIER);
        $actions->add_form_action(
            new TableFormAction(
                $this->get_component()->get_url(array(Manager::PARAM_ACTION => Manager::ACTION_DELETE)), 
                Translation::get('DeleteSelected', null, Utilities::COMMON_LIBRARIES)));
        return $actions;
    }
}
