<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment;

use Chamilo\Application\Weblcms\Bridge\Assignment\Service\AssignmentService;
use Chamilo\Application\Weblcms\Service\PublicationService;
use Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Service\UserOvertimeService;
use Chamilo\Application\Weblcms\Bridge\Assignment\Service\Entity\EntityServiceManager;
use Chamilo\Application\Weblcms\CourseSettingsController;
use Chamilo\Application\Weblcms\Integration\Chamilo\Core\Reporting\Template\AssignmentEntitiesTemplate;
use Chamilo\Application\Weblcms\Renderer\PublicationList\ContentObjectPublicationListRenderer;
use Chamilo\Application\Weblcms\Rights\WeblcmsRights;
use Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication;
use Chamilo\Application\Weblcms\Storage\DataClass\CourseSetting;
use Chamilo\Application\Weblcms\Storage\DataManager;
use Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Storage\Repository\PublicationRepository;
use Chamilo\Application\Weblcms\Tool\Interfaces\IntroductionTextSupportInterface;
use Chamilo\Core\Repository\ContentObject\Assignment\Storage\DataClass\Assignment;
use Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface;
use Chamilo\Libraries\Architecture\Exceptions\NoObjectSelectedException;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Exceptions\ObjectNotExistException;
use Chamilo\Libraries\Architecture\Interfaces\Categorizable;
use Chamilo\Libraries\Format\Structure\ActionBar\Button;
use Chamilo\Libraries\Format\Structure\ActionBar\ButtonGroup;
use Chamilo\Libraries\Format\Structure\ActionBar\DropdownButton;
use Chamilo\Libraries\Format\Structure\ActionBar\SubButton;
use Chamilo\Libraries\Format\Structure\Glyph\FontAwesomeGlyph;
use Chamilo\Libraries\Format\Structure\Toolbar;
use Chamilo\Libraries\Format\Structure\ToolbarItem;
use Chamilo\Libraries\Format\Theme;
use Chamilo\Libraries\Translation\Translation;

/**
 *
 * @package application.weblcms.tool.assignment.php This tool allows a user to publish assignments in his or her course
 * @author Joris Willems <joris.willems@gmail.com>
 * @author Alexander Van Paemel
 * @author Bert De Clercq (Hogeschool Gent)
 * @author Anthony Hurst (Hogeschool Gent)
 */
