<?php
namespace Chamilo\Libraries\Storage\DataClass\Property;

use Chamilo\Libraries\Architecture\Interfaces\Hashable;

/**
 *
 * @package Chamilo\Libraries\Storage\DataClass\Property
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class DataClassProperties implements Hashable
{
    use \Chamilo\Libraries\Architecture\Traits\HashableTrait;

    /**
     *
     * @var \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperty[]|\Chamilo\Libraries\Storage\Query\Variable\ConditionVariable[]
     */
    private $properties;

    /**
     * Constructor
     *
     * @param
     *            \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperty[]|\Chamilo\Libraries\Storage\Query\Variable\ConditionVariable[]
     */
    public function __construct($properties = array())
    {
        $this->properties = (is_array($properties) ? $properties : func_get_args());
    }

    /**
     * Gets the properties
     *
     * @return \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperty[]|\Chamilo\Libraries\Storage\Query\Variable\ConditionVariable[]
     */
    public function get()
    {
        return $this->properties;
    }

    /**
     *
     * @param \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperty|\Chamilo\Libraries\Storage\Query\Variable\ConditionVariable $property
     */
    public function add($property)
    {
        $this->properties[] = $property;
    }

    /**
     *
     * @see \Chamilo\Libraries\Architecture\Interfaces\Hashable::getHashParts()
     */
    public function getHashParts()
    {
        $hashParts = array();

        $hashParts[] = __CLASS__;

        foreach ($this->get() as $property)
        {
            $hashParts[] = $property->getHashParts();
        }

        sort($hashParts);

        return $hashParts;
    }

    /**
     * @return bool
     */
    public function isEmpty()
    {
        return empty($this->properties);
    }

    /**
     * Merges the given dataclass properties into this one
     *
     * @param \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperties $dataClassPropertiesToMerge
     */
    public function merge(DataClassProperties $dataClassPropertiesToMerge = null)
    {
        if (! $dataClassPropertiesToMerge instanceof DataClassProperties)
        {
            return;
        }

        foreach ($dataClassPropertiesToMerge->get() as $property)
        {
            $this->add($property);
        }
    }
}
