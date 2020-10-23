<?php

namespace Chamilo\Application\ExamAssignment\Component;

use Chamilo\Application\ExamAssignment\Manager;
use Chamilo\Application\ExamAssignment\Service\ExamAssignmentService;
use Chamilo\Libraries\Format\Structure\Page;

/**
 * Class ListComponent
 * @package Chamilo\Application\ExamAssignment\Component
 *
 * @author - Sven Vanpoucke - Hogeschool Gent
 * @author - Stefan Gabriëls - Hogeschool Gent
 */
class ListComponent extends Manager
{
    /**
     * @return string
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     */
    function run()
    {
        Page::getInstance()->setViewMode(Page::VIEW_MODE_HEADERLESS);

        $exams = $this->getExamAssignmentService()->getCurrentExamAssignmentsForUser($this->getUser());

        return $this->getTwig()->render(
            Manager::context() . ':List.html.twig',
            [
                'HEADER' => $this->render_header(), 'FOOTER' => $this->render_footer(), 'USER' => $this->getUser(),
                'EXAMS' => $exams,
                'ENTRY_URL' => $this->get_url([self::PARAM_ACTION => self::ACTION_ENTRY, self::PARAM_EXAM => '__EXAMID__'])
            ]
        );
    }

    /**
     * @return ExamAssignmentService
     */
    protected function getExamAssignmentService()
    {
        return $this->getService(ExamAssignmentService::class);
    }
}
