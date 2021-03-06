<?php
namespace Chamilo\Core\Repository\Package;

use Chamilo\Core\Repository\Quota\Rights\Rights;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package repository.install
 */
/**
 * This installer can be used to create the storage structure for the repository.
 */
class Installer extends \Chamilo\Configuration\Package\Action\Installer
{

    public function extra()
    {
        // Create a root rights location for the quota requests
        if (! Rights::getInstance()->create_quota_root())
        {
            return false;
        }
        else
        {
            $this->add_message(self::TYPE_NORMAL, Translation::get('QuotaLocationCreated'));
        }

        return true;
    }
}
