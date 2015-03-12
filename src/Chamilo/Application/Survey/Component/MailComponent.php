<?php
namespace Chamilo\Application\Survey\Component;

use Chamilo\Application\Survey\Manager;
use Chamilo\Libraries\Architecture\Application\ApplicationFactory;
use Chamilo\Libraries\Architecture\Interfaces\DelegateComponent;

class MailComponent extends Manager implements DelegateComponent
{

    /**
     * Runs this component and displays its output.
     */
    function run()
    {
        $factory = new ApplicationFactory(
            $this->getRequest(),
            \Chamilo\Application\Survey\Mail\Manager :: context(),
            $this->get_user(),
            $this);
        $factory->run();
    }
}
?>