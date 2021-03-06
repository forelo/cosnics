<?php
namespace Chamilo\Core\Repository\ContentObject\Portfolio\Display\Preview;

use Chamilo\Core\Repository\ContentObject\Portfolio\Storage\DataClass\Notification;
use Chamilo\Libraries\Utilities\UUID;

/**
 * A dummy Notification class which allows the preview to emulate the Notification functionality
 * 
 * @package repository\content_object\portfolio\display
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 */
class DummyNotification extends Notification
{
    // Properties
    const PROPERTY_CONTENT_OBJECT_ID = 'content_object_id';

    /**
     * Get the default properties of all feedback
     * 
     * @return array The property names.
     */
    public static function get_default_property_names($extended_property_names = array())
    {
        return parent::get_default_property_names(array(self::PROPERTY_CONTENT_OBJECT_ID));
    }

    /**
     *
     * @return int
     */
    public function get_content_object_id()
    {
        return $this->get_default_property(self::PROPERTY_CONTENT_OBJECT_ID);
    }

    /**
     *
     * @param int $content_object_id
     */
    public function set_content_object_id($content_object_id)
    {
        $this->set_default_property(self::PROPERTY_CONTENT_OBJECT_ID, $content_object_id);
    }

    /**
     *
     * @see \libraries\storage\DataClass::update()
     */
    public function update()
    {
        return PreviewStorage::getInstance()->update_notification($this);
    }

    /**
     *
     * @see \libraries\storage\DataClass::create()
     */
    public function create()
    {
        $this->set_id(UUID::v4());
        return PreviewStorage::getInstance()->create_notification($this);
    }

    /**
     *
     * @see \libraries\storage\DataClass::delete()
     */
    public function delete()
    {
        return PreviewStorage::getInstance()->delete_notification($this);
    }
}