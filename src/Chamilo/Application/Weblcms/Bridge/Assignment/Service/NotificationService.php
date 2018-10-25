<?php

namespace Chamilo\Application\Weblcms\Bridge\Assignment\Service;

use Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Entry;
use Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Feedback;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Tool\Implementation\Assignment\Service\EntryFeedbackNotificationJobProcessor;
use Chamilo\Application\Weblcms\Tool\Implementation\Assignment\Service\EntryNotificationJobProcessor;
use Chamilo\Core\Queue\Storage\Entity\Job;
use Chamilo\Core\User\Storage\DataClass\User;

/**
 * @package Chamilo\Application\Weblcms\Bridge\Assignment\Service
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class NotificationService
{
    /**
     * @var \Chamilo\Core\Notification\Service\NotificationManager
     */
    protected $notificationManager;

    /**
     * @var \Chamilo\Core\Queue\Service\JobProducer
     */
    protected $jobProducer;

    /**
     * NotificationService constructor.
     *
     * @param \Chamilo\Core\Notification\Service\NotificationManager $notificationManager
     * @param \Chamilo\Core\Queue\Service\JobProducer $jobProducer
     */
    public function __construct(
        \Chamilo\Core\Notification\Service\NotificationManager $notificationManager,
        \Chamilo\Core\Queue\Service\JobProducer $jobProducer
    )
    {
        $this->notificationManager = $notificationManager;
        $this->jobProducer = $jobProducer;
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     *
     * @return int
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function countUnseenNotificationsForUserAndPublication(
        User $user, ContentObjectPublication $contentObjectPublication
    )
    {
        return $this->notificationManager->countUnseenNotificationsByContextPathForUser(
            'Chamilo\\Application\\Weblcms::ContentObjectPublication:' . $contentObjectPublication->getId(), $user
        );
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     * @param int $offset
     * @param int $count
     *
     * @return \Chamilo\Core\Notification\Storage\Entity\Notification[]
     */
    public function getNotificationsForUserAndPublication(
        User $user, ContentObjectPublication $contentObjectPublication, $offset = null, $count = null
    )
    {
        return $this->notificationManager->getNotificationsByContextPathForUser(
            'Chamilo\\Application\\Weblcms::ContentObjectPublication:' . $contentObjectPublication->getId(), $user,
            $offset, $count
        );
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     * @param \Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Entry $entry
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createNotificationForNewEntry(
        User $user, ContentObjectPublication $contentObjectPublication, Entry $entry
    )
    {
        $job = new Job();
        $job->setProcessorClass(EntryNotificationJobProcessor::class)
            ->setParameter(EntryNotificationJobProcessor::PARAM_ENTRY_ID, $entry->getId());

        $this->jobProducer->produceJob($job, 'notifications');
    }

    /**
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     * @param \Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Entry $entry
     * @param \Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Feedback $feedback
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createNotificationForNewFeedback(
        User $user, ContentObjectPublication $contentObjectPublication, Entry $entry, Feedback $feedback
    )
    {
        $job = new Job();
        $job->setProcessorClass(EntryFeedbackNotificationJobProcessor::class)
            ->setParameter(EntryFeedbackNotificationJobProcessor::PARAM_FEEDBACK_ID, $feedback->getId());

        $this->jobProducer->produceJob($job, 'notifications');
    }

}