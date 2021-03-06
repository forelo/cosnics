<?php
namespace Chamilo\Core\Repository\Viewer\Component;

use Chamilo\Core\Repository\Form\ContentObjectForm;
use Chamilo\Core\Repository\Selector\TabsTypeSelectorSupport;
use Chamilo\Core\Repository\Selector\TypeSelector;
use Chamilo\Core\Repository\Selector\TypeSelectorFactory;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Core\Repository\Storage\DataClass\TemplateRegistration;
use Chamilo\Core\Repository\Viewer\Manager;
use Chamilo\Core\Repository\Workspace\PersonalWorkspace;
use Chamilo\Core\Repository\Workspace\Service\RightsService;
use Chamilo\Libraries\Architecture\Exceptions\NoObjectSelectedException;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Interfaces\DelegateComponent;
use Chamilo\Libraries\Format\Structure\Breadcrumb;
use Chamilo\Libraries\Format\Structure\BreadcrumbTrail;
use Chamilo\Libraries\Format\Structure\ToolbarItem;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Core\Repository\Selector\Renderer\BasicTypeSelectorRenderer;

class CreatorComponent extends Manager implements DelegateComponent, TabsTypeSelectorSupport
{

    public function run($params = array())
    {
        $content_object_id = Request::get(self::PARAM_EDIT_ID);
        
        if ($content_object_id)
        {
            return $this->get_editing_form($content_object_id);
        }
        else
        {
            $type_selection = TypeSelector::get_selection();
            
            if ($type_selection)
            {
                $typeSelectorFactory = new TypeSelectorFactory($this->get_types(), $this->get_user_id());
                $type_selector = $typeSelectorFactory->getTypeSelector();
                
                $all_types = $type_selector->get_unique_content_object_template_ids();
                
                if (! in_array($type_selection, $all_types))
                {
                    throw new NoObjectSelectedException(
                        Translation::get('ContentObject', \Chamilo\Core\Repository\Manager::context()));
                }
                
                return $this->get_creation_form($type_selection);
            }
            else
            {
                $types = $this->get_types();
                $typeSelectorFactory = new TypeSelectorFactory($types, $this->get_user_id());
                $type_selector = $typeSelectorFactory->getTypeSelector();
                
                if (count($types) == 1 && $type_selector->count_options() == 1)
                {
                    $single_category = array_pop($type_selector->get_categories());
                    $single_option = array_pop($single_category->get_options());
                    
                    return $this->get_creation_form($single_option->get_template_registration_id());
                }
                else
                {
                    $type_selector_renderer = new BasicTypeSelectorRenderer($this, $type_selector);
                    
                    $html = array();
                    
                    $html[] = $this->render_header();
                    $html[] = $type_selector_renderer->render();
                    $html[] = $this->render_footer();
                    
                    return implode(PHP_EOL, $html);
                }
            }
        }
    }

    /**
     *
     * @param string $type
     * @return string
     */
    public function get_content_object_type_creation_url($template_registration_id)
    {
        $object_type_parameters = $this->get_parameters();
        $object_type_parameters[TypeSelector::PARAM_SELECTION] = $template_registration_id;
        return $this->get_url($object_type_parameters);
    }

    /**
     *
     * @param string $type
     */
    protected function get_creation_form($template_id)
    {
        /** @var TemplateRegistration $template_registration */
        $template_registration = \Chamilo\Core\Repository\Configuration::registration_by_id($template_id);
        $template = $template_registration->get_template();

        $object = $template->get_content_object();
        $object->set_template_registration_id($template_id);
        $object->set_owner_id($this->get_user_id());

        $contentObjectType = $object->get_type();

        if($this->hasUserTemplatesForType($contentObjectType))
        {
            $userTemplates = $this->getUserTemplatesForType($contentObjectType);
            $userTemplate = $userTemplates[0];

            $object->copyPropertiesFromOtherObject($userTemplate);
        }

        $content_object_type_image = 'Logo/template/' . $template_registration->get_name() . '/16';
        
        BreadcrumbTrail::getInstance()->add(
            new Breadcrumb(
                $this->get_url(), 
                Translation::get(
                    'CreateContentType', 
                    array(
                        'OBJECTTYPE' => strtolower(
                            Translation::get(
                                $template->translate('TypeName'), 
                                null, 
                                $template_registration->get_content_object_type())), 
                        'ICON' => Theme::getInstance()->getImage(
                            $content_object_type_image, 
                            'png', 
                            Translation::get(
                                $template->translate('TypeName'), 
                                null, 
                                $template_registration->get_content_object_type()), 
                            null, 
                            ToolbarItem::DISPLAY_ICON, 
                            false, 
                            $template_registration->get_content_object_type())))));
        
        $form = ContentObjectForm::factory(
            ContentObjectForm::TYPE_CREATE, 
            new PersonalWorkspace($this->get_user()), 
            $object, 
            'create', 
            'post', 
            $this->get_url(array_merge(array(TypeSelector::PARAM_SELECTION => $template_id), $this->get_parameters())));
        
        return $this->handle_form($form, ContentObjectForm::TYPE_CREATE);
    }

