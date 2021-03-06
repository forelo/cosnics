<?php
namespace Chamilo\Core\User\Ajax;

use Chamilo\Libraries\Architecture\AjaxManager;

/**
 *
 * @package Chamilo\Core\User\Ajax
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
abstract class Manager extends AjaxManager
{
    const ACTION_USER_PICTURE = 'UserPicture';
    const DEFAULT_ACTION = self::ACTION_USER_PICTURE;
}
