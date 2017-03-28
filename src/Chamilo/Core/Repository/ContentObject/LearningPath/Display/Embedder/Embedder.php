<?php

namespace Chamilo\Core\Repository\ContentObject\LearningPath\Display\Embedder;

use Chamilo\Core\Repository\ContentObject\LearningPath\ComplexContentObjectPathNode;
use Chamilo\Core\Repository\ContentObject\LearningPath\Display\Attempt\LearningPathChildAttempt;
use Chamilo\Core\Repository\ContentObject\LearningPath\Domain\LearningPathTreeNode;
use Chamilo\Core\Repository\ContentObject\LearningPath\Service\LearningPathTrackingService;
use Chamilo\Core\Repository\ContentObject\LearningPath\Storage\DataClass\LearningPath;
use Chamilo\Libraries\Architecture\Application\Application;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Format\Utilities\ResourceManager;
use Chamilo\Libraries\Platform\Session\Request;

/**
 *
 * @package core\repository\content_object\learning_path\display
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
abstract class Embedder
{
    const PARAM_EMBEDDED_CONTENT_OBJECT_ID = 'embedded_content_object_id';

    /**
     *
     * @var Application
     */
    private $application;

    /**
     * @var LearningPathTrackingService
     */
    protected $learningPathTrackingService;

    /**
     * @var LearningPath
     */
    protected $learningPath;

    /**
     * @var LearningPathTreeNode
     */
    protected $learningPathTreeNode;

    /**
     * Embedder constructor.
     *
     * @param Application $application
     * @param LearningPathTrackingService $learningPathTrackingService
     * @param LearningPath $learningPath
     * @param LearningPathTreeNode $learningPathTreeNode
     */
    public function __construct(
        \Chamilo\Libraries\Architecture\Application\Application $application,
        LearningPathTrackingService $learningPathTrackingService,
        LearningPath $learningPath,
        LearningPathTreeNode $learningPathTreeNode
    )
    {
        $this->application = $application;
        $this->learningPathTrackingService = $learningPathTrackingService;
        $this->learningPath = $learningPath;
        $this->learningPathTreeNode = $learningPathTreeNode;
    }

    /**
     * @return Application
     */
    public function get_application()
    {
        return $this->application;
    }

    /**
     *
     * @return string
     */
    public function track()
    {
        $this->learningPathTrackingService->changeActiveAttemptStatus(
            $this->learningPath, $this->learningPathTreeNode, $this->get_application()->getUser()
        );

        // We need the second parent as the first one is just the display itself, since the embedder is a child of the
        // display execution wise and the required context is that of the display itself
        $namespace = $this->get_application()->get_application()->package() .
            '\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Display\Ajax';

        $html[] = '<script type="text/javascript">';
        $html[] = '    var trackerId = "' . $this->learningPathTreeNode->getId() . '";';
        $html[] = '    var trackerContext = ' . json_encode($namespace) . ';';
        $html[] = '</script>';

        $html[] = ResourceManager::getInstance()->get_resource_html(
            Path::getInstance()->getJavascriptPath('Chamilo\Core\Repository\ContentObject\LearningPath\Display', true) .
            'LearningPathItem.js'
        );

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @return string
     */
    public function run()
    {
        $html = array();

        $html[] = $this->track();
        $html[] = $this->render();

        return implode(PHP_EOL, $html);
    }

    /**
     *
     * @return string
     */
    abstract public function render();

    /**
     *
     * @param Application $application
     * @param LearningPathTrackingService $learningPathTrackingService
     * @param LearningPath $learningPath
     * @param LearningPathTreeNode $learningPathTreeNode
     *
     * @return Embedder
     */
    static public function factory(
        Application $application,
        LearningPathTrackingService $learningPathTrackingService,
        LearningPath $learningPath,
        LearningPathTreeNode $learningPathTreeNode
    )
    {
        $namespace = $learningPathTreeNode->getContentObject()->package() .
            '\Integration\Chamilo\Core\Repository\ContentObject\LearningPath\Display';
        $class_name = $namespace . '\Embedder';

        return new $class_name($application, $learningPathTrackingService, $learningPath, $learningPathTreeNode);
    }

    /**
     *
     * @return int
     */
    static public function get_embedded_content_object_id()
    {
        return Request::get(self::PARAM_EMBEDDED_CONTENT_OBJECT_ID);
    }
}