    /**
     *
     * @param int $content_object_id
     *
     * @return string
     * @throws NotAllowedException
     */
    protected function get_editing_form($content_object_id)
    {
        $content_object = \Chamilo\Core\Repository\Storage\DataManager::retrieve_by_id(
            ContentObject::class_name(), 
            $content_object_id);

        $canEditContentObject =
            RightsService::getInstance()->canEditContentObject($this->getUser(), $content_object);

        if(!$canEditContentObject)
        {
            throw new NotAllowedException();
        }

        BreadcrumbTrail::getInstance()->add(
            new Breadcrumb(
                null, 
                Translation::get(
                    'UpdateContentType', 
                    array(
                        'OBJECTTYPE' => strtolower(Translation::get('TypeName', null, $content_object->get_type())), 
                        'ICON' => Theme::getInstance()->getImage(
                            'Logo/16', 
                            'png', 
                            Translation::get('TypeName', null, $content_object->get_type()), 
                            null, 
                            ToolbarItem::DISPLAY_ICON, 
                            false, 
                            $content_object->get_type())), 
                    \Chamilo\Core\Repository\Manager::context())));
        
        $form = ContentObjectForm::factory(
            ContentObjectForm::TYPE_EDIT, 
            new PersonalWorkspace($this->get_user()), 
            $content_object, 
            'edit', 
            'post', 
            $this->get_url(array_merge($this->get_parameters(), array(self::PARAM_EDIT_ID => $content_object_id))));
        
        return $this->handle_form($form, ContentObjectForm::TYPE_EDIT);
    }

    /*
     * Handles the displaying and validation of a create/edit content object form
     */
    protected function handle_form($form, $type = ContentObjectForm :: TYPE_CREATE)
    {
        if ($form->validate())
        {
            if ($type == ContentObjectForm::TYPE_EDIT)
            {
                $form->update_content_object();
                $content_object = $form->get_content_object();
            }
            else
            {
                $content_object = $form->create_content_object();
            }
            
            if (! $content_object)
            {
                $redirect_params = array_merge(
                    $this->get_parameters(), 
                    array(self::PARAM_ACTION => self::ACTION_CREATOR));
                $this->redirect(Translation::get('ContentObjectNotCreated'), true, $redirect_params);
            }
            
            if (is_array($content_object))
            {
                $content_object_ids = array();
                foreach ($content_object as $object)
                {
                    $content_object_ids[] = $object->get_id();
                }
            }
            else
            {
                $content_object_ids = $content_object->get_id();
            }
            
            $redirect_parameters = array_merge($this->get_parameters(), array(self::PARAM_ID => $content_object_ids));
            
            $this->redirect(null, false, $redirect_parameters);
        }
        else
        {
            $html = array();
            
            $html[] = $this->render_header();
            $html[] = $form->toHtml();
            $html[] = $this->render_footer();
            
            return implode(PHP_EOL, $html);
        }
    }

    public function add_additional_breadcrumbs(BreadcrumbTrail $breadcrumbtrail)
    {
        $breadcrumbtrail->add_help('repo_viewer_viewer');
    }

    public function get_additional_parameters()
    {
        return array(self::PARAM_EDIT_ID, self::PARAM_CONTENT_OBJECT_TYPE);
    }
}
