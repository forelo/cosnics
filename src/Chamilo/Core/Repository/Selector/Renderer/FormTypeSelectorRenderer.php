<?php
namespace Chamilo\Core\Repository\Selector\Renderer;

use Chamilo\Core\Repository\Selector\TypeSelector;
use Chamilo\Core\Repository\Selector\TypeSelectorRenderer;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Format\Form\FormValidator;
use Chamilo\Libraries\Format\Utilities\ResourceManager;
use Chamilo\Libraries\Translation\Translation;

/**
 * Render content object type selection tabs based on their category
 * 
 * @author Hans De Bisschop
 */
class FormTypeSelectorRenderer extends TypeSelectorRenderer
{

    /**
     *
     * @var \libraries\format\FormValidator
     */
    private $form;

    /**
     *
     * @var string
     */
    private $postback_url;

    /**
     *
     * @param \libraries\architecture\application\Application $parent
     * @param multitype:string $content_object_types
     * @param multitype:multitype:string $additional_links
     * @param boolean $use_general_statistics
     * @param string $postback_url
     */
    public function __construct(Application $parent, TypeSelector $type_selector, $postback_url = null)
    {
        parent::__construct($parent, $type_selector);
        
        $this->postback_url = $postback_url ? $postback_url : $parent->get_url();
        $this->form = new FormValidator(
            ClassnameUtilities::getInstance()->getClassNameFromNamespace(__CLASS__, true), 
            'post', 
            $this->postback_url);
    }

    /**
     *
     * @return string
     */
    public function get_postback_url()
    {
        return $this->postback_url;
    }

    /**
     *
     * @return \libraries\format\FormValidator
     */
    public function get_form()
    {
        return $this->form;
    }

    /**
     * Render the content object type selection form
     * 
     * @return string
     */
    public function render()
    {
        $form = $this->get_form();
        
        $select = $form->addElement(
            'select', 
            TypeSelector::PARAM_SELECTION, 
            Translation::get('CreateANew'), 
            array(), 
            array('class' => 'postback'));
        
        foreach ($this->get_type_selector()->as_tree() as $key => $type)
        {
            $attributes = ! is_integer($key) ? array('disabled') : array();
            $select->addOption($type, $key, $attributes);
        }
        
        $form->addElement('style_button', 'submit', Translation::get('Select'), null, null, 'hand-up');
        
        $html = array();
        
        $renderer = clone $form->defaultRenderer();
        $renderer->setElementTemplate('{label}&nbsp;&nbsp;{element}&nbsp;');
        $form->accept($renderer);
        
        $html = array();
        $html[] = '<div style="margin-bottom: 20px;">';
        $html[] = $renderer->toHTML();
        $html[] = ResourceManager::getInstance()->get_resource_html(
            Path::getInstance()->getJavascriptPath('Chamilo\Libraries', true) . 'Postback.js');
        $html[] = '</div>';
        
        return implode(PHP_EOL, $html);
    }
}
