<?php

namespace Chamilo\Core\User\Integration\Chamilo\Core\Menu\Renderer\Item\Bar\Item;

use Chamilo\Configuration\Configuration;
use Chamilo\Core\Menu\Renderer\Item\Bar\Bar;
use Chamilo\Core\User\Manager;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\File\Redirect;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package Chamilo\Core\User\Integration\Chamilo\Core\Menu\Renderer\Item\Bar\Item
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class WidgetItem extends Bar
{

    public function isItemSelected()
    {
        return false;
    }

    /**
     *
     * @param string $action
     * @return string
     */
    public function getUserUrl($action)
    {
        $redirect = new Redirect(
            array(Application::PARAM_CONTEXT => Manager::context(), Application::PARAM_ACTION => $action));
        return $redirect->getUrl();
    }

    /**
     *
     * @return string
     */
    public function getAccountUrl()
    {
        return $this->getUserUrl(Manager::ACTION_VIEW_ACCOUNT);
    }

    /**
     *
     * @return string
     */
    public function getPictureUrl()
    {
        return $this->getUserUrl(Manager::ACTION_CHANGE_PICTURE);
    }

    /**
     *
     * @return string
     */
    public function getSettingsUrl()
    {
        return $this->getUserUrl(Manager::ACTION_USER_SETTINGS);
    }

    /**
     *
     * @return string
     */
    public function getLogoutUrl()
    {
        return $this->getUserUrl(Manager::ACTION_LOGOUT);
    }

    /**
     *
     * @see \Chamilo\Core\Menu\Renderer\Item\Bar\Bar::render()
     */
    public function render()
    {
        if (!$this->canViewMenuItem($this->getMenuRenderer()->get_user())) {
            return '';
        }

        $arrParameters = array();

        $arrParameters['TITLE'] = htmlentities(
            $this->getItem()->get_titles()->get_translation(Translation::getInstance()->getLanguageIsocode()));

        $arrParameters['SELECTED'] = $this->isSelected();

        if ($this->getItem()->show_icon()) {
            $profilePhotoUrl = new Redirect(
                array(
                    Application::PARAM_CONTEXT => \Chamilo\Core\User\Ajax\Manager::context(),
                    Application::PARAM_ACTION => \Chamilo\Core\User\Ajax\Manager::ACTION_USER_PICTURE,
                    \Chamilo\Core\User\Manager::PARAM_USER_USER_ID => $this->getMenuRenderer()->get_user()->get_id()));

            $arrParameters['PROFILEPICTUREURL'] = $profilePhotoUrl->getUrl();
        }

        if ($this->getItem()->show_title()) {
            $arrParameters['LABEL'] = $this->getItem()->show_icon();
        }

        if (Configuration::get(\Chamilo\Core\User\Manager::context(), 'allow_change_user_picture')) {
            $arrParameters['USERPICTUREURL'] = $this->getPictureUrl();
            $arrParameters['USEREDITPROFILE'] = Translation::get('EditProfilePictureOverlay', null, 'Chamilo\Core\User');
        }

        $user = $this->getMenuRenderer()->get_user();
        $arrParameters['USERFULLNAME'] = $user->get_fullname();
        $arrParameters['USEREMAIL'] = $user->get_email();

        $arrParameters['ACCOUNTURL'] = $this->getAccountUrl();
        $arrParameters['ACCOUNT'] = Translation::get('MyAccount', null, 'Chamilo\Core\User');

        $arrParameters['SETTINGSURL'] = $this->getSettingsUrl();
        $arrParameters['SETTINGS'] = Translation::get('Settings', null, 'Chamilo\Core\User');

        $arrParameters['LOGOUTURL'] = $this->getLogoutUrl();
        $arrParameters['LOGOUTIMAGE'] = Theme::getInstance()->getImagePath(
            'Chamilo\Core\User\Integration\Chamilo\Core\Menu', 'LogoutItem');;
        $arrParameters['LOGOUT'] = Translation::get('Logout', null, 'Chamilo\Core\User');

        $template = $this->getTwig()->load('Chamilo\Core\Menu:WidgetItem.html.twig');
        return $template->renderBlock('WidgetItem', $arrParameters);
    }

    /**
     * Returns whether or not the given user can view this menu item
     *
     * @param User $user
     *
     * @return bool
     */
    public function canViewMenuItem(User $user)
    {
        $authorizationChecker = $this->getAuthorizationChecker();
        return $authorizationChecker->isAuthorized(
            $this->getMenuRenderer()->get_user(),
            'Chamilo\Core\User',
            'ManageAccount');
    }
}
