<?php

namespace Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Service;

use Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\Repository\AssignmentRepository;
use Chamilo\Core\Repository\ContentObject\Assignment\Storage\DataClass\Assignment;
use Chamilo\Core\Repository\ContentObject\LearningPath\Display\Attempt\TreeNodeAttempt;
use Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData;
use Chamilo\Libraries\Storage\Query\Condition\Condition;

/**
 * Abstract service that can be used as a base for the AssignmentService
 *
 * @package Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Service
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
abstract class AssignmentService extends \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Service\AssignmentService
{
    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\Repository\AssignmentRepository
     */
    protected $assignmentRepository;

    /**
     * AssignmentService constructor.
     *
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\Repository\AssignmentRepository $assignmentRepository
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Service\FeedbackService $feedbackService
     */
    public function __construct(AssignmentRepository $assignmentRepository, FeedbackService $feedbackService)
    {
        parent::__construct($assignmentRepository, $feedbackService);
    }

    /**
     *
     * @param integer $treeNodeDataIdentifier
     *
     * @return integer
     */
    public function countEntriesForTreeNodeDataIdentifier($treeNodeDataIdentifier)
    {
        return $this->assignmentRepository->countEntriesForTreeNodeDataIdentifier($treeNodeDataIdentifier);
    }

    /**
     *
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param integer $entityType
     *
     * @return integer
     */
    public function countDistinctEntriesByTreeNodeDataAndEntityType(TreeNodeData $treeNodeData, $entityType)
    {
        return $this->assignmentRepository->countDistinctEntriesByTreeNodeDataAndEntityType(
            $treeNodeData,
            $entityType
        );
    }

    /**
     *
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Storage\DataClass\Assignment $assignment
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param integer $entityType
     *
     * @return int
     */
    public function countDistinctLateEntriesByTreeNodeDataAndEntityType(
        Assignment $assignment, TreeNodeData $treeNodeData, $entityType
    )
    {
        return $this->assignmentRepository->countDistinctLateEntriesByTreeNodeDataAndEntityType(
            $assignment, $treeNodeData, $entityType
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param int[] $userIds
     * @param Condition $condition
     * @param integer $offset
     * @param integer $count
     * @param \Chamilo\Libraries\Storage\Query\OrderBy[] $orderProperty
     *
     * @return \Chamilo\Libraries\Storage\Iterator\RecordIterator
     */
    public function findTargetUsersForTreeNodeData(
        TreeNodeData $treeNodeData, $userIds = [], $condition = null, $offset = null, $count = null,
        $orderProperty = null
    )
    {
        return $this->assignmentRepository->findTargetUsersForTreeNodeData(
            $treeNodeData,
            $userIds,
            $condition,
            $offset,
            $count,
            $orderProperty
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param int[] $userIds
     * @param Condition $condition
     *
     * @return int
     */
    public function countTargetUsersForTreeNodeData(
        TreeNodeData $treeNodeData, $userIds = [], $condition = null
    )
    {
        return $this->findTargetUsersForTreeNodeData($treeNodeData, $userIds, $condition)->count();
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param array $userIds
     *
     * @return int
     */
    public function countTargetUsersWithEntriesForTreeNodeData(
        TreeNodeData $treeNodeData, $userIds = []
    )
    {
        return $this->findTargetUsersWithEntriesForTreeNodeData($treeNodeData, $userIds)->count();
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param int[] $userIds
     * @param Condition $condition
     * @param int $offset
     * @param int $count
     * @param \Chamilo\Libraries\Storage\Query\OrderBy[] $orderProperty
     *
     * @return \Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findTargetUsersWithEntriesForTreeNodeData(
        TreeNodeData $treeNodeData, $userIds = [], $condition = null, $offset = null, $count = null, $orderProperty = []
    )
    {
        return $this->assignmentRepository->findTargetUsersWithEntriesForTreeNodeData(
            $treeNodeData, $userIds, $condition, $offset, $count, $orderProperty
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer $entityId
     * @param \Chamilo\Libraries\Storage\Query\Condition\Condition|null $condition
     *
     * @return int
     */
    public function countEntriesForTreeNodeDataEntityTypeAndId(
        TreeNodeData $treeNodeData, $entityType,
        $entityId, Condition $condition = null
    )
    {
        return $this->assignmentRepository->countEntriesForTreeNodeDataEntityTypeAndId(
            $treeNodeData,
            $entityType,
            $entityId,
            $condition
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer $entityId
     *
     * @return integer
     */
    public function countDistinctScoreForTreeNodeDataEntityTypeAndId(TreeNodeData $treeNodeData, $entityType, $entityId)
    {
        return $this->assignmentRepository->countDistinctScoreForTreeNodeDataEntityTypeAndId(
            $treeNodeData,
            $entityType,
            $entityId
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer $entityId
     *
     * @return int
     */
    public function getAverageScoreForTreeNodeDataEntityTypeAndId(TreeNodeData $treeNodeData, $entityType, $entityId)
    {
        return $this->assignmentRepository->retrieveAverageScoreForTreeNodeDataEntityTypeAndId(
            $treeNodeData,
            $entityType,
            $entityId
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer $entityId
     *
     * @return int
     */
    public function getLastScoreForTreeNodeDataEntityTypeAndId(TreeNodeData $treeNodeData, $entityType, $entityId)
    {
        return $this->assignmentRepository->retrieveLastScoreForTreeNodeDataEntityTypeAndId(
            $treeNodeData,
            $entityType,
            $entityId
        );
    }

    /**
     *
     * @param TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer $entityId
     * @param \Chamilo\Libraries\Storage\Query\Condition\Condition $condition
     * @param integer $offset
     * @param integer $count
     * @param \Chamilo\Libraries\Storage\Query\OrderBy[] $orderProperty
     *
     * @return \Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findEntriesForTreeNodeDataEntityTypeAndId(
        TreeNodeData $treeNodeData, $entityType,
        $entityId, $condition, $offset, $count, $orderProperty
    )
    {
        return $this->assignmentRepository->retrieveEntriesForTreeNodeDataEntityTypeAndId(
            $treeNodeData,
            $entityType,
            $entityId,
            $condition,
            $offset,
            $count,
            $orderProperty
        );
    }

    /**
     *
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param integer $entityType
     * @param integer[] $entityIdentifiers
     *
     * @return \Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findEntriesByTreeNodeDataEntityTypeAndIdentifiers(
        TreeNodeData $treeNodeData, $entityType,
        $entityIdentifiers
    )
    {
        return $this->assignmentRepository->findEntriesByTreeNodeDataEntityTypeAndIdentifiers(
            $treeNodeData,
            $entityType,
            $entityIdentifiers
        );
    }

    /**
     *
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     *
     * @return \Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findEntriesByTreeNodeData(TreeNodeData $treeNodeData)
    {
        return $this->assignmentRepository->findEntriesByTreeNodeData($treeNodeData);
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param int $entityType
     * @param int $entityIdentifier
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\DataClass\Entry
     */
    public function findLastEntryForEntity(TreeNodeData $treeNodeData, $entityType, $entityIdentifier)
    {
        return $this->assignmentRepository->findLastEntryForEntityByTreeNodeData(
            $treeNodeData, $entityType, $entityIdentifier
        );
    }

    /**
     *
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Display\Attempt\TreeNodeAttempt $treeNodeAttempt
     * @param integer $entityType
     * @param integer $entityId
     * @param integer $userId
     * @param integer $contentObjectId
     * @param string $ipAddress
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\DataClass\Entry|\Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Entry
     */
    public function createEntry(
        TreeNodeData $treeNodeData, TreeNodeAttempt $treeNodeAttempt, $entityType, $entityId, $userId, $contentObjectId,
        $ipAddress
    )
    {
        /** @var \Chamilo\Core\Repository\ContentObject\Assignment\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Bridge\Storage\DataClass\Entry $entry */
        $entry = $this->createEntryInstance();

        $entry->setTreeNodeDataId($treeNodeData->getId());
        $entry->setTreeNodeAttemptId($treeNodeAttempt->getId());

        return $this->createEntryByInstance($entry, $entityType, $entityId, $userId, $contentObjectId, $ipAddress);
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\TreeNodeData $treeNodeData
     */
    public function deleteEntriesByTreeNodeData(TreeNodeData $treeNodeData)
    {
        $entries = $this->findEntriesByTreeNodeData($treeNodeData);
        foreach($entries as $entry)
        {
            $this->deleteEntry($entry);
        }
    }

    /**
     * @return string
     */
    abstract public function getEntryClassName();

    /**
     * @return string
     */
    abstract public function getScoreClassName();
}