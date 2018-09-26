<?php

namespace Chamilo\Core\Queue\Storage\Repository;

use Chamilo\Core\Queue\Storage\Entity\JobEntity;
use Doctrine\ORM\EntityRepository;

/**
 * @package Chamilo\Core\Queue\Storage\Repository
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class JobEntityRepository extends EntityRepository
{
    /**
     * @param \Chamilo\Core\Queue\Storage\Entity\JobEntity $jobEntity
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createJobEntity(JobEntity $jobEntity)
    {
        $this->getEntityManager()->persist($jobEntity);
        $this->getEntityManager()->flush();
    }

    /**
     * @param \Chamilo\Core\Queue\Storage\Entity\JobEntity $jobEntity
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function updateJobEntity(JobEntity $jobEntity)
    {
        $this->getEntityManager()->flush();
    }
}