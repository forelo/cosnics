<?php

namespace Chamilo\Core\Repository\ContentObject\Forum\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Display\Service;

use Chamilo\Core\Repository\ContentObject\Forum\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Display\Manager;
use Chamilo\Core\Repository\ContentObject\LearningPath\Domain\Action;
use Chamilo\Core\Repository\ContentObject\LearningPath\Domain\TreeNode;
use Chamilo\Libraries\Platform\Session\Session;

/**
 * Generates the actions for a given TreeNode
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class NodeActionGenerator
    extends \Chamilo\Core\Repository\ContentObject\LearningPath\Service\ActionGenerator\NodeActionGenerator
{

    /**
     * Generates the acions for a given TreeNode
     *
     * @param TreeNode $learningPathTreeNode
     * @param bool $canEditTreeNode
     * @param bool $canViewReporting
     *
     * @return array|Action[]
     */
    public function generateNodeActions(
        TreeNode $learningPathTreeNode, bool $canEditTreeNode = false, bool $canViewReporting = false
    ): array
    {
        $actions = array();
        $actions[] = $this->getForumSubscribeAction($learningPathTreeNode);
        return $actions;
    }

    /**
     * Returns the action to build the assessment of a given TreeNode
     *
     * @param TreeNode $learningPathTreeNode
     *
     * @return Action
     */
    protected function getForumSubscribeAction(TreeNode $learningPathTreeNode)
    {
        $contentObject = $learningPathTreeNode->getContentObject();

        $subscribed = \Chamilo\Core\Repository\ContentObject\Forum\Storage\DataManager::retrieve_subscribe(
            $contentObject->getId(), Session::get_user_id()
        );

        if (! $subscribed)
        {
            $icon = 'fa-envelope';
            $titleVariable = 'Subscribe';
            $action = Manager::ACTION_SUBSCRIBE;
        }
        else
        {
            $icon = 'fa-envelope-o';
            $titleVariable = 'UnSubscribe';
            $action = Manager::ACTION_UNSUBSCRIBE;
        }

        $title = $this->translator->getTranslation($titleVariable, null, Manager::context());
        $url = $this->getUrlForNode(
            array(
                \Chamilo\Core\Repository\ContentObject\LearningPath\Display\Manager::PARAM_ACTION =>
                    \Chamilo\Core\Repository\ContentObject\LearningPath\Display\Manager::ACTION_TYPE_SPECIFIC,
                \Chamilo\Core\Repository\ContentObject\LearningPath\Display\Manager::PARAM_CONTENT_OBJECT_ID =>
                    $learningPathTreeNode->getContentObject()->getId(),
                Manager::PARAM_ACTION => $action
            ),
            $learningPathTreeNode->getId()
        );

        return new Action('forumSubscribe', $title, $url, $icon);
    }
}