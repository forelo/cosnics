<?php

namespace Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Service;

use Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Entry;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback;
use Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\Repository\FeedbackRepository;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Core\User\Storage\DataClass\User;

/**
 * @package Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Service
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
abstract class FeedbackService
{
    /**
     *
     * @var \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\Repository\FeedbackRepository
     */
    protected $feedbackRepository;

    /**
     * FeedbackService constructor.
     *
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\Repository\FeedbackRepository $feedbackRepository
     */
    public function __construct(FeedbackRepository $feedbackRepository)
    {
        $this->feedbackRepository = $feedbackRepository;
    }

    /**
     *
     * @param integer $entryIdentifier
     *
     * @return integer
     */
    public function countFeedbackByEntryIdentifier($entryIdentifier)
    {
        return $this->feedbackRepository->countFeedbackByEntryIdentifier($entryIdentifier);
    }

    /**
     *
     * @param integer $feedbackIdentifier
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback
     */
    public function findFeedbackByIdentifier($feedbackIdentifier)
    {
        return $this->feedbackRepository->retrieveFeedbackByIdentifier($feedbackIdentifier);
    }

    /**
     *
     * @param Entry|\Chamilo\Application\Weblcms\Bridge\LearningPath\Assignment\Storage\DataClass\Entry $entry
     *
     * @return integer
     */
    public function countFeedbackByEntry(Entry $entry)
    {
        return $this->feedbackRepository->countFeedbackByEntry($entry);
    }

    /**
     *
     * @param Entry|\Chamilo\Application\Weblcms\Bridge\LearningPath\Assignment\Storage\DataClass\Entry $entry
     *
     * @return \Chamilo\Libraries\Storage\Iterator\DataClassIterator | \Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Feedback[]
     */
    public function findFeedbackByEntry(Entry $entry)
    {
        return $this->feedbackRepository->findFeedbackByEntry($entry);
    }

    /**
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback
     */
    public function initializeFeedback()
    {
        return $this->createFeedbackInstance();
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Entry $entry
     */
    public function deleteFeedbackForEntry(Entry $entry)
    {
        $this->feedbackRepository->deleteFeedbackForEntry($entry);
    }

    /**
     * Creates a new instance for a score
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback
     */
    abstract protected function createFeedbackInstance();

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param \Chamilo\Core\Repository\ContentObject\Feedback\Storage\DataClass\Feedback $feedbackContentObject
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Entry $entry
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback
     */
    public function createFeedback(
        User $user, \Chamilo\Core\Repository\ContentObject\Feedback\Storage\DataClass\Feedback $feedbackContentObject,
        Entry $entry
    )
    {
        $feedbackObject = $this->createFeedbackInstance();
        $feedbackObject->setEntryId($entry->getId());

        $feedbackObject->set_user_id($user->getId());
        $feedbackObject->set_creation_date(time());
        $feedbackObject->set_modification_date(time());
        $feedbackObject->setFeedbackContentObjectId($feedbackContentObject->getId());

        if (!$this->feedbackRepository->createFeedback($feedbackObject))
        {
            throw new \RuntimeException('Could not create feedback in the database');
        }

        return $feedbackObject;
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback $feedback
     *
     * @throws \Exception
     */
    public function updateFeedback(Feedback $feedback)
    {
        if (!$this->feedbackRepository->updateFeedback($feedback))
        {
            throw new \RuntimeException('Could not update feedback in the database');
        }
    }

    /**
     * @param \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback $feedback
     */
    public function deleteFeedback(Feedback $feedback)
    {
        if (!$this->feedbackRepository->deleteFeedback($feedback))
        {
            throw new \RuntimeException('Could not delete feedback in the database');
        }
    }

    /**
     * @param array $contentObjectIds
     *
     * @return int
     */
    public function countFeedbackByContentObjectIds(array $contentObjectIds = [])
    {
        return $this->feedbackRepository->countFeedbackByContentObjectIds($contentObjectIds);
    }

    /**
     * @param \Chamilo\Core\Repository\Storage\DataClass\ContentObject $contentObject
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback[]|\Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findFeedbackByContentObject(ContentObject $contentObject)
    {
        return $this->feedbackRepository->findFeedbackByContentObject($contentObject);
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     *
     * @return \Chamilo\Core\Repository\ContentObject\Assignment\Display\Bridge\Storage\DataClass\Feedback[]|\Chamilo\Libraries\Storage\Iterator\DataClassIterator
     */
    public function findFeedbackByUser(User $user)
    {
        return $this->feedbackRepository->findFeedbackByUser($user);
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     *
     * @return int
     */
    public function countFeedbackByUser(User $user)
    {
        return $this->feedbackRepository->countFeedbackByUser($user);
    }

}