<?php
namespace Chamilo\Core\Metadata\Provider\Storage\DataClass;

use Chamilo\Libraries\Storage\DataClass\DataClass;

/**
 *
 * @package Ehb\Core\Metadata\Provider\Storage\DataClass
 * @author Sven Vanpoucke - Hogeschool Gent
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class Link extends DataClass
{
    /**
     * **************************************************************************************************************
     * Properties *
     * **************************************************************************************************************
     */
    const PROPERTY_ENTITY_TYPE = 'entity_type';
    const PROPERTY_ELEMENT_ID = 'element_id';
    const PROPERTY_PROVIDER_REGISTRATION_ID = 'provider_registration_id';

    /**
     * **************************************************************************************************************
     * Extended functionality *
     * **************************************************************************************************************
     */

    /**
     * Get the default properties
     *
     * @param string[] $extended_property_names
     *
     * @return string[] The property names.
     */
    public static function get_default_property_names($extended_property_names = array())
    {
        $extended_property_names[] = self :: PROPERTY_ENTITY_TYPE;
        $extended_property_names[] = self :: PROPERTY_ELEMENT_ID;
        $extended_property_names[] = self :: PROPERTY_PROVIDER_REGISTRATION_ID;

        return parent :: get_default_property_names($extended_property_names);
    }

    /**
     * **************************************************************************************************************
     * Getters & Setters *
     * **************************************************************************************************************
     */

    /**
     *
     * @return string
     */
    public function get_entity_type()
    {
        return $this->get_default_property(self :: PROPERTY_ENTITY_TYPE);
    }

    /**
     *
     * @param string $entityType
     */
    public function set_entity_type($entityType)
    {
        $this->set_default_property(self :: PROPERTY_ENTITY_TYPE, $entityType);
    }

    /**
     *
     * @return integer
     */
    public function get_element_id()
    {
        return $this->get_default_property(self :: PROPERTY_ELEMENT_ID);
    }

    /**
     *
     * @param integer
     */
    public function set_element_id($elementId)
    {
        $this->set_default_property(self :: PROPERTY_ELEMENT_ID, $elementId);
    }

    /**
     *
     * @return integer
     */
    public function get_provider_registration_id()
    {
        return $this->get_default_property(self :: PROPERTY_PROVIDER_REGISTRATION_ID);
    }

    /**
     *
     * @param integer
     */
    public function set_provider_registration_id($providerRegistrationId)
    {
        $this->set_default_property(self :: PROPERTY_PROVIDER_REGISTRATION_ID, $providerRegistrationId);
    }
}