abstract class Manager extends \Chamilo\Application\Weblcms\Tool\Manager implements Categorizable,
    IntroductionTextSupportInterface
{
    const ACTION_DISPLAY = 'Display';
    const ACTION_USER_OVERTIME = 'UserOvertime';

    // Parameters
    const PARAM_SUBMISSION = 'submission';
    const PARAM_SUBMITTER_TYPE = 'submitter_type';
    const PARAM_TARGET_ID = 'target_id';

    const ACTION_DOWNLOAD_ENTRIES = 'EntriesDownloader';

    // Properties
    const PROPERTY_NUMBER_OF_SUBMISSIONS = 'NumberOfSubmissions';

    const ACTION_AJAX = 'Ajax';

    /**
     * Constructor.
     *
     * @param ApplicationConfigurationInterface $applicationConfiguration
     *
     * @throws NotAllowedException
     * @throws \Chamilo\Libraries\Architecture\Exceptions\ObjectNotExistException
     */
    public function __construct(ApplicationConfigurationInterface $applicationConfiguration)
    {
        parent::__construct($applicationConfiguration);
    }

    public function get_available_browser_types()
    {
        $browser_types = array();
        $browser_types[] = ContentObjectPublicationListRenderer::TYPE_TABLE;
        $browser_types[] = ContentObjectPublicationListRenderer::TYPE_LIST;

        return $browser_types;
    }

    public static function get_allowed_types()
    {
        return array(Assignment::class_name());
    }

    /**
     * Adds extra actions to the toolbar and dropdown in different components
     *
     * @param ButtonGroup $buttonGroup
     * @param DropdownButton $dropdownButton
     * @param array $publication
     */
    public function add_content_object_publication_actions_dropdown($buttonGroup, $dropdownButton, $publication)
    {
        $dropdownButton->removeSubButton(0); // remove visibility (the 'eye' icon)

        $contentObjectPublication = $this->getPublicationService()->getPublication($publication[ContentObjectPublication::PROPERTY_ID]);

        if ($this->canViewAssignment($contentObjectPublication))
        {
            $buttonGroup->insertButton(
                new Button(
                    Translation::get($this->is_allowed(WeblcmsRights::EDIT_RIGHT) ? 'BrowseSubmitters' : 'MySubmissions'),
                    new FontAwesomeGlyph('list-alt'),
                    //Theme::getInstance()->getCommonImagePath('Action/Browser'),
                    $this->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_DISPLAY,
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                        )
                    ),
                    ToolbarItem::DISPLAY_ICON,
                    false,
                    'btn-link'
                ), 0
            );
        }

        if ($this->is_allowed(WeblcmsRights::EDIT_RIGHT))
        {
            $dropdownButton->insertSubButton(
                new SubButton(
                    Translation::get('UserOvertime'),
                    Theme::getInstance()->getCommonImagePath('Action/Config'),
                    $this->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_USER_OVERTIME,
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                        )
                    ),
                    ToolbarItem::DISPLAY_ICON_AND_LABEL
                ),
                1
            );
        }
        else
        {
            $buttonGroup->removeButton(1);

            if (!$this->canViewAssignment($contentObjectPublication))
            {
                $buttonGroup->removeButton(0);
            }
        }
    }


        /**
     * Adds extra actions to the toolbar in different components
     *
     * TODO: remove
     *
     * @param $toolbar Toolbar
     * @param $publication Publication
     *
     * @return Toolbar
     */
    public function add_content_object_publication_actions($toolbar, $publication)
    {
        $toolbar->deleteItem(4);

        if ($this->is_allowed(WeblcmsRights::EDIT_RIGHT))
        {
            $toolbar->insert_item(
                new ToolbarItem(
                    Translation::get('BrowseSubmitters'),
                    Theme::getInstance()->getCommonImagePath('Action/Browser'),
                    $this->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_DISPLAY,
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                        )
                    ),
                    ToolbarItem::DISPLAY_ICON
                ), 0
            );

            $toolbar->insert_item(
                new ToolbarItem(
                    Translation::get('UserOvertime'),
                    Theme::getInstance()->getCommonImagePath('Action/Config'),
                    $this->get_url(
                        array(
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_USER_OVERTIME,
                            \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                        )
                    ),
                    ToolbarItem::DISPLAY_ICON
                ),
                2
            );
        }
        else
        {
            $toolbar->deleteItem(1);
            $toolbar->deleteItem(0);

            $contentObjectPublication = $this->getPublicationService()->getPublication($publication[ContentObjectPublication::PROPERTY_ID]);

            if ($this->canViewAssignment($contentObjectPublication))
            {
                $toolbar->insert_item(
                    new ToolbarItem(
                        Translation::get('BrowseSubmissions'),
                        Theme::getInstance()->getCommonImagePath('Action/Browser'),
                        $this->get_url(
                            array(
                                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_DISPLAY,
                                \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                            )
                        ),
                        ToolbarItem::DISPLAY_ICON
                    ), 0
                );
            }
        }

        return $toolbar;
    }

    public function addContentObjectPublicationButtons(
        $publication, ButtonGroup $buttonGroup,
        DropdownButton $dropdownButton
    )
    {
        $buttonGroup->prependButton(
            new Button(
                Translation::get('BrowseSubmitters'),
                new FontAwesomeGlyph('folder-open'),
                $this->get_url(
                    array(
                        \Chamilo\Application\Weblcms\Tool\Manager::PARAM_ACTION => self::ACTION_DISPLAY,
                        \Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID => $publication[ContentObjectPublication::PROPERTY_ID]
                    )
                ),
                Button::DISPLAY_ICON,
                false,
                'btn-link'
            )
        );
    }

    /**
     * @return null|string
     */
    public function isEphorusEnabled()
    {
        return false;
    }

    /**
     * @return \Chamilo\Application\Weblcms\Bridge\Assignment\Service\AssignmentService
     */
    public function getAssignmentService()
    {
        return $this->getService(AssignmentService::class);
    }

    /**
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Service\UserOvertimeService
     */
    public function getUserOvertimeService()
    {
        return $this->getService(UserOvertimeService::class);
    }

    /**
     * @return EntityServiceManager
     */
    public function getEntityServiceManager()
    {
        return $this->getService(EntityServiceManager::class);
    }

    /**
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Storage\Repository\PublicationRepository
     */
    public function getPublicationRepository()
    {
        return $this->getService(PublicationRepository::class);
    }

    /**
     * @param \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication
     *
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Storage\DataClass\Publication|\Chamilo\Libraries\Storage\DataClass\CompositeDataClass|\Chamilo\Libraries\Storage\DataClass\DataClass
     */
    public function getAssignmentPublication(ContentObjectPublication $contentObjectPublication)
    {
        return $this->getPublicationRepository()->findPublicationByContentObjectPublication($contentObjectPublication);
    }


    /**
     * @param string $ajaxAction
     *
     * @param array $parameters
     *
     * @return string
     */
    public function getAjaxUrl(string $ajaxAction, $parameters = [])
    {
        $parameters[self::PARAM_ACTION] = self::ACTION_AJAX;
        $parameters[\Chamilo\Application\Weblcms\Tool\Implementation\ExamAssignment\Ajax\Manager::PARAM_ACTION] = $ajaxAction;

        return $this->get_url($parameters);
    }


    /**
     * @return \Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication
     *
     * @throws \Chamilo\Libraries\Architecture\Exceptions\NoObjectSelectedException
     * @throws \Chamilo\Libraries\Architecture\Exceptions\ObjectNotExistException
     */
    public function getContentObjectPublication()
    {
        $contentObjectPublicationId =
            $this->getRequest()->getFromUrl(\Chamilo\Application\Weblcms\Tool\Manager::PARAM_PUBLICATION_ID);

        $contentObjectPublicationTranslation =
            $this->getTranslator()->trans('ContentObjectPublication', [], Manager::context());

        if (empty($contentObjectPublicationId))
        {
            throw new NoObjectSelectedException($contentObjectPublicationTranslation);
        }

        $contentObjectPublication = $this->getPublicationService()->getPublication($contentObjectPublicationId);

        if (!$contentObjectPublication instanceof ContentObjectPublication)
        {
            throw new ObjectNotExistException($contentObjectPublicationTranslation, $contentObjectPublicationId);
        }

        return $contentObjectPublication;
    }

    /**
     * @return PublicationService
     */
    protected function getPublicationService()
    {
        return $this->getService(PublicationService::class);
    }

    /**
     * @param ContentObjectPublication|null $contentObjectPublication
     *
     * @return bool
     * @throws NoObjectSelectedException
     * @throws NotAllowedException
     * @throws ObjectNotExistException
     */
    protected function canViewAssignment(\Chamilo\Application\Weblcms\Storage\DataClass\ContentObjectPublication $contentObjectPublication = null)
    {
        $publication = $contentObjectPublication ?? $this->getContentObjectPublication();

        if (!$this->is_allowed(WeblcmsRights::VIEW_RIGHT, $publication))
        {
            return false;
        }

        if (!$this->is_allowed(WeblcmsRights::EDIT_RIGHT))
        {
            $assignment = $this->getService(\Chamilo\Core\Repository\Workspace\Service\ContentObjectService::class)->findById($publication->get_content_object_id());
            $time = time();

            if (((int) $assignment->get_end_time()) > $time)
            {
                return false;
            }

            $assignmentPublication = $this->getAssignmentPublication($publication);

            $fromDate = $assignmentPublication->getFromDate();
            $toDate = $assignmentPublication->getToDate();

            if ($fromDate == 0 || $time < $fromDate || ($toDate != 0 && $time > $toDate))
            {
                return false;
            }
        }

        return true;
    }
}
