<?php
namespace Chamilo\Core\Repository\ContentObject\Announcement\Integration\Chamilo\Core\Home;

class Manager
{

    public function getBlockTypes()
    {
        return array('Chamilo\Core\Repository\ContentObject\Announcement\Integration\Chamilo\Core\Home\Type\Displayer');
    }
}