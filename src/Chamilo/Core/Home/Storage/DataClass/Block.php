<?php
namespace Chamilo\Core\Home\Storage\DataClass;

/**
 *
 * @package Chamilo\Core\Home\Storage\DataClass
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class Block extends Element
{
    const CONFIGURATION_VISIBILITY = 'visibility';
    const CONFIGURATION_CONTEXT = 'context';
    const CONFIGURATION_BLOCK_TYPE = 'block_type';

    /**
     *
     * @param string[] $configurationVariables
     * @return string[]
     */
    public static function getConfigurationVariables($configurationVariables = array())
    {
        return parent::getConfigurationVariables(
            array(self::CONFIGURATION_VISIBILITY, self::CONFIGURATION_CONTEXT, self::CONFIGURATION_BLOCK_TYPE));
    }

    /**
     *
     * @return boolean
     */
    public function getVisibility()
    {
        return $this->getSetting(self::CONFIGURATION_VISIBILITY);
    }

    /**
     *
     * @param boolean $visibility
     */
    public function setVisibility($visibility)
    {
        $this->setSetting(self::CONFIGURATION_VISIBILITY, $visibility);
    }

    /**
     *
     * @return boolean
     */
    public function isVisible()
    {
        return $this->getVisibility();
    }

    /**
     *
     * @return string
     */
    public function getContext()
    {
        return $this->getSetting(self::CONFIGURATION_CONTEXT);
    }

    /**
     *
     * @param string $context
     */
    public function setContext($context)
    {
        $this->setSetting(self::CONFIGURATION_CONTEXT, $context);
    }

    /**
     *
     * @return string
     */
    public function getBlockType()
    {
        return $this->getSetting(self::CONFIGURATION_BLOCK_TYPE);
    }

    /**
     *
     * @param string $blockType
     */
    public function setBlockType($blockType)
    {
        $this->setSetting(self::CONFIGURATION_BLOCK_TYPE, $blockType);
    }
}
