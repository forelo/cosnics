<?php
namespace Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism;

use Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismCheckerInterface;
use Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService;

/**
 * @package Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
abstract class Manager extends \Chamilo\Application\Weblcms\Tool\Manager
{
    const ACTION_BROWSE = 'Browser';
    const ACTION_REFRESH = 'Refresh';
    const ACTION_CHECK_PLAGIARISM = 'CheckPlagiarism';
    const ACTION_VIEW_REPORT = 'ViewReport';

    const PARAM_CONTENT_OBJECT_PLAGIARISM_RESULT_ID = 'PlagiarismResultId';

    const DEFAULT_ACTION = self::ACTION_BROWSE;

    /**
     * @return PlagiarismResultService
     */
    protected function getContentObjectPlagiarismResultService()
    {
        return $this->getService(PlagiarismResultService::class);
    }

    /**
     * @return PlagiarismCheckerInterface
     */
    protected function getContentObjectPlagiarismChecker()
    {
        return $this->getService(PlagiarismCheckerInterface::class);
    }
}
