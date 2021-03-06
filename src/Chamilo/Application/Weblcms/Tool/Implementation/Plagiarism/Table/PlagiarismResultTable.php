<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Table;

use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\Format\Table\Extension\RecordTable\RecordTable;

/**
 * @package Chamilo\Application\Plagiarism\Table
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class PlagiarismResultTable extends RecordTable
{
    /**
     * @var \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Table\PlagiarismResultTableParameters
     */
    protected $plagiarismResultTableParameters;

    /**
     * PlagiarismResultTable constructor.
     *
     * @param \Chamilo\Libraries\Architecture\Application\Application $component
     * @param \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Table\PlagiarismResultTableParameters $parameters
     *
     * @throws \Exception
     */
    public function __construct(Application $component, PlagiarismResultTableParameters $parameters)
    {
        $this->plagiarismResultTableParameters = $parameters;
        parent::__construct($component);
    }

    /**
     * @return \Chamilo\Application\Weblcms\Tool\Implementation\Plagiarism\Table\PlagiarismResultTableParameters
     */
    public function getPlagiarismResultTableParameters()
    {
        return $this->plagiarismResultTableParameters;
    }
}