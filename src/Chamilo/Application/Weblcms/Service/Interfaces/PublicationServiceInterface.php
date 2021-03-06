<?php
namespace Chamilo\Application\Weblcms\Service\Interfaces;

use Chamilo\Application\Weblcms\Course\Storage\DataClass\Course;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublicationCategory;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Core\User\Storage\DataClass\User;

/**
 * Interface for the PublicationService
 * 
 * @package application\weblcms
 * @author Sven Vanpoucke - Hogeschool Gent
 */
interface PublicationServiceInterface
{

    /**
     * **************************************************************************************************************
     * Publication Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Returns a publication by a given id
     * 
     * @param int $publicationId
     *
     * @return ContentObjectPublication
     */
    public function getPublication($publicationId);

    /**
     * Returns a publication for a given user
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param int $publicationId
     *
     * @return ContentObjectPublication
     *
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NotAllowedException
     */
    public function getPublicationForUser(User $user, $publicationId);

    /**
     * Returns the publications for a giventool
     *
     * @param string $tool
     *
     * @return ContentObjectPublication[]
     */
    public function getPublicationsByTool($tool);

    /**
     * Returns the publications for a given course and tool
     * 
     * @param \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course $course
     * @param string $tool
     *
     * @return ContentObjectPublication[]
     */
    public function getPublicationsByCourseAndTool(Course $course, $tool);

    /**
     * Returns the publication categories for a given course, tool and category
     * 
     * @param Course $course
     * @param $tool
     * @param ContentObjectPublicationCategory $category
     *
     * @return ContentObjectPublication[]
     */
    public function getPublicationsByCourseAndToolAndCategory(Course $course, $tool, 
        ContentObjectPublicationCategory $category = null);

    /**
     * Returns the users for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return User[]
     */
    public function getTargetUsersForPublication(ContentObjectPublication $publication);

    /**
     * Returns the number of users for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return int
     */
    public function countTargetUsersForPublication(ContentObjectPublication $publication);

    /**
     * Returns the course groups for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return CourseGroup[]
     */
    public function getTargetCourseGroupsForPublication(ContentObjectPublication $publication);

    /**
     * Returns the number of course groups for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return int
     */
    public function countTargetCourseGroupsForPublication(ContentObjectPublication $publication);

    /**
     * Returns the platform groups for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return Group[]
     */
    public function getTargetPlatformGroupsForPublication(ContentObjectPublication $publication);

    /**
     * Returns the number of platform groups for who the content object is published
     * 
     * @param ContentObjectPublication $publication
     *
     * @return int
     */
    public function countTargetPlatformGroupsForPublication(ContentObjectPublication $publication);

    /**
     * Returns the publications for a given course and tool which are accessible by the given user
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param Course $course
     * @param string $tool
     *
     * @throws NotAllowedException
     *
     * @return ContentObjectPublication[]
     */
    public function getPublicationsForUser(\Chamilo\Core\User\Storage\DataClass\User $user, Course $course, $tool);

    /**
     * Returns the publications for a given course, tool and category which are accessible by the given user.
     * If no category is given the publications from the tool root are returned.
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param Course $course
     * @param $tool
     * @param ContentObjectPublicationCategory $category
     *
     * @return ContentObjectPublication[]
     */
    public function getPublicationsForUserInCategory(\Chamilo\Core\User\Storage\DataClass\User $user, Course $course, 
        $tool, ContentObjectPublicationCategory $category = null);

    /**
     * **************************************************************************************************************
     * PublicationCategory Functionality *
     * **************************************************************************************************************
     */
    
    /**
     * Returns the categories for a given course and tool
     * 
     * @param Course $course
     * @param string $tool
     *
     * @return ContentObjectPublicationCategory[]
     */
    public function getPublicationCategoriesForCourseAndTool(Course $course, $tool);

    /**
     * @param \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course $course
     * @param $tool
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublicationCategory $parentCategory
     * @return mixed
     */
    public function getPublicationCategoriesForCourseAndToolInCategory(Course $course, string $tool, ContentObjectPublicationCategory $parentCategory);

    /**
     * Returns the publication categories which a user can access
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param Course $course
     * @param $tool
     * @return ContentObjectPublicationCategory[]
     */
    public function getPublicationCategoriesForUser(\Chamilo\Core\User\Storage\DataClass\User $user, Course $course, 
        $tool);

    /**
     * Returns the child publication categories for a user in a given category.
     * If no category is given the root
     * categories are returned
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param Course $course
     * @param $tool
     * @param ContentObjectPublicationCategory $category
     *
     * @return ContentObjectPublicationCategory[]
     */
    public function getPublicationCategoriesForUserInCategory(\Chamilo\Core\User\Storage\DataClass\User $user, 
        Course $course, $tool, ContentObjectPublicationCategory $category = null);

    /**
     * Returns a category by a given id
     * 
     * @param int $categoryId
     *
     * @return ContentObjectPublicationCategory
     */
    public function getPublicationCategoryById($categoryId);

    /**
     * Returns a category by a given id with rights checks for the given user
     * 
     * @param \Chamilo\Core\User\Storage\DataClass\User $user
     * @param int $categoryId
     *
     * @return ContentObjectPublicationCategory
     */
    public function getPublicationCategoryForUser(User $user, $categoryId);
}