<?php
namespace Chamilo\Application\Weblcms\Tool\Action\Component;

use Chamilo\Application\Weblcms\Rights\WeblcmsRights;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublicationCategory;
use Chamilo\Application\Weblcms\Tool\Action\Manager;
use Chamilo\Configuration\Category\Interfaces\CategorySupport;
use Chamilo\Libraries\Architecture\Application\ApplicationConfiguration;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Interfaces\DelegateComponent;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrievesParameters;
use Chamilo\Libraries\Storage\Query\Condition\AndCondition;
use Chamilo\Libraries\Storage\Query\Condition\EqualityCondition;
use Chamilo\Libraries\Storage\Query\Condition\InCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Storage\Query\Variable\StaticConditionVariable;
use Chamilo\Libraries\Storage\Parameters\DataClassCountParameters;

/**
 *
 * @package application.lib.weblcms.tool.component
 */
class CategoryManagerComponent extends Manager implements DelegateComponent, CategorySupport
{

    private $type;

    public function run()
    {
        if (! $this->is_allowed(WeblcmsRights::MANAGE_CATEGORIES_RIGHT))
        {
            throw new NotAllowedException();
        }

        $request = $this->getRequest();

        $selectedCategoryId = $request->get(\Chamilo\Configuration\Category\Manager::PARAM_CATEGORY_ID);

        if (! isset($selectedCategoryId))
        {
            $request->query->set(
                \Chamilo\Configuration\Category\Manager::PARAM_CATEGORY_ID,
                $request->get(\Chamilo\Application\Weblcms\Manager::PARAM_CATEGORY));

            Request::set_get(
                \Chamilo\Configuration\Category\Manager::PARAM_CATEGORY_ID,
                $request->get(\Chamilo\Application\Weblcms\Manager::PARAM_CATEGORY));
        }

        $component = $this->getApplicationFactory()->getApplication(
            \Chamilo\Configuration\Category\Manager::context(),
            new ApplicationConfiguration($request, $this->get_user(), $this));
        $component->set_subcategories_allowed(true);

        return $component->run();
    }

    /**
     * Returns the type
     *
     * @return int
     */
    public function get_type()
    {
        return $this->type;
    }

    /**
     * Sets the type
     *
     * @param int $type
     */
    public function set_type($type)
    {
        $this->type = $type;
    }

    public function get_category()
    {
        $category = new ContentObjectPublicationCategory();
        $category->set_tool($this->get_parent()->get_tool_id());
        $category->set_course($this->get_parent()->get_course_id());
        $category->set_allow_change(1);

        return $category;
    }

    /**
     * Checks if a new category can be added
     *
     * @param int $parent_category_id
     *
     * @return bool
     */
    public function allowed_to_add_category($parent_category_id)
    {
        return $this->is_allowed(WeblcmsRights::MANAGE_CATEGORIES_RIGHT, null, $parent_category_id);
    }

    public function allowed_to_delete_category($category_id)
    {
        if (! $this->is_allowed(WeblcmsRights::MANAGE_CATEGORIES_RIGHT, null, $category_id))
        {
            return false;
        }

        $category = \Chamilo\Application\Weblcms\Storage\DataManager::retrieve_by_id(
            ContentObjectPublicationCategory::class_name(),
            $category_id);

        if ($category)
        {
            if (! $category->get_allow_change())
            {
                return false;
            }
        }

        $count = $this->count_category_publications($category_id);
        if ($count > 0)
        {
            return false;
        }

        return ! $this->have_subcategories_publications($category_id);
    }

    public function allowed_to_edit_category($category_id)
    {
        if (! $this->is_allowed(WeblcmsRights::MANAGE_CATEGORIES_RIGHT, null, $category_id))
        {
            return false;
        }

        $category = \Chamilo\Application\Weblcms\Storage\DataManager::retrieve_by_id(
            ContentObjectPublicationCategory::class_name(),
            $category_id);

        if ($category)
        {
            if (! $category->get_allow_change())
            {
                return false;
            }
        }

        return true;
    }

    public function count_categories($condition = null)
    {
        if ($condition)
        {
            $conditions[] = $condition;
        }

        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublicationCategory::class_name(),
                ContentObjectPublicationCategory::PROPERTY_COURSE),
            new StaticConditionVariable($this->get_parent()->get_course_id()));

        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublicationCategory::class_name(),
                ContentObjectPublicationCategory::PROPERTY_TOOL),
            new StaticConditionVariable($this->get_parent()->get_tool_id()));

        $condition = new AndCondition($conditions);

        return \Chamilo\Application\Weblcms\Storage\DataManager::count(
            ContentObjectPublicationCategory::class_name(),
            new DataClassCountParameters($condition));
    }

    public function retrieve_categories($condition, $offset = null, $count = null, $order_property = [])
    {
        if ($condition)
        {
            $conditions[] = $condition;
        }

        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublicationCategory::class_name(),
                ContentObjectPublicationCategory::PROPERTY_COURSE),
            new StaticConditionVariable($this->get_parent()->get_course_id()));
        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublicationCategory::class_name(),
                ContentObjectPublicationCategory::PROPERTY_TOOL),
            new StaticConditionVariable($this->get_parent()->get_tool_id()));

        $condition = new AndCondition($conditions);

        return \Chamilo\Application\Weblcms\Storage\DataManager::retrieves(
            ContentObjectPublicationCategory::class_name(),
            new DataClassRetrievesParameters($condition, $count, $offset, $order_property));
    }

    public function get_next_category_display_order($parent_id)
    {
        return null;
    }

    public function count_category_publications($category_id)
    {
        $conditions = array();
        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublication::class_name(),
                ContentObjectPublication::PROPERTY_COURSE_ID),
            new StaticConditionVariable($this->get_parent()->get_course_id()));
        $conditions[] = new InCondition(
            new PropertyConditionVariable(
                ContentObjectPublication::class_name(),
                ContentObjectPublication::PROPERTY_CATEGORY_ID),
            $category_id);
        $conditions[] = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublication::class_name(),
                ContentObjectPublication::PROPERTY_TOOL),
            new StaticConditionVariable($this->get_parent()->get_tool_id()));
        $condition = new AndCondition($conditions);

        return \Chamilo\Application\Weblcms\Storage\DataManager::count_content_object_publications($condition);
    }

    private function have_subcategories_publications($category_id)
    {
        $condition = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObjectPublicationCategory::class_name(),
                ContentObjectPublicationCategory::PROPERTY_PARENT),
            new StaticConditionVariable($category_id));
        $subcategries = \Chamilo\Application\Weblcms\Storage\DataManager::retrieves(
            ContentObjectPublicationCategory::class_name(),
            new DataClassRetrievesParameters($condition));

        while ($cat = $subcategries->next_result())
        {
            $count = $this->count_category_publications($cat->get_id());
            if ($count > 0 || $this->have_subcategories_publications($cat->get_id()))
            {
                return true;
            }
        }

        return false;
    }

    /*
     * (non-PHPdoc) @see \configuration\category\CategorySupport::allowed_to_change_category_visibility()
     */
    public function allowed_to_change_category_visibility($category_id)
    {
        return $this->get_course()->is_course_admin($this->getUser()) || $this->getUser()->is_platform_admin();
    }

    /*
     * (non-PHPdoc) @see \configuration\category\CategorySupport::get_category_parameters()
     */
    public function get_category_parameters()
    {
        return array();
    }
}
