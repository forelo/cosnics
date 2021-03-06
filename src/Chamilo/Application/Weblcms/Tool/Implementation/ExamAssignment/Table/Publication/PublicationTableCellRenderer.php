<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Table\Publication;

use Chamilo\Application\Weblcms\Bridge\Assignment\Storage\DataClass\Entry;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Table\Publication\Table\ObjectPublicationTableCellRenderer;
use Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Manager;
use Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Storage\DataClass\Publication;
use Chamilo\Core\Repository\ContentObject\Assignment\Storage\DataClass\Assignment;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Libraries\Format\Structure\Glyph\FontAwesomeGlyph;
use Chamilo\Libraries\Storage\DataClass\DataClass;
use Chamilo\Libraries\Storage\FilterParameters\FilterParameters;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\DatetimeUtilities;
use Chamilo\Libraries\Utilities\StringUtilities;
use Chamilo\Libraries\Utilities\Utilities;

/**
 * Extension on the content object publication table cell renderer for this tool
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class PublicationTableCellRenderer extends ObjectPublicationTableCellRenderer
{

    /**
     * **************************************************************************************************************
     * Inherited Functionality *
     * **************************************************************************************************************
     */

    /**
     * Renders a cell for a given object
     *
     * @param $column \libraries\ObjectTableColumn
     *
     * @param mixed $publication
     *
     * @return String
     */
    public function render_cell($column, $publication)
    {
        $content_object = $this->get_component()->get_content_object_from_publication($publication);

        switch ($column->get_name())
        {
            case ContentObject::PROPERTY_TITLE :
                return $this->generate_title_link($publication);
            case Assignment::PROPERTY_START_TIME :
                $time = $content_object->get_start_time();
                $date_format = Translation::get('DateTimeFormatLong', null, Utilities::COMMON_LIBRARIES);
                $time = DatetimeUtilities::format_locale_date($date_format, $time);
                if ($publication[ContentObjectPublication::PROPERTY_HIDDEN])
                {
                    return '<span style="color: gray">' . $time . '</span>';
                }
                return $time;
            case Assignment::PROPERTY_END_TIME :
                $time = $content_object->get_end_time();
                $date_format = Translation::get('DateTimeFormatLong', null, Utilities::COMMON_LIBRARIES);
                $time = DatetimeUtilities::format_locale_date($date_format, $time);
                if ($publication[ContentObjectPublication::PROPERTY_HIDDEN])
                {
                    return '<span style="color: gray">' . $time . '</span>';
                }
                return $time;
            case Manager::PROPERTY_NUMBER_OF_SUBMISSIONS :
                $contentObjectPublication = new ContentObjectPublication();
                $contentObjectPublication->setId($publication[DataClass::PROPERTY_ID]);

                $contentObjectPublication->set_content_object_id(
                    $publication[ContentObjectPublication::PROPERTY_CONTENT_OBJECT_ID]
                );

                $entitiesCount =
                    $this->getEntityServiceManager()->getEntityServiceByType(Entry::ENTITY_TYPE_USER)->countEntities(
                        $contentObjectPublication, new FilterParameters()
                    );

                $entitiesWithEntriesCount =
                    $this->getAssignmentService()->countDistinctEntriesByContentObjectPublicationAndEntityType(
                        $contentObjectPublication,
                        $entityType
                    );

                return $entitiesWithEntriesCount . ' / ' . $entitiesCount;
        }

        return parent::render_cell($column, $publication);
    }

    /**
     * Generated the HTML for the title column, including link, depending on the status of the current browsing user.
     *
     * @param $publication type The publication for which the title link is to be generated.
     *
     * @return string The HTML for the link in the title column.
     */
    private function generate_title_link($publication)
    {
        $url = $this->get_component()->get_url(
            array(
                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID],
                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => Manager::ACTION_DISPLAY
            )
        );

        return '<a href="' . $url . '">' .
            StringUtilities::getInstance()->truncate($publication[ContentObject::PROPERTY_TITLE], 50) . '</a>';
    }

    /**
     * @return \Chamilo\Application\Weblcms\Bridge\Assignment\Service\AssignmentService
     */
    protected function getAssignmentService()
    {
        /** @var \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Component\BrowserComponent $component */
        $component = $this->get_component()->get_tool_browser()->get_parent();

        return $component->getAssignmentService();
    }

    /**
     * @return \Chamilo\Application\Weblcms\Bridge\Assignment\Service\Entity\EntityServiceManager
     */
    protected function getEntityServiceManager()
    {
        /** @var \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Component\BrowserComponent $component */
        $component = $this->get_component()->get_tool_browser()->get_parent();

        return $component->getEntityServiceManager();
    }

    /**
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     *
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Storage\DataClass\Publication|\Chamilo\Libraries\Storage\DataClass\CompositeDataClass|\Chamilo\Libraries\Storage\DataClass\DataClass
     */
    protected function getAssignmentPublication(ContentObjectPublication $contentObjectPublication)
    {
        /** @var \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Component\BrowserComponent $component */
        $component = $this->get_component()->get_tool_browser()->get_parent();

        return $component->getAssignmentPublication($contentObjectPublication);
    }

}
