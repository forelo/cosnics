<?php
namespace Chamilo\Libraries\Format\Response;

use Chamilo\Libraries\File\Redirect;
use Chamilo\Libraries\Format\Form\FormValidator;
use Chamilo\Libraries\Format\Structure\Page;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\Utilities;

/**
 *
 * @package Chamilo\Libraries\Format\Response
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class NotAuthenticatedResponse extends Response
{
    use \Chamilo\Libraries\Architecture\Traits\ClassContext;
    use \Chamilo\Libraries\Architecture\Traits\DependencyInjectionContainerTrait;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->initializeContainer();

        $page = Page::getInstance();

        $arrParameters = array();
        $arrParameters = array_merge($arrParameters, $page->getHeader()->toHtml());
        $arrParameters['LOGINFORM'] = $this->displayLoginForm();
        $arrParameters = array_merge($arrParameters, $page->getFooter()->toHtml());

        $html[] = $this->getTwig()->render(
            'Chamilo\Libraries:NotAuthenticatedResponse.html.twig', $arrParameters);

        parent::__construct('', implode(PHP_EOL, $html));
    }

    /**
     * Displays the login form
     *
     * @return string
     */
    public function displayLoginForm()
    {
        $translator = Translation::getInstance();
        $redirect = new Redirect();

        $form = new FormValidator('formLogin', 'post', $redirect->getCurrentUrl());

        $form->get_renderer()->setElementTemplate('{element}');

        $form->setRequiredNote(null);

        $form->addElement('html', '<div class="form-group">');
        $form->addElement('html', '<div class="input-group">');

        $form->addElement(
            'html',
            '<div class="input-group-addon">' . $translator->getTranslation('Username') . '</div>');

        $form->addElement(
            'text',
            'login',
            Translation::get('UserName'),
            array('size' => 20, 'onclick' => 'this.value=\'\';', 'class' => 'form-control'));

        $form->addElement('html', '</div>');
        $form->addElement('html', '</div>');

        $form->addElement('html', '<div class="form-group">');
        $form->addElement('html', '<div class="input-group">');

        $form->addElement(
            'html',
            '<div class="input-group-addon">' . $translator->getTranslation('Password') . '</div>');

        $form->addElement(
            'password',
            'password',
            Translation::get('Pass'),
            array('size' => 20, 'onclick' => 'this.value=\'\';', 'class' => 'form-control'));

        $form->addElement('html', '</div>');
        $form->addElement('html', '</div>');

        $form->addElement('html', '<div class="form-group text-right">');
        $form->addElement('style_submit_button', 'submitAuth', Translation::get('Login'), null, null, 'log-in');
        $form->addElement('html', '</div>');

        $form->addRule('password', Translation::get('ThisFieldIsRequired'), 'required');

        $form->addRule('login', Translation::get('ThisFieldIsRequired', null, Utilities::COMMON_LIBRARIES), 'required');

        return $form->toHtml();
    }
}