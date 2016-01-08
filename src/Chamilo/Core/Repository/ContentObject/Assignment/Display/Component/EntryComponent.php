<?php
namespace Chamilo\Core\Repository\ContentObject\Assignment\Display\Component;

use Chamilo\Core\Repository\Common\Rendition\ContentObjectRendition;
use Chamilo\Core\Repository\Common\Rendition\ContentObjectRenditionImplementation;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\DetailsForm;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Manager;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Service\DetailsProcessor;
use Chamilo\Libraries\Architecture\Exceptions\NoObjectSelectedException;
use Chamilo\Libraries\Format\Tabs\DynamicContentTab;
use Chamilo\Libraries\Format\Tabs\DynamicTabsRenderer;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Platform\Translation;
use Chamilo\Libraries\Utilities\DatetimeUtilities;
use Chamilo\Libraries\Utilities\Utilities;

/**
 *
 * @package Chamilo\Core\Repository\ContentObject\Assignment\Display\Component
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class EntryComponent extends Manager
{

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Entry
     */
    private $entry;

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Score
     */
    private $score;

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Note
     */
    private $note;

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\detailsForm
     */
    private $detailsForm;

    public function run()
    {
        $entryIdentifier = $this->getRequest()->query->get(self :: PARAM_ENTRY_ID);

        if (! $entryIdentifier)
        {
            throw new NoObjectSelectedException(Translation :: get('Entry'));
        }

        $this->entry = $this->getDataProvider()->findEntryByIdentifier($entryIdentifier);

        $this->processSubmittedData();

        $html = array();

        $html[] = $this->render_header();
        $html[] = $this->renderTabs();
        $html[] = $this->render_footer();

        return implode(PHP_EOL, $html);
    }

    protected function processSubmittedData()
    {
        $detailsForm = $this->getDetailsForm();

        if ($detailsForm->validate())
        {
            $detailsProcessor = new DetailsProcessor(
                $this->getDataProvider(),
                $this->getUser(),
                $this->getEntry(),
                $this->getScore(),
                $this->getNote(),
                $detailsForm->exportValues());

            if (! $detailsProcessor->run())
            {
                return false;
            }
        }

        return true;
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Score
     */
    protected function getScore()
    {
        if (! isset($this->score))
        {
            $this->score = $this->getDataProvider()->findScoreByEntry($this->getEntry());
        }

        return $this->score;
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Note
     */
    protected function getNote()
    {
        if (! isset($this->note))
        {
            $this->note = $this->getDataProvider()->findNoteByEntry($this->getEntry());
        }

        return $this->note;
    }

    /**
     *
     * @return string
     */
    protected function renderTabs()
    {
        $tabsRenderer = new DynamicTabsRenderer('entry');

        $tabsRenderer->add_tab(
            new DynamicContentTab(
                'details',
                Translation :: get('DetailsFeedback'),
                Theme :: getInstance()->getImagePath(self :: package(), 'Tab/Details'),
                $this->renderDetails()));

        $tabsRenderer->add_tab(
            new DynamicContentTab(
                'entry',
                Translation :: get('Entry'),
                Theme :: getInstance()->getImagePath(self :: package(), 'Tab/Entry'),
                $this->renderContentObject()));

        return $tabsRenderer->render();
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Entry
     */
    protected function getEntry()
    {
        return $this->entry;
    }

    /**
     *
     * @return string
     */
    protected function renderContentObject()
    {
        $contentObject = $this->getEntry()->getContentObject();

        $display = ContentObjectRenditionImplementation :: factory(
            $contentObject,
            ContentObjectRendition :: FORMAT_HTML,
            ContentObjectRendition :: VIEW_FULL,
            $this);

        return $display->render();
    }

    /**
     *
     * @return string
     */
    protected function renderDetails()
    {
        $dateFormat = Translation :: get('DateTimeFormatLong', null, Utilities :: COMMON_LIBRARIES);
        $submittedDate = DatetimeUtilities :: format_locale_date($dateFormat, $this->getEntry()->getSubmitted());

        $html = array();

        $properties = array();
        $properties[Translation :: get('Submitted')] = $submittedDate;

        $entityRenderer = $this->getDataProvider()->getEntityRendererForEntityTypeAndId(
            $this,
            $this->getEntry()->getEntityType(),
            $this->getEntry()->getEntityId());

        $properties = array_merge($properties, $entityRenderer->getProperties());

        $html[] = $this->renderPropertiesRows($properties);
        $html[] = $this->getDetailsForm()->toHtml();

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @param string[] $properties
     * @return string
     */
    protected function renderPropertiesRows($properties)
    {
        $html = array();

        foreach ($properties as $label => $value)
        {
            $html[] = $this->renderRow($label, $value);
        }

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @param string $label
     * @param string $value
     * @return string
     */
    protected function renderRow($label, $value)
    {
        $html = array();

        $html[] = '<div class="row">';
        $html[] = '<div class="label">' . $label . '</div>';
        $html[] = '<div class="formw">' . $value . '</div>';
        $html[] = '</div>';

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\DetailsForm
     */
    protected function getDetailsForm()
    {
        if (! isset($this->detailsForm))
        {
            $this->detailsForm = new DetailsForm(
                $this->getScore(),
                $this->getNote(),
                $this->getDataProvider(),
                $this->get_url(array(self :: PARAM_ENTRY_ID => $this->getEntry()->getId())));
        }

        return $this->detailsForm;
    }
}
