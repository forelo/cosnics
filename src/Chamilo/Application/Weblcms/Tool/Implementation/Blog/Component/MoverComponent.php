<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\Blog\Component;

use Chamilo\Application\Weblcms\Tool\Implementation\Blog\Manager;
use Chamilo\Libraries\Platform\Session\Request;

class MoverComponent extends Manager
{

    public function get_move_direction()
    {
        return Request::get(\Chamilo\Application\Weblcms\Tool\Manager::PARAM_MOVE_DIRECTION);
    }
}
