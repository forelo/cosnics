<?php

namespace Chamilo\Application\Weblcms\Bridge\Assignment\Table\Entity\CourseGroup;

use Chamilo\Application\Weblcms\Tool\Implementation\CourseGroup\Storage\DataClass\CourseGroup;

/**
 *
 * @package Chamilo\Application\Weblcms\Bridge\Assignment\Table\Entity\CourseGroup
 *
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class EntityTableCellRenderer
    extends \Chamilo\Application\Weblcms\Bridge\Assignment\Table\Entity\Group\EntityTableCellRenderer
{
    public function render_cell($column, $entity)
    {
        switch (true)
        {
            case ($column->get_name() == CourseGroup::PROPERTY_NAME):
                if($this->canViewEntity($entity)) {
                    return '<a href="' . $this->getEntityUrl($entity) . '">' . $entity[$column->get_name()] . '</a>';
                } else {
                    return $entity[$column->get_name()];
                }
                break;
        }

        return parent::render_cell($column, $entity); // TODO: Change the autogenerated stub
    }
}