<?php

namespace Chamilo\Core\Repository\ContentObject\Rubric\Ajax\Model;

use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\CategoryNode;
use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\ClusterNode;
use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\CriteriumNode;
use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\RubricData;
use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\RubricNode;
use Chamilo\Core\Repository\ContentObject\Rubric\Storage\Entity\TreeNode;
use Hogent\Integration\Panopto\Domain\Exception\ValueNotInArrayException;
use JMS\Serializer\Annotation\Type;
use OutOfRangeException;

/**
 * @package Chamilo\Core\Repository\ContentObject\Rubric\Ajax
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class TreeNodeJSONModel
{
    const TYPE_CRITERIUM = 'criterium';
    const TYPE_CATEGORY = 'category';
    const TYPE_CLUSTER = 'cluster';
    const TYPE_RUBRIC = 'rubric';

    const TYPES = [
        self::TYPE_CRITERIUM => CriteriumNode::class, self::TYPE_RUBRIC => RubricNode::class,
        self::TYPE_CATEGORY => CategoryNode::class, self::TYPE_CLUSTER => ClusterNode::class
    ];

    /**
     * @var int
     *
     * @Type("integer")
     */
    protected $id;

    /**
     * @var string
     *
     * @Type("string")
     */
    protected $title;

    /**
     * @var int
     *
     * @Type("integer")
     */
    protected $parentId;

    /**
     * @var string
     *
     * @Type("string")
     */
    protected $type;

    /**
     * @var string
     *
     * @Type("string")
     */
    protected $color;

    /**
     * @var int
     *
     * @Type("integer")
     */
    protected $weight = 100;

    /**
     * TreeNodeJSONModel constructor.
     *
     * @param int $id
     * @param string $title
     * @param int $parentId
     * @param string $type
     * @param string $color
     * @param int $weight
     *
     * @throws \Exception
     */
    public function __construct(
        int $id, string $title, string $type, int $parentId = null, string $color = null, int $weight = null
    )
    {
        $this->id = $id;
        $this->title = $title;
        $this->parentId = $parentId;
        $this->type = $type;
        $this->color = $color;
        $this->weight = $weight;

        $this->validate();
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @return int
     */
    public function getParentId(): ?int
    {
        return $this->parentId;
    }

    /**
     * @return string
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getColor(): ?string
    {
        return $this->color;
    }

    /**
     * @return int
     */
    public function getWeight(): ?int
    {
        return $this->weight;
    }

    /**
     * @throws \Exception
     */
    public function validate()
    {
        $allowedTypes = array_keys(self::TYPES);
        if (!in_array($this->type, $allowedTypes))
        {
            throw new ValueNotInArrayException('type', $this->type, $allowedTypes);
        }

        if (!empty($this->weight) && ($this->weight < 0 || $this->weight > 100))
        {
            throw new OutOfRangeException('Weight must be between 0 and 100');
        }
    }

    /**
     * @param RubricData $rubricData
     *
     * @return TreeNode
     * @throws \Exception
     */
    public function toTreeNode(RubricData $rubricData): TreeNode
    {
        $this->validate();

        $class = self::TYPES[$this->getType()];
        return $class::fromJSONModel($this, $rubricData);
    }

    /**
     * @param TreeNode $treeNode
     *
     * @return false|int|string
     */
    public static function getTypeStringForTreeNode(TreeNode $treeNode)
    {
        $class = get_class($treeNode);
        return array_search($class, self::TYPES);
    }
}
