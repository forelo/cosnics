<?php
namespace Chamilo\Core\Rights\Entity\Group;

use Chamilo\Core\Group\Storage\DataClass\Group;
use Chamilo\Core\Rights\Editor\Table\LocationEntity\LocationEntityTableCellRenderer;
use Chamilo\Libraries\Utilities\StringUtilities;

/**
 * Cell renderer for the platform group entity browser
 * 
 * @author Sven Vanpoucke
 */
class PlatformGroupEntityTableCellRenderer extends LocationEntityTableCellRenderer
{

    /**
     * Renders the cell for the given column and platform group
     * 
     * @param LocationCourseGroupBrowserTableColumnModel $column
     * @param Group $entity_item
     * @return String
     */
    public function render_cell($column, $entity_item)
    {
        switch ($column->get_name())
        {
            case Group::PROPERTY_DESCRIPTION :
                $description = StringUtilities::getInstance()->truncate($entity_item->get_description(), 50);
                return StringUtilities::getInstance()->truncate($description);
            case PlatformGroupEntityTableColumnModel::COLUMN_USERS :
                return $entity_item->count_users();
            case PlatformGroupEntityTableColumnModel::COLUMN_SUBGROUPS :
                return $entity_item->count_subgroups(true);
        }
        
        return parent::render_cell($column, $entity_item);
    }
}
