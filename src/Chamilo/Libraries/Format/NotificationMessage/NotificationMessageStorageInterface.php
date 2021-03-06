<?php
namespace Chamilo\Libraries\Format\NotificationMessage;

/**
 * Interface for a storage for notification messages
 *
 * @package Chamilo\Libraries\Format\NotificationMessage
 * @author Sven Vanpoucke - Hogeschool Gent
 */
interface NotificationMessageStorageInterface
{

    /**
     * Stores the notification messages
     *
     * @param \Chamilo\Libraries\Format\NotificationMessage\NotificationMessage[] $notificationMessages
     */
    public function store($notificationMessages = array());

    /**
     * Retrieves the notification messages
     *
     * @return \Chamilo\Libraries\Format\NotificationMessage\NotificationMessage[]
     */
    public function retrieve();

    /**
     * Clears the notification messages
     */
    public function clear();
}

