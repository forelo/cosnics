<?php
namespace Chamilo\Libraries\Format\Menu\DynamicContentMenu;

/**
 * Extension on the dynamic content menu to display this menu in a form
 * 
 * @package \libraries
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class FormDynamicContentMenu extends DynamicContentMenu
{

    /**
     * **************************************************************************************************************
     * Render Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Adds the menu to the form
     * 
     * @param FormValidator $form
     */
    public function add_to_form($form)
    {
        $form->addElement('html', $this->render_header());
        $form->addElement('html', $this->render_menu());
        $form->addElement('html', $this->render_content_header());
        
        foreach ($this->get_menu_items() as $menu_item)
        {
            $menu_item->add_to_form($form);
        }
        
        $form->addElement('html', $this->render_small_footer());
        $form->addElement('html', $this->render_footer());
    }
}
