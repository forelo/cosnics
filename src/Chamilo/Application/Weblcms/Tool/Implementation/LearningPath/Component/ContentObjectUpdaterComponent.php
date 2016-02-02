<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\LearningPath\Component;

use Chamilo\Libraries\Architecture\Interfaces\DelegateComponent;
use Chamilo\Application\Weblcms\Tool\Implementation\LearningPath\Manager;

class ContentObjectUpdaterComponent extends Manager
{

    public function get_additional_parameters()
    {
        return array(\Chamilo\Application\Weblcms\Tool\Manager :: PARAM_PUBLICATION_ID);
    }
}
