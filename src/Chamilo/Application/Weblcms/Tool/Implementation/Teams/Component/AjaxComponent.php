<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\Teams\Component;

use Chamilo\Application\Weblcms\Rights\WeblcmsRights;
use Chamilo\Application\Weblcms\Tool\Implementation\Teams\Manager;
use Chamilo\Core\Repository\Viewer\ApplicationConfiguration;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Interfaces\DelegateComponent;

/**
 * @package Chamilo\Application\Weblcms\Tool\Implementation\Teams\Component
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class AjaxComponent extends Manager implements DelegateComponent
{
    public function run()
    {
//        if(!$this->is_allowed(WeblcmsRights::EDIT_RIGHT))
//        {
//            throw new NotAllowedException();
//        }

        $configuration = new ApplicationConfiguration($this->getRequest(), $this->getUser(), $this);

        return $this->getApplicationFactory()->getApplication(
            \Chamilo\Application\Weblcms\Tool\Implementation\Teams\Ajax\Manager::context(), $configuration
        )->run();
    }
}
