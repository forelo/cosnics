<?php
namespace Chamilo\Core\Menu\Renderer\Item\Bar;

use Chamilo\Core\Menu\Renderer\Item\Renderer;
use Chamilo\Core\User\Storage\DataClass\User;

/**
 *
 * @package Chamilo\Core\Menu\Renderer\Item\Bar
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
abstract class Bar extends Renderer
{

    public function isSelected()
    {
        return $this->isItemSelected() || $this->isParentSelected();
    }

    abstract function isItemSelected();

    public function isParentSelected()
    {
        return $this->getItem()->hasParent() && $this->getParentRenderer()->isSelected();
    }

    public function canViewMenuItem(User $user)
    {
        return true;
    }

    protected function renderCssIcon()
    {
        $html = [];

        $arrParameters = array();

        $arrParameters['ICONCLASS'] = $this->getItem()->getIconClass();

        return $arrParameters;
    }

    public function render()
    {
        if (! $this->canViewMenuItem($this->getMenuRenderer()->get_user()))
        {
            return '';
        }
        
        $html = array();

        $html[] = $this->getContent();

        return implode(PHP_EOL, $html);
    }
}
