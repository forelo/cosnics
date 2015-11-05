<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\Geolocation;

use Chamilo\Application\Weblcms\Renderer\PublicationList\ContentObjectPublicationListRenderer;
use Chamilo\Core\Repository\ContentObject\PhysicalLocation\Storage\DataClass\PhysicalLocation;

/**
 * $Id: geolocation_tool.class.php 216 2009-11-13 14:08:06Z kariboe $
 *
 * @package application.lib.weblcms.tool.geolocation
 */

/**
 * This tool allows a user to publish geolocations in his or her course.
 */
abstract class Manager extends \Chamilo\Application\Weblcms\Tool\Manager
{

    public static function get_allowed_types()
    {
        return array(PhysicalLocation :: class_name());
    }

    public function get_available_browser_types()
    {
        return array(ContentObjectPublicationListRenderer :: TYPE_TABLE);
    }
}
