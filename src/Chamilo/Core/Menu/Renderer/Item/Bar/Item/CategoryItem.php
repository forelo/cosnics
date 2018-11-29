<?php
namespace Chamilo\Core\Menu\Renderer\Item\Bar\Item;

use Chamilo\Core\Menu\Manager;
use Chamilo\Core\Menu\Renderer\Item\Bar\Bar;
use Chamilo\Core\Menu\Renderer\Item\Renderer;
use Chamilo\Core\Menu\Rights;
use Chamilo\Core\Menu\Storage\DataClass\Item;
use Chamilo\Core\Rights\Entity\PlatformGroupEntity;
use Chamilo\Core\Rights\Entity\UserEntity;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package Chamilo\Core\Menu\Renderer\Item\Bar\Item
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class CategoryItem extends Bar
{

    /**
     *
     * @var boolean
     */
    private $isItemSelected;

    /**
     *
     * @var \Chamilo\Core\Menu\Renderer\Item\Renderer[]
     */
    private $itemRenderers = array();

    /**
     *
     * @see \Chamilo\Core\Menu\Renderer\Item\Bar\Bar::isItemSelected()
     */
    public function isItemSelected()
    {
        if (! isset($this->isItemSelected))
        {
            $this->isItemSelected = false;
            
            foreach ($this->getChildren() as $child)
            {
                if ($this->getItemRenderer($this->getMenuRenderer(), $child, $this)->isItemSelected())
                {
                    $this->isItemSelected = true;
                    break;
                }
            }
        }
        
        return $this->isItemSelected;
    }

    public function render()
    {
        $arrParameters = array();

        $arrParameters['SELECTED'] = $this->isSelected();
        
        if ($this->getItem()->has_children())
        {
            $entities = array();
            $entities[] = new UserEntity();
            $entities[] = new PlatformGroupEntity();
            
            foreach ($this->getChildren() as $child)
            {
                if (($child->get_id() && Rights::getInstance()->is_allowed(
                    Rights::VIEW_RIGHT, 
                    Manager::context(), 
                    null, 
                    $entities, 
                    $child->get_id(), 
                    Rights::TYPE_ITEM)) || ! $child->get_id())
                {
                    if (! $child->is_hidden())
                    {
                        $arrParameters['SUBMENU'][] = $this->getItemRenderer($this->getMenuRenderer(), $child, $this)->render();
                    }
                }
            }
        }

        $arrParameters['TITLE'] = $this->getItem()->get_titles()->get_translation(Translation::getInstance()->getLanguageIsocode());
        
        if ($this->getItem()->show_icon())
        {
            if(!empty($this->getItem()->getIconClass()))
            {
                $arrParameters['ICONCLASS'] = $this->renderCssIcon();
            }
            else
            {
                $arrParameters['IMAGE'] = Theme::getInstance()->getImagePath(
                    Manager::context(),
                    'Menu/Folder' . ($arrParameters['SELECTED'] ? 'Selected' : '')
                );
            }
        }

        if ($this->getItem()->show_title())
        {
            $arrParameters['LABEL'] = $this->getItem()->show_icon();
        }

        $template = $this->getTwig()->load('Chamilo\Core\Menu:CategoryItem.html.twig');
        return $template->renderBlock('CategoryItem', $arrParameters);
    }

    /**
     *
     * @param \Chamilo\Core\Menu\Renderer\Menu\Renderer $menuRenderer
     * @param \Chamilo\Core\Menu\Storage\DataClass\Item $item
     * @return \Chamilo\Core\Menu\Renderer\Item\Bar\Bar
     */
    public function getItemRenderer(\Chamilo\Core\Menu\Renderer\Menu\Renderer $menuRenderer, Item $item, 
        \Chamilo\Core\Menu\Renderer\Item\Bar\Bar $parentRenderer)
    {
        if (! isset($this->itemRenderers[$item->get_id()]))
        {
            $this->itemRenderers[$item->get_id()] = Renderer::factory($menuRenderer, $item, $parentRenderer);
        }
        
        return $this->itemRenderers[$item->get_id()];
    }

    public function getChildren()
    {
        return $this->getMenuRenderer()->getItemService()->getItemsByParentIdentifier($this->getItem()->get_id());
    }
}
