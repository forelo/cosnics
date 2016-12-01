<?php
namespace Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass;

use Chamilo\Core\Repository\ContentObject\LearningPathItem\Storage\DataClass\LearningPathItem;
use Chamilo\Core\Repository\Storage\DataClass\ComplexContentObjectItem;

/**
 * $Id: complex_learning_path.class.php 200 2009-11-13 12:30:04Z kariboe $
 * 
 * @package repository.lib.content_object.learning_path
 */
class ComplexLearningPath extends ComplexContentObjectItem
{

    public function get_allowed_types()
    {
        return array(LearningPath::class_name(), LearningPathItem::class_name());
    }
}
