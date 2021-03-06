<?php
namespace Chamilo\Application\Portfolio\Storage\DataClass;

/**
 * A portfolio feedback item
 * 
 * @package application\portfolio
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 */
class Feedback extends \Chamilo\Core\Repository\ContentObject\Portfolio\Storage\DataClass\Feedback
{
    const PROPERTY_PUBLICATION_ID = 'publication_id';

    /**
     * Get the default properties of all feedback
     * 
     * @return array The property names.
     */
    public static function get_default_property_names($extended_property_names = array())
    {
        return parent::get_default_property_names(array(self::PROPERTY_PUBLICATION_ID));
    }

    /**
     *
     * @return int
     */
    public function get_publication_id()
    {
        return $this->get_default_property(self::PROPERTY_PUBLICATION_ID);
    }

    /**
     *
     * @param int $publication_id
     */
    public function set_publication_id($publication_id)
    {
        $this->set_default_property(self::PROPERTY_PUBLICATION_ID, $publication_id);
    }
}