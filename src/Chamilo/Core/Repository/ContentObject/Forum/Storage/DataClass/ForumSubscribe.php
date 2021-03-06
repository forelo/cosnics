<?php
namespace Chamilo\Core\Repository\ContentObject\Forum\Storage\DataClass;

use Chamilo\Core\Repository\ContentObject\Forum\Storage\DataManager;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Architecture\ClassnameUtilities;
use Chamilo\Libraries\Storage\DataClass\DataClass;

/**
 * Dataclass ForumSubscribe dataclass for the users who subscribe to a forum
 * 
 * @author Mattias De Pauw - Hogeschool Gent
 * @author Maarten Volckaert - Hogeschool Gent
 */
class ForumSubscribe extends DataClass
{
    /**
     * **************************************************************************************************************
     * Constants *
     * **************************************************************************************************************
     */
    
    /**
     * Represents the id of the forum which is subscribed.
     */
    const PROPERTY_FORUM_ID = 'forum_id';
    
    /**
     * Represents the id of the user who is subscribing.
     */
    const PROPERTY_USER_ID = 'user_id';

    /**
     * **************************************************************************************************************
     * Getters *
     * **************************************************************************************************************
     */
    
    /**
     * Returns the type name of this class.
     * 
     * @return ForumSubscribe
     *
     */
    public static function get_type_name()
    {
        return ClassnameUtilities::getInstance()->getClassNameFromNamespace(self::class_name(), true);
        ;
    }

    /**
     * Inherited Returns an instance of the DataManager.
     * 
     * @return DataManager An instance of the DataManager.
     */
    public function get_data_manager()
    {
        return DataManager::getInstance();
    }

    /**
     * Returns the id of the forum that is subscribed.
     * 
     * @return int Returns the id of the forum that is subscribed.
     */
    public function get_forum_id()
    {
        return $this->get_default_property(self::PROPERTY_FORUM_ID);
    }

    /**
     * Returns the id of the user that is subscribing.
     * 
     * @return int Returns the id of the user that is subscribing.
     */
    public function get_user_id()
    {
        return $this->get_default_property(self::PROPERTY_USER_ID);
    }

    /**
     * Returns the default properties of this dataclass
     * 
     * @return String[] - The property names.
     */
    public static function get_default_property_names($extended_property_names = array())
    {
        return parent::get_default_property_names(array(self::PROPERTY_USER_ID, self::PROPERTY_FORUM_ID));
    }

    /**
     * Returns a user object of this subscribe
     * 
     * @return User
     *
     */
    public function get_user()
    {
        if (! isset($this->user))
        {
            $this->user = \Chamilo\Core\User\Storage\DataManager::retrieve_by_id(
                User::class_name(), 
                (int) $this->get_user_id());
        }
        return $this->user;
    }

    /**
     * **************************************************************************************************************
     * Setters *
     * **************************************************************************************************************
     */
    
    /**
     * Sets the ID of this object's forum.
     * 
     * @param int $forum_id The forum id.
     */
    public function set_forum_id($forum_id)
    {
        $this->set_default_property(self::PROPERTY_FORUM_ID, $forum_id);
    }

    /**
     * Sets the ID of this object's user.
     * 
     * @param int $user_id The user id.
     */
    public function set_user_id($user_id)
    {
        $this->set_default_property(self::PROPERTY_USER_ID, $user_id);
    }
}
