<?php

namespace Chamilo\Core\Repository\ContentObject\LearningPath\Display\Table\Progress;

use Chamilo\Core\Repository\ContentObject\LearningPath\Display\Manager;
use Chamilo\Core\Repository\ContentObject\LearningPath\Domain\TreeNode;
use Chamilo\Core\Repository\ContentObject\LearningPath\Service\AutomaticNumberingService;
use Chamilo\Core\Repository\ContentObject\LearningPath\Service\LearningPathTrackingService;
use Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\LearningPath;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Format\Structure\ProgressBarRenderer;
use Chamilo\Libraries\Format\Structure\Toolbar;
use Chamilo\Libraries\Format\Structure\ToolbarItem;
use Chamilo\Libraries\Format\Table\Column\TableColumn;
use Chamilo\Libraries\Format\Table\Interfaces\TableCellRendererActionsColumnSupport;
use Chamilo\Libraries\Format\Table\TableCellRenderer;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Platform\Translation;
use Chamilo\Libraries\Utilities\DatetimeUtilities;

/**
 * Shows the progress of some tree nodes for a user in the learning path
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class ProgressTableCellRenderer extends TableCellRenderer implements TableCellRendererActionsColumnSupport
{
    /**
     * Renders a single cell
     *
     * @param TableColumn $column
     * @param TreeNode $record
     *
     * @return String
     */
    public function render_cell($column, $record)
    {
        $translator = Translation::getInstance();

        $content_object = $record->getContentObject();

        $learningPath = $this->getLearningPath();
        $user = $this->getReportingUser();
        $learningPathTrackingService = $this->getLearningPathTrackingService();
        $automaticNumberingService = $this->getAutomaticNumberingService();

        switch ($column->get_name())
        {
            case 'type':
                return $content_object->get_icon_image();
            case 'title':
                return '<a href="' . $this->getReportingUrl($record) . '">' .
                    $automaticNumberingService->getAutomaticNumberedTitleForTreeNode($record) .
                    '</a>';
            case 'status':
                return $learningPathTrackingService->isTreeNodeCompleted(
                    $learningPath, $user, $record
                ) ? $translator->getTranslation('Completed') : $translator->getTranslation('Incomplete');
            case 'score':
                $progressBarRenderer = new ProgressBarRenderer();
                $averageScore = $learningPathTrackingService->getAverageScoreInTreeNode(
                    $learningPath, $user, $record
                );

                return !is_null($averageScore) ? $progressBarRenderer->render((int) $averageScore) : null;
            case 'time':
                $totalTimeSpent = $learningPathTrackingService->getTotalTimeSpentInTreeNode(
                    $learningPath, $user, $record
                );

                return DatetimeUtilities::format_seconds_to_hours($totalTimeSpent);
        }

        return parent::render_cell($column, $record);
    }

    /**
     * Define the unique identifier for the row needed for e.g.
     * checkboxes
     *
     * @param TreeNode $treeNode
     *
     * @return int
     */
    public function render_id_cell($treeNode)
    {
        return $treeNode->getId();
    }

    /**
     * Returns the actions toolbar
     *
     * @param TreeNode $record
     *
     * @return String
     */
    public function get_actions($record)
    {
        $learningPath = $this->getLearningPath();
        $reportingUser = $this->getReportingUser();
        $learningPathTrackingService = $this->getLearningPathTrackingService();

        $toolbar = new Toolbar(Toolbar::TYPE_HORIZONTAL);

        $toolbar->add_item(
            new ToolbarItem(
                Translation::get('Reporting'),
                Theme::getInstance()->getCommonImagePath('Action/Statistics'),
                $this->getReportingUrl($record),
                ToolbarItem::DISPLAY_ICON
            )
        );

        if ($learningPathTrackingService->hasTreeNodeAttempts(
            $learningPath, $reportingUser, $record
        )
        )
        {
            if ($this->get_component()->is_allowed_to_edit_attempt_data() &&
                $learningPathTrackingService->canDeleteLearningPathAttemptData($this->getUser(), $reportingUser)
            )
            {
                $delete_url = $this->get_component()->get_url(
                    array(
                        Manager::PARAM_ACTION => Manager::ACTION_DELETE_ATTEMPT,
                        Manager::PARAM_CHILD_ID => $record->getId()
                    )
                );

                $toolbar->add_item(
                    new ToolbarItem(
                        Translation::get('DeleteAttempt'),
                        Theme::getInstance()->getCommonImagePath('Action/Delete'),
                        $delete_url,
                        ToolbarItem::DISPLAY_ICON,
                        true
                    )
                );
            }
        }

        return $toolbar->render();
    }

    /**
     * Returns the reporting URL for a given node
     *
     * @param TreeNode $treeNode
     *
     * @return string
     */
    protected function getReportingUrl(TreeNode $treeNode)
    {
        return $this->get_component()->get_url(
            array(
                Manager::PARAM_ACTION => Manager::ACTION_REPORTING,
                Manager::PARAM_CHILD_ID => $treeNode->getId()
            )
        );
    }

    /**
     * @return LearningPath
     */
    protected function getLearningPath()
    {
        return $this->get_component()->get_root_content_object();
    }

    /**
     * @return User
     */
    protected function getReportingUser()
    {
        return $this->get_component()->getReportingUser();
    }

    /**
     * @return User
     */
    protected function getUser()
    {
        return $this->get_component()->getUser();
    }

    /**
     * @return LearningPathTrackingService
     */
    protected function getLearningPathTrackingService()
    {
        return $this->get_component()->getLearningPathTrackingService();
    }

    /**
     * @return AutomaticNumberingService
     */
    protected function getAutomaticNumberingService()
    {
        return $this->get_component()->getAutomaticNumberingService();
    }
}