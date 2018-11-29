<?php

namespace Chamilo\Core\Menu\Renderer\Item\Bar\Item;

use Chamilo\Core\Menu\Renderer\Item\Renderer;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\File\Redirect;
use Chamilo\Libraries\Platform\Configuration\LocalSetting;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package Chamilo\Core\Menu\Renderer\Item\Bar\Item
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class LanguageCategoryItem extends CategoryItem
{

    public function render()
    {
        if (!$this->canViewMenuItem($this->getMenuRenderer()->get_user())) {
            return '';
        }

        $arrParameters = array();

        $languages = \Chamilo\Configuration\Configuration::getInstance()->getLanguages();
        $currentLanguage = LocalSetting::getInstance()->get('platform_language');

        if (count($languages) > 1) {
            $redirect = new Redirect();
            $currentUrl = $redirect->getCurrentUrl();

            foreach ($languages as $isocode => $language) {
                $redirect = new Redirect(
                    array(
                        Application::PARAM_CONTEXT => \Chamilo\Core\User\Manager::context(),
                        Application::PARAM_ACTION => \Chamilo\Core\User\Manager::ACTION_QUICK_LANG,
                        \Chamilo\Core\User\Manager::PARAM_CHOICE => $isocode,
                        \Chamilo\Core\User\Manager::PARAM_REFER => $currentUrl));

                $languageItem = new \Chamilo\Core\Menu\Storage\DataClass\LanguageItem();
                $languageItem->set_language($isocode);
                $languageItem->setCurrentUrl($redirect->getUrl());
                $languageItem->set_parent($this->getItem()->get_id());

                if ($currentLanguage != $isocode) {
                    $arrParameters['LANGUAGES'][] =
                        [
                            'SELECTED' => $this->isItemSelected(),
                            'URL' => $languageItem->getCurrentUrl(),
                            'LANGUAGE' => $languageItem->get_language()
                        ];
                }
            }
        }

        $imagePath = Theme::getInstance()->getImagePath('Chamilo\Core\Menu', 'Language');
        $title = $this->getItem()->get_titles()->get_translation(Translation::getInstance()->getLanguageIsocode());

        $arrParameters = array_merge(
            [
                'SHOWTITLE' => $this->getItem()->show_title(),
                'IMAGE' => $imagePath,
                'TITLE' => htmlentities($title),
                'CURRENTLANGUAGE' => strtoupper($currentLanguage)
            ],
            $arrParameters);

        $template = $this->getTwig()->load('Chamilo\Core\Menu:LanguageCategoryItem.html.twig');
        return $template->renderBlock('LanguageCategory', $arrParameters);
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
            'ChangeLanguage');
    }
}
