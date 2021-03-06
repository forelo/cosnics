<?php

namespace Chamilo\Application\Lti\Component;

use Chamilo\Application\Lti\Form\ProviderFormType;
use Chamilo\Application\Lti\Manager;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;

/**
 * @package Chamilo\Application\Lti\Component
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class UpdateProviderComponent extends \Chamilo\Application\Lti\Manager
{

    /**
     * @return string
     *
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     * @throws \Chamilo\Libraries\Architecture\Exceptions\ObjectNotExistException
     */
    function run()
    {
        $this->checkAuthorization(Manager::context(), 'ManageProviders');

        if (!$this->getUser()->is_platform_admin())
        {
            throw new NotAllowedException();
        }

        $provider = $this->getProviderFromRequest();
        $originalParameters = $provider->cloneCustomParameters();

        $form = $this->getForm()->create(ProviderFormType::class, $provider);
        $form->handleRequest($this->getRequest());

        if ($form->isValid())
        {
            try
            {
                $this->getProviderService()->updateProvider($form->getData(), $originalParameters);
                $message = 'ProviderUpdated';
                $success = true;
            }
            catch (\Exception $ex)
            {
                $this->getExceptionLogger()->logException($ex);
                $message = 'ProviderNotUpdated';
                $success = false;
            }

            $this->redirect(
                $this->getTranslator()->trans($message, [], Manager::context()), !$success,
                [self::PARAM_ACTION => self::ACTION_MANAGE_PROVIDERS]
            );
        }

        return $this->getTwig()->render(
            Manager::context() . ':Provider/ProviderForm.html.twig', [
                'HEADER' => $this->render_header(),
                'FORM' => $form->createView(),
                'DEFAULT_CUSTOM_PARAMETERS_JSON' =>
                    $this->getSerializer()->serialize($provider->getCustomParameters()->toArray(), 'json'),
                'FOOTER' => $this->render_footer()
            ]
        );
    }
}