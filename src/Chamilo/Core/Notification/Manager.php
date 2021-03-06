<?php

namespace Chamilo\Core\Notification;

use Chamilo\Core\Notification\Service\NotificationManager;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface;

/**
 * @package Chamilo\Core\Notification
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
abstract class Manager extends Application
{
    const ACTION_VIEW = 'Viewer';
    const ACTION_MANAGE_FILTERS = 'FilterManager';
    const ACTION_VIEW_NOTIFICATION = 'NotificationViewer';

    const DEFAULT_ACTION = self::ACTION_VIEW;

    const PROPERTY_NOTIFICATION_ID = 'NotificationId';

    /**
     * Constructor
     *
     * @param \Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface $applicationConfiguration
     *
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    public function __construct(ApplicationConfigurationInterface $applicationConfiguration)
    {
        parent::__construct($applicationConfiguration);

        $this->checkAuthorization(Manager::context());
    }

    /**
     * @return NotificationManager
     */
    protected function getNotificationManager()
    {
        return $this->getService(NotificationManager::class);
    }
}