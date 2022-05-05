<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Table\AsessmentAttempt;

use Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking\Storage\DataClass\AssessmentAttempt;
use Chamilo\Application\Weblcms\Rights\WeblcmsRights;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Component\AttemptResultViewerComponent;
use Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Manager;
use Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Storage\DataClass\Publication;
use Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Storage\DataManager;
use Chamilo\Core\Repository\ContentObject\Assessment\Display\Attempt\AbstractAttempt;
use Chamilo\Core\Repository\ContentObject\Hotpotatoes\Storage\DataClass\Hotpotatoes;
use Chamilo\Libraries\Format\Structure\Toolbar;
use Chamilo\Libraries\Format\Structure\ToolbarItem;
use Chamilo\Libraries\Format\Table\Column\DataClassPropertyTableColumn;
use Chamilo\Libraries\Format\Table\Extension\RecordTable\RecordTableCellRenderer;
use Chamilo\Libraries\Format\Table\Interfaces\TableCellRendererActionsColumnSupport;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrieveParameters;
use Chamilo\Libraries\Storage\Query\Condition\EqualityCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Storage\Query\Variable\StaticConditionVariable;
use Chamilo\Libraries\Utilities\DatetimeUtilities;

/**
 * This class is a cell renderer for the attempts of an assessment
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class AssessmentAttemptTableCellRenderer extends RecordTableCellRenderer implements
    TableCellRendererActionsColumnSupport
{

    /**
     * **************************************************************************************************************
     * Inherited Functionality *
     * **************************************************************************************************************
     */

    /**
     * Renders a cell for a given object
     *
     * @param $column \libraries\ObjectTableColumn
     *
     * @param mixed $assessment_attempt
     *
     * @return String
     */
    public function render_cell($column, $assessment_attempt)
    {
        if ($column instanceof DataClassPropertyTableColumn) {
            switch ($column->get_class_name()) {
                case AssessmentAttempt::class_name() :
                {
                    switch ($column->get_name()) {
                        case AssessmentAttempt::PROPERTY_START_TIME :
                            return DatetimeUtilities::format_locale_date(
                                null,
                                $assessment_attempt[AssessmentAttempt::PROPERTY_START_TIME]);
                        case AssessmentAttempt::PROPERTY_END_TIME :
                            if ($assessment_attempt[AssessmentAttempt::PROPERTY_END_TIME]) {
                                return DatetimeUtilities::format_locale_date(
                                    null,
                                    $assessment_attempt[AssessmentAttempt::PROPERTY_END_TIME]);
                            }
                            return null;
                        case AssessmentAttempt::PROPERTY_TOTAL_TIME :
                            if ($assessment_attempt[AssessmentAttempt::PROPERTY_STATUS] ==
                                AssessmentAttempt::STATUS_COMPLETED) {
                                return DatetimeUtilities::convert_seconds_to_hours(
                                    $assessment_attempt[AssessmentAttempt::PROPERTY_TOTAL_TIME]);
                            }
                            return null;
                        case AssessmentAttempt::PROPERTY_TOTAL_SCORE :
                            if ($assessment_attempt[AssessmentAttempt::PROPERTY_STATUS] ==
                                AssessmentAttempt::STATUS_COMPLETED) {
                                $total = $assessment_attempt[AssessmentAttempt::PROPERTY_TOTAL_SCORE];
                                return $total . '%';
                            }
                            return null;
                        case AssessmentAttempt::PROPERTY_STATUS :
                            return $assessment_attempt[AssessmentAttempt::PROPERTY_STATUS] ==
                            AssessmentAttempt::STATUS_COMPLETED ? Translation::get(
                                'Completed',
                                null,
                                'Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking') : Translation::get(
                                'NotCompleted',
                                null,
                                'Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking');
                        case AssessmentAttempt::PROPERTY_VALIDATED :
                            return $this->get_certificate_completion_status($assessment_attempt);
                    }
                }
            }
        }

        return parent::render_cell($column, $assessment_attempt);
    }

    private function get_certificate_completion_status($assessment_attempt): string
    {
        $translation = $assessment_attempt[AssessmentAttempt::PROPERTY_VALIDATED] == AssessmentAttempt::STATUS_COMPLETED ?
            Translation::get(
                'Yes',
                null,
                'Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking')
            :
            Translation::get(
                'No',
                null,
                'Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking');

        // url
        $url = $this->get_component()->get_url(
            [
                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => Manager::ACTION_VIEW_RESULTS,
                Manager::PARAM_USER_ASSESSMENT => $assessment_attempt[AssessmentAttempt::PROPERTY_ID],
                Manager::PARAM_ASSESSMENT => $assessment_attempt[AssessmentAttempt::PROPERTY_ASSESSMENT_ID],
                Manager::PARAM_VALIDATED =>
                    ($assessment_attempt[AssessmentAttempt::PROPERTY_VALIDATED] <> AssessmentAttempt::STATUS_COMPLETED) ?
                        AssessmentAttempt::STATUS_COMPLETED : AssessmentAttempt::STATUS_NOT_COMPLETED
            ]
        );

        // link
        $button = '<a href="' . $url . '">';
        $button .= $translation;
        $button .= '</a>';
        return $button;
    }

    /**
     * Returns the actions toolbar
     *
     * @param mixed $assessment_attempt
     *
     * @return String
     */
    public function get_actions($assessment_attempt)
    {
        $pub = \Chamilo\Application\Weblcms\Storage\DataManager::retrieve_by_id(
            ContentObjectPublication::class_name(),
            $assessment_attempt[AssessmentAttempt::PROPERTY_ASSESSMENT_ID]);

        $assessment_attempt_status = $assessment_attempt[AssessmentAttempt::PROPERTY_STATUS];
        $assessment_attempt_id = $assessment_attempt[AssessmentAttempt::PROPERTY_ID];
        $assessment_attempt_validated = $assessment_attempt[AssessmentAttempt::PROPERTY_VALIDATED];
        $assessment_attempt_score = $assessment_attempt[AssessmentAttempt::PROPERTY_TOTAL_SCORE];

        $assessment = $pub->get_content_object();

        $parameters = new DataClassRetrieveParameters(
            new EqualityCondition(
                new PropertyConditionVariable(Publication::class_name(), Publication::PROPERTY_PUBLICATION_ID),
                new StaticConditionVariable($pub->get_id())));
        $assessment_publication = DataManager::retrieve(Publication::class_name(), $parameters);

        $toolbar = new Toolbar();

        if ($assessment->get_type() != Hotpotatoes::class_name() && (($assessment_attempt_status ==
                    AssessmentAttempt::STATUS_COMPLETED && $assessment_publication->get_configuration()->show_feedback()) ||
                $this->get_component()->is_allowed(WeblcmsRights::EDIT_RIGHT))) {
            if (
                ($assessment_attempt_status == AbstractAttempt::STATUS_COMPLETED) &&
                ($assessment_attempt_validated == AssessmentAttempt::STATUS_COMPLETED) &&
                ($assessment_attempt_score >= AssessmentAttempt::STATUS_CERTIFICATE_MINIMUM_SCORE)
            ) {
                $toolbar->add_item(
                    new ToolbarItem(
                        Translation::get('Generate certificate'),
                        Theme::getInstance()->getCommonImagePath('Place/Competences'),
                        $this->get_component()->get_url(
                            [
                                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => Manager::ACTION_RENDER_CERTIFICATE,
                                Manager::PARAM_USER_ASSESSMENT => $assessment_attempt_id,
                                Manager::PARAM_ASSESSMENT => $assessment->get_id()
                            ]
                        ),
                        ToolbarItem::DISPLAY_ICON));
            }
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('ViewResults'),
                    Theme::getInstance()->getCommonImagePath('Action/Browser'),
                    $this->get_component()->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => Manager::ACTION_ATTEMPT_RESULT_VIEWER,
                            Manager::PARAM_USER_ASSESSMENT => $assessment_attempt_id,
                            AttemptResultViewerComponent::PARAM_SHOW_FULL => 1)),
                    ToolbarItem::DISPLAY_ICON));
        } else {
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('ViewResultsNA'),
                    Theme::getInstance()->getCommonImagePath('Action/BrowserNa'),
                    null,
                    ToolbarItem::DISPLAY_ICON));
        }

        if ($this->get_component()->is_allowed(WeblcmsRights::DELETE_RIGHT)) {
            $toolbar->add_item(
                new ToolbarItem(
                    Translation::get('DeleteResult'),
                    Theme::getInstance()->getCommonImagePath('Action/Delete'),
                    $this->get_component()->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => Manager::ACTION_DELETE_RESULTS,
                            Manager::PARAM_USER_ASSESSMENT => $assessment_attempt_id)),
                    ToolbarItem::DISPLAY_ICON,
                    true));
        }

        return $toolbar->as_html();
    }
}
