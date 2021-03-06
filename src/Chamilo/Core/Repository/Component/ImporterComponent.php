<?php

namespace Chamilo\Core\Repository\Component;

use Chamilo\Core\Repository\Common\Import\ContentObjectImportService;
use Chamilo\Core\Repository\Common\Import\Factory\ImportFactories;
use Chamilo\Core\Repository\Manager;
use Chamilo\Core\Repository\Workspace\Service\ContentObjectRelationService;
use Chamilo\Core\Repository\Workspace\Service\RightsService;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Format\Structure\Breadcrumb;
use Chamilo\Libraries\Format\Structure\BreadcrumbTrail;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\StringUtilities;

/**
 *
 * @package repository.lib.repository_manager.component
 */
class ImporterComponent extends Manager
{

    /**
     * Runs this component and displays its output.
     */
    public function run()
    {
        if (!RightsService::getInstance()->canAddContentObjects($this->get_user(), $this->getWorkspace()))
        {
            throw new NotAllowedException();
        }

        $type = $this->getRequest()->getFromUrl(self::PARAM_IMPORT_TYPE, 'cpo');
        $importFactory = $this->getImportFactories()->getImportFactoryByAlias($type);

        $contentObjectImportService = new ContentObjectImportService(
            $importFactory, $type, $this->getWorkspace(), $this
        );

        if ($contentObjectImportService->hasFinished())
        {
            // Session :: register(self :: PARAM_MESSAGES, $controller->get_messages_for_url());
            $this->simple_redirect(array(self::PARAM_ACTION => self::ACTION_BROWSE_CONTENT_OBJECTS));
        }
        else
        {
            BreadcrumbTrail::getInstance()->add(
                new Breadcrumb(
                    $this->get_url(),
                    Translation::get(
                        'ImportType',
                        array(
                            'TYPE' => Translation::get(
                                'ImportType' . StringUtilities::getInstance()->createString($type)->upperCamelize(),
                                [], $importFactory->getImportContext()
                            )
                        )
                    )
                )
            );

            $html = array();

            $html[] = $this->render_header();
            $html[] = $contentObjectImportService->renderForm();
            $html[] = $this->render_footer();

            return implode(PHP_EOL, $html);
        }

        return null;
    }

    public function get_additional_parameters($additionalParameters = array())
    {
        return parent::get_additional_parameters([self::PARAM_IMPORT_TYPE]);
    }

    /**
     * @return ContentObjectRelationService
     */
    protected function getContentObjectRelationService()
    {
        return $this->getService(ContentObjectRelationService::class);
    }

    /**
     * @return ImportFactories
     */
    protected function getImportFactories()
    {
        return $this->getService(ImportFactories::class);
    }
}
