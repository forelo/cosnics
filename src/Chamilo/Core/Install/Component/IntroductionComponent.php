<?php
namespace Chamilo\Core\Install\Component;

use Chamilo\Core\Install\Manager;
use Chamilo\Libraries\Architecture\Interfaces\NoAuthenticationSupport;
use Chamilo\Libraries\Format\Structure\ActionBar\Button;
use Chamilo\Libraries\Format\Structure\ActionBar\ButtonToolBar;
use Chamilo\Libraries\Format\Structure\ActionBar\DropdownButton;
use Chamilo\Libraries\Format\Structure\ActionBar\Renderer\ButtonToolBarRenderer;
use Chamilo\Libraries\Format\Structure\ActionBar\SubButton;
use Chamilo\Libraries\Format\Structure\Glyph\FontAwesomeGlyph;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package Chamilo\Core\Install\Component
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class IntroductionComponent extends Manager implements NoAuthenticationSupport
{

    /**
     * Runs this component and displays its output.
     */
    public function run()
    {
        $this->checkInstallationAllowed();

        $phpVersion = phpversion();

        $arrParameters = $this->render_header();

        if ($phpVersion >= 7.1)
        {
            $buttonToolBar = new ButtonToolBar();

            $dropDownButton = new DropdownButton(
                Translation::get('Install'),
                new FontAwesomeGlyph('check'),
                Button::DISPLAY_ICON_AND_LABEL,
                'btn-primary');

            $buttonToolBar->addItem($dropDownButton);

            foreach ($this->getLanguages() as $languageKey => $languageValue)
            {
                $dropDownButton->addSubButton(
                    new SubButton(
                        $languageValue,
                        null,
                        $this->get_url(
                            array(self::PARAM_ACTION => self::ACTION_REQUIREMENTS, self::PARAM_LANGUAGE => $languageKey))));
            }

            $buttonToolBar->addItem(
                new Button('Read the installation guide', new FontAwesomeGlyph('book'), 'documentation/install.txt'));
            $buttonToolBar->addItem(
                new Button('Visit cosncis.org', new FontAwesomeGlyph('globe'), 'http://www.cosnics.org/'));
            $buttonToolBar->addItem(
                new Button('Get support', new FontAwesomeGlyph('question-circle'), 'http://www.cosnics.org/'));

            $buttonToolbarRenderer = new ButtonToolBarRenderer($buttonToolBar);

            $arrParameters['WIZARDBUTTONS'] = $buttonToolbarRenderer->render();
        }

        //return implode(PHP_EOL, $html);
        return $this->getTwig()->render('Chamilo\Core\Install:Introduction.html.twig', $arrParameters);
    }

    protected function getInfo()
    {
        return phpversion();
    }
}
