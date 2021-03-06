<?php

namespace Chamilo\Core\Repository\ContentObject\Assignment\Display\Ephorus\Table\EntryRequest;

use Chamilo\Core\Repository\ContentObject\Assignment\Display\Ephorus\Manager;
use Chamilo\Libraries\Format\Table\Extension\DataClassTable\DataClassTable;
use Chamilo\Libraries\Format\Table\FormAction\TableFormAction;
use Chamilo\Libraries\Format\Table\FormAction\TableFormActions;
use Chamilo\Libraries\Format\Table\Interfaces\TableFormActionsSupport;
use Chamilo\Libraries\Translation\Translation;

/**
 * Table for ephorus requests browser.
 *
 * @author Tom Goethals - Hogeschool Gent
 */
class EntryRequestTable extends DataClassTable implements TableFormActionsSupport
{
    const TABLE_IDENTIFIER = Manager::PARAM_ENTRY_ID;
    const EPHORUS_TRANSLATION_CONTEXT = 'Chamilo\Application\Weblcms\Tool\Implementation\Ephorus';

    public function get_implemented_form_actions()
    {
        $actions = new TableFormActions(__NAMESPACE__, self::TABLE_IDENTIFIER);

        $actions->add_form_action(
            new TableFormAction(
                $this->get_component()->get_url(
                    array(Manager::PARAM_ACTION => Manager::ACTION_CHANGE_INDEX_VISIBILITY)
                ),
                Translation:: get('ToggleIndexVisibility', null, self::EPHORUS_TRANSLATION_CONTEXT),
                false
            )
        );

//        $actions->add_form_action(
//            new TableFormAction(
//                $this->get_component()->get_url(array(Manager::PARAM_ACTION => Manager::ACTION_CREATE)),
//                Translation:: get('AddDocuments', null, self::EPHORUS_TRANSLATION_CONTEXT),
//                false
//            )
//        );

        return $actions;
    }
}
