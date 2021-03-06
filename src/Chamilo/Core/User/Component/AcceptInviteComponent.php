<?php

namespace Chamilo\Core\User\Component;

use Chamilo\Core\User\Form\Handler\AcceptInviteFormHandler;
use Chamilo\Core\User\Form\Type\AcceptInviteFormType;
use Chamilo\Core\User\Manager;
use Chamilo\Core\User\Service\UserInviteService;
use Chamilo\Core\User\Storage\DataClass\UserInvite;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Interfaces\NoAuthenticationSupport;
use Chamilo\Libraries\Format\Structure\Page;

/**
 * @package Chamilo\Core\User\Component
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class AcceptInviteComponent extends Manager implements NoAuthenticationSupport
{
    const PARAM_SECURITY_KEY = 'SecurityKey';
    const PARAM_LANGUAGE = 'lang';

    /**
     *
     * @return string
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     * @throws \Exception
     */
    function run()
    {
        if(!$this->areInvitesEnabled())
        {
            throw new NotAllowedException();
        }

        $lang = $this->getRequest()->getFromUrl(self::PARAM_LANGUAGE);
        if(!empty($lang) && in_array($lang, ['en', 'nl']))
        {
            $this->getTranslator()->setLocale($lang);
        }

        try
        {
            $userInvite = $this->getInviteService()->getUserInviteBySecurityKey(
                $this->getRequest()->getFromUrl(self::PARAM_SECURITY_KEY)
            );
        }
        catch (\Exception $ex)
        {
            $userInvite = null;
        }

        $form = $this->getForm()->create(
            AcceptInviteFormType::class,
            [
                AcceptInviteFormType::ELEMENT_EMAIL => $this->getInviteService()->getDefaultEmailFromUserInvite(
                    $userInvite
                )
            ]
        );

        if ($userInvite instanceof UserInvite)
        {
            $formHandler = $this->getFormHandler();
            $formHandler->setUserInvite($userInvite);
            $formHandled = $formHandler->handle($form, $this->getRequest());

            if ($formHandled)
            {
                $user = $formHandler->getUser();
                $sessionUtilities = $this->getSessionUtilities();

                $sessionUtilities->clear();
                $sessionUtilities->register('_uid', $user->getId());

                $this->redirect('', false, [], [self::PARAM_ACTION, self::PARAM_SECURITY_KEY, self::PARAM_CONTEXT]);
                exit;
            }
        }

        Page::getInstance()->setViewMode(Page::VIEW_MODE_HEADERLESS);

        return $this->getTwig()->render(
            Manager::context() . ':AcceptInvite.html.twig',
            [
                'HEADER' => $this->render_header(''), 'FOOTER' => $this->render_footer(), 'FORM' => $form->createView(),
                'SITE_NAME' => $this->getConfigurationConsulter()->getSetting(['Chamilo\Core\Admin', 'site_name']),
                'BRAND_IMAGE' => $this->getConfigurationConsulter()->getSetting(['Chamilo\Core\Menu', 'brand_image']),
                'INVALID_INVITE' => !($userInvite instanceof UserInvite), 'INVITE_URL' => $this->get_url()
            ]
        );
    }

    /**
     * @return \Chamilo\Core\User\Form\Handler\AcceptInviteFormHandler
     */
    protected function getFormHandler()
    {
        return new AcceptInviteFormHandler($this->getInviteService());
    }

    public function get_additional_parameters()
    {
        return [self::PARAM_SECURITY_KEY];
    }
}
