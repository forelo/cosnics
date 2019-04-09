<?php

namespace Chamilo\Application\Lti\Storage\Entity;

/**
 * @package Chamilo\Application\Lti\Domain
 * @author - Sven Vanpoucke - Hogeschool Gent
 *
 * @ORM\Entity(repositoryClass="Chamilo\Application\Lti\Storage\Repository\LtiProviderRepository")
 * @ORM\Table(
 *     name="lti_provider_custom_parameter"
 * )
 */
class LtiProviderCustomParameter
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=true)
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Id
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    protected $name;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="string", length=255)
     */
    protected $value;

    /**
     * @var \Chamilo\Application\Lti\Storage\Entity\LtiProvider
     *
     * @ORM\ManyToOne(targetEntity="\Chamilo\Application\Lti\Storage\Entity\LtiProvider", inversedBy="customParameters")
     * @ORM\JoinColumn(name="lti_provider_id", referencedColumnName="id")
     */
    protected $ltiProvider;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     */
    public function setValue(string $value): void
    {
        $this->value = $value;
    }
}