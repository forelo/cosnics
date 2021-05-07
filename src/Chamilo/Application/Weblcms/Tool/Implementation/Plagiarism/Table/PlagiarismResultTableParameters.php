<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Table;

/**
 * @package Chamilo\Application\Plagiarism\Table
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class PlagiarismResultTableParameters
{
    /**
     * @var \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService
     */
    protected $contentObjectPlagiarismResultService;

    /**
     * @var \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course
     */
    protected $course;

    /**
     * PlagiarismResultTableParameters constructor.
     *
     * @param \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService $contentObjectPlagiarismResultService
     * @param \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course $course
     */
    public function __construct(
        \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService $contentObjectPlagiarismResultService,
        \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course $course
    )
    {
        $this->contentObjectPlagiarismResultService = $contentObjectPlagiarismResultService;
        $this->course = $course;
    }

    /**
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService
     */
    public function getContentObjectPlagiarismResultService(
    ): \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Service\PlagiarismResultService
    {
        return $this->contentObjectPlagiarismResultService;
    }

    /**
     * @return \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course
     */
    public function getCourse(): \Chamilo\Application\Weblcms\Course\Storage\DataClass\Course
    {
        return $this->course;
    }
}