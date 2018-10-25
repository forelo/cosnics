<?php
namespace Chamilo\Core\Menu\Renderer\Menu\Type;

use Chamilo\Core\Menu\Renderer\Menu\Renderer;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Configuration\Configuration;

/**
 *
 * @author Sven Vanpoucke <sven.vanpoucke@hogent.be>
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class Bar extends Renderer
{
    const TYPE = 'Bar';

    public function display_menu_header($numberOfItems = 0)
    {
        $html = array();
        
        $class = 'navbar navbar-chamilo navbar-default';
        
        if ($numberOfItems == 0)
        {
            $class .= ' navbar-no-items';
        }

        $arrParameters['MENU_NAVCLASS'] = $class;
        $arrParameters['MENU_DIVCONTAINERMODE'] = $this->getContainerMode();
        $arrParameters = array_merge($arrParameters, $this->renderBrand());

        return $arrParameters;
    }

    public function display_menu_footer()
    {
        $html = array();

        $html[] = '</ul>';
        $html[] = '</div>';
        $html[] = '</div>';
        $html[] = '</nav>';

        return implode(PHP_EOL, $html);
    }

    public function renderBrand()
    {
        $arrParameters['MENU_ADMINSITENAME'] = Configuration::getInstance()->get_setting(array('Chamilo\Core\Admin', 'site_name'));
        $arrParameters['MENU_BRANDIMAGE'] = Configuration::getInstance()->get_setting(array('Chamilo\Core\Menu', 'brand_image'));

        if (!$arrParameters['MENU_BRANDIMAGE'])
        {
            $arrParameters['MENU_BRANDIMAGE'] = Theme::getInstance()->getImagePath('Chamilo\Configuration', 'LogoHeader');
        }

        $arrParameters['MENU_BRANDBASEPATH'] = Path::getInstance()->getBasePath(true);

        return $arrParameters;
    }

    /**
     * Returns whether or not the menu is available for anonymous users
     */
    public function isMenuAvailableAnonymously()
    {
        return true;
    }
}
