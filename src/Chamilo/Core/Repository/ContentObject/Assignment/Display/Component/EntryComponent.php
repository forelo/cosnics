<?php

namespace Chamilo\Core\Repository\ContentObject\Assignment\Display\Component;

use Chamilo\Core\Repository\Common\Rendition\ContentObjectRendition;
use Chamilo\Core\Repository\Common\Rendition\ContentObjectRenditionImplementation;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\ScoreForm;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Manager;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Service\ScoreFormProcessor;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Entry;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Score;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Libraries\Architecture\Application\ApplicationConfiguration;
use Chamilo\Libraries\Architecture\Exceptions\NoObjectSelectedException;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Format\Structure\ActionBar\Button;
use Chamilo\Libraries\Format\Structure\ActionBar\ButtonGroup;
use Chamilo\Libraries\Format\Structure\ActionBar\ButtonToolBar;
use Chamilo\Libraries\Format\Structure\ActionBar\Renderer\ButtonToolBarRenderer;
use Chamilo\Libraries\Format\Structure\Glyph\FontAwesomeGlyph;
use Chamilo\Libraries\Format\Table\Interfaces\TableSupport;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Storage\Query\Condition\InCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\DatetimeUtilities;
use Chamilo\Libraries\Utilities\Utilities;

/**
 *
 * @package Chamilo\Core\Repository\ContentObject\Assignment\Display\Component
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class EntryComponent extends Manager implements \Chamilo\Core\Repository\Feedback\FeedbackSupport, TableSupport
{

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Storage\DataClass\Score
     */
    private $score;

    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\ScoreForm
     */
    private $scoreForm;

    /**
     *
     * @var ButtonToolBarRenderer
     */
    private $buttonToolbarRenderer;

    /**
     * @return string
     *
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    public function run()
    {
        $this->initializeEntry();
        $this->checkAccessRights();
        $this->processSubmittedData();

        return $this->getTwig()->render(Manager::context() . ':EntryViewer.html.twig', $this->getTemplateProperties());
    }

    /**
     *
     */
    protected function initializeEntry()
    {
        try
        {
            parent::initializeEntry();
        }
        catch (\Exception $ex)
        {
            $this->entry =
                $this->getDataProvider()->findLastEntryForEntity($this->getEntityType(), $this->getEntityIdentifier());
        }
    }

    /**
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    protected function checkAccessRights()
    {
        if($this->getAssignment()->get_visibility_submissions())
        {
            return;
        }

        if($this->getEntry() instanceof Entry && !$this->canUserAccessEntry($this->getEntry()))
        {
            throw new NotAllowedException();
        }

        if(!$this->canUserAccessEntity($this->getEntityType(), $this->getEntityIdentifier()))
        {
            throw new NotAllowedException();
        }
    }

    /**
     *
     * @return string[]
     */
    protected function getTemplateProperties()
    {
        /** @var \Chamilo\Core\Repository\ContentObject\Assignment\Storage\DataClass\Assignment $assignment */
        $assignment = $this->get_root_content_object();

        $baseParameters = [
            'HAS_ENTRY' => false,
            'HEADER' => $this->render_header(),
            'FOOTER' => $this->render_footer(),
            'BUTTON_TOOLBAR' => $this->getButtonToolbarRenderer()->render(),
            'ENTITY_NAME' => $this->getDataProvider()->getEntityRendererForEntityTypeAndId(
                $this->getEntityType(), $this->getEntityIdentifier()
            )->getEntityName(),
            'ASSIGNMENT_TITLE' => $this->get_root_content_object()->get_title(),
            'ASSIGNMENT_RENDITION' => $this->renderAssignment(),
        ];

        if (!$this->getEntry() instanceof Entry)
        {
            return $baseParameters;
        }

        $dateFormat = Translation::get('DateTimeFormatLong', null, Utilities::COMMON_LIBRARIES);
        $submittedDate = DatetimeUtilities::format_locale_date($dateFormat, $this->getEntry()->getSubmitted());

        $configuration = new ApplicationConfiguration($this->getRequest(), $this->getUser(), $this);
        $configuration->set(\Chamilo\Core\Repository\Feedback\Manager::CONFIGURATION_SHOW_FEEDBACK_HEADER, false);

        $feedbackManagerHtml = $this->getApplicationFactory()->getApplication(
            \Chamilo\Core\Repository\Feedback\Manager::context(), $configuration
        )->run();

        $contentObjects = $assignment->getAutomaticFeedbackObjects();

        $entityRenderer = $this->getDataProvider()->getEntityRendererForEntityTypeAndId(
            $this->getEntityType(), $this->getEntityIdentifier()
        );

        $score = $this->getScore() instanceof Score ? $this->getScore()->getScore() : 0;

        $extendParameters = [
            'HAS_ENTRY' => true,
            'CONTENT_OBJECT_RENDITION' => $this->renderContentObject(),
            'FEEDBACK_MANAGER' => $feedbackManagerHtml,
            'SUBMITTED_DATE' => $submittedDate, 'SUBMITTED_BY' => $entityRenderer->getEntityName(),
            'SCORE_FORM' => $this->getScoreForm()->render(),
            'SCORE' => $score,
            'CAN_EDIT_ASSIGNMENT' => $this->getDataProvider()->canEditAssignment(),
            'ENTRY_TABLE' => $this->renderEntryTable(),
            'SHOW_AUTOMATIC_FEEDBACK' => $assignment->isAutomaticFeedbackVisible(),
            'AUTOMATIC_FEEDBACK_TEXT' => $assignment->get_automatic_feedback_text(),
            'AUTOMATIC_FEEDBACK_CONTENT_OBJECTS' => $contentObjects,
            'ATTACHMENT_VIEWER_URL' => $this->get_url(
                [
                    self::PARAM_ACTION => self::ACTION_VIEW_ATTACHMENT,
                    self::PARAM_ATTACHMENT_ID => '__ATTACHMENT_ID__'
                ]
            )
        ];

        return array_merge($baseParameters, $extendParameters);
    }

    protected function processSubmittedData()
    {
        if(!$this->getDataProvider()->canEditAssignment() || !$this->getEntry() instanceof Entry)
        {
            return;
        }

        $scoreForm = $this->getScoreForm();

        if ($scoreForm->validate())
        {
            $detailsProcessor = new ScoreFormProcessor(
                $this->getDataProvider(),
                $this->getUser(),
                $this->getEntry(),
                $this->getScore(),
                $scoreForm->exportValues()
            );

            if (!$detailsProcessor->run())
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
        if (!isset($this->score))
        {
            $this->score = $this->getDataProvider()->findScoreByEntry($this->getEntry());
        }

        return $this->score;
    }

    /**
     *
     * @return string
     */
    protected function renderContentObject()
    {
        $contentObject = $this->getEntry()->getContentObject();

        $display = ContentObjectRenditionImplementation::factory(
            $contentObject,
            ContentObjectRendition::FORMAT_HTML,
            ContentObjectRendition::VIEW_FULL,
            $this
        );

        return $display->render();
    }

    /**
     *
     * @return string
     */
    protected function renderAssignment()
    {
        $contentObject = $this->get_root_content_object();

        $display = ContentObjectRenditionImplementation::factory(
            $contentObject,
            ContentObjectRendition::FORMAT_HTML,
            ContentObjectRendition::VIEW_DESCRIPTION,
            $this
        );

        return $display->render();
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Form\ScoreForm
     */
    protected function getScoreForm()
    {
        if (!isset($this->scoreForm))
        {
            $this->scoreForm = new ScoreForm(
                $this->getScore(),
                $this->getDataProvider(),
                $this->get_url(array(self::PARAM_ENTRY_ID => $this->getEntry()->getId())),
                $this->getTwig()
            );
        }

        return $this->scoreForm;
    }

    /**
     *
     * @return string
     */
    protected function renderEntryTable()
    {
        $table = $this->getDataProvider()->getEntryTableForEntityTypeAndId(
            $this,
            $this->getEntityType(),
            $this->getEntityIdentifier()
        );

        if (!empty($table))
        {
            return $table->render();
        }

        return '';
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::retrieve_feedbacks()
     */
    public function retrieve_feedbacks($count, $offset)
    {
        return $this->getDataProvider()->findFeedbackByEntry($this->getEntry());
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::count_feedbacks()
     */
    public function count_feedbacks()
    {
        return $this->getDataProvider()->countFeedbackByEntry($this->getEntry());
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::retrieve_feedback()
     */
    public function retrieve_feedback($feedbackIdentifier)
    {
        return $this->getDataProvider()->findFeedbackByIdentifier($feedbackIdentifier);
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::get_feedback()
     */
    public function get_feedback()
    {
        $feedback = $this->getDataProvider()->initializeFeedback();
        $feedback->setEntryId($this->getEntry()->getId());

        return $feedback;
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::is_allowed_to_view_feedback()
     */
    public function is_allowed_to_view_feedback()
    {
        return true;
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::is_allowed_to_create_feedback()
     */
    public function is_allowed_to_create_feedback()
    {
        return true;
    }

    /**
     * @param \Chamilo\Core\Repository\Feedback\Storage\DataClass\Feedback $feedback
     *
     * @return bool
     */
    public function is_allowed_to_update_feedback($feedback)
    {
        return $feedback->get_user_id() == $this->getUser()->getId();
    }

    /**
     *
     * @see \Chamilo\Core\Repository\Feedback\FeedbackSupport::is_allowed_to_delete_feedback()
     */
    public function is_allowed_to_delete_feedback($feedback)
    {
        return $feedback->get_user_id() == $this->getUser()->getId();
    }

    protected function getButtonToolbarRenderer()
    {
        $buttonToolBar = new ButtonToolBar();

        if (!isset($this->actionBar))
        {

            $buttonGroup = new ButtonGroup();
            $buttonGroup->addButton(
                new Button(
                    Translation::get('SubmissionSubmit'),
                    new FontAwesomeGlyph('plus'),
                    $this->get_url(
                        [
                            self::PARAM_ACTION => self::ACTION_CREATE,
                            self::PARAM_ENTITY_TYPE => $this->getEntityType(),
                            self::PARAM_ENTITY_ID => $this->getEntityIdentifier()
                        ]
                    )
                )
            );

            if ($this->getEntry() instanceof Entry)
            {
                $buttonGroup->addButton(
                    new Button(
                        Translation::get('DownloadCurrent'),
                        new FontAwesomeGlyph('download'),
                        $this->get_url(
                            [
                                self::PARAM_ACTION => self::ACTION_DOWNLOAD,
                                self::PARAM_ENTITY_TYPE => $this->getEntityType(),
                                self::PARAM_ENTITY_ID => $this->getEntityIdentifier(),
                                self::PARAM_ENTRY_ID => $this->getEntry()->getId()
                            ]

                        )
                    )
                );

                $buttonGroup->addButton(
                    new Button(
                        Translation::get('DownloadAll'),
                        new FontAwesomeGlyph('download'),
                        $this->get_url(
                            [
                                self::PARAM_ACTION => self::ACTION_DOWNLOAD,
                                self::PARAM_ENTITY_TYPE => $this->getEntityType(),
                                self::PARAM_ENTITY_ID => $this->getEntityIdentifier()
                            ],
                            [self::PARAM_ENTRY_ID]
                        )
                    )
                );
            }

            $buttonToolBar->addButtonGroup($buttonGroup);

            if ($this->getDataProvider()->canEditAssignment() || $this->getAssignment()->get_visibility_submissions())
            {
                $buttonToolBar->addButtonGroup(
                    new ButtonGroup(
                        array(
                            new Button(
                                Translation::get(
                                    'BrowseEntities',
                                    [
                                        'NAME' => strtolower(
                                            $this->getDataProvider()->getEntityNameByType($this->getEntityType())
                                        )
                                    ]
                                ),
                                new FontAwesomeGlyph('user'),
                                $this->get_url(
                                    [
                                        self::PARAM_ACTION => self::ACTION_VIEW
                                    ],
                                    [self::PARAM_ENTRY_ID]
                                )
                            )
                        )
                    )
                );
            }
        }

        $this->actionBar = new ButtonToolBarRenderer($buttonToolBar);

        return $this->actionBar;
    }

    /**
     * Returns the condition
     *
     * @param string $tableClassname
     *
     * @return \Chamilo\Libraries\Storage\Query\Condition\Condition
     */
    public function get_table_condition($tableClassname)
    {
        // TODO: Implement get_table_condition() method.
    }

    public function get_additional_parameters()
    {
        return array(self::PARAM_ENTRY_ID, self::PARAM_ENTITY_ID, self::PARAM_ENTITY_TYPE);
    }
}
