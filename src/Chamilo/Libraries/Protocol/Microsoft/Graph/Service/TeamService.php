<?php

namespace Chamilo\Libraries\Protocol\Microsoft\Graph\Service;

use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Protocol\Microsoft\Graph\Exception\AzureUserNotExistsException;
use Chamilo\Libraries\Protocol\Microsoft\Graph\Storage\Repository\TeamRepository;
use GuzzleHttp\Exception\ClientException;
use Microsoft\Graph\Model\Group;
use Microsoft\Graph\Model\Team;

/**
 * Class TeamService
 */
class TeamService
{
    /**
     * @var TeamRepository
     */
    protected $teamRepository;

    /**
     *
     * @var \Chamilo\Libraries\Protocol\Microsoft\Graph\Service\GroupService
     */
    protected $groupService;

    /**
     * TeamService constructor.
     * @param GroupService $groupService
     * @param TeamRepository $teamRepository
     */
    public function __construct(
        GroupService $groupService,
        TeamRepository $teamRepository
    )
    {
        $this->groupService = $groupService;
        $this->teamRepository = $teamRepository;
    }

    /**
     * @param string $groupId
     * @param int $retryCounter
     * @return Team
     */
    public function addTeamToGroup(string $groupId, int $retryCounter = 0): Team
    { //todo queue implementation
        try {
            return $this->teamRepository->addTeamToGroup($groupId);
        } catch (ClientException $exception) {
            if ($exception->getCode() == 404 && $retryCounter < 3) {//group maybe not created due to replication delay
                $retryCounter++;
                sleep(10);
                return $this->addTeamToGroup($groupId, $retryCounter);
            } else {
                throw $exception;
            }
        }
    }

    /**
     * @param string $groupId
     * @return Team
     */
    public function getTeam(string $groupId): Team
    {
        $team = $this->teamRepository->getTeam($groupId);
        if(!$team instanceof Team) {
            return null;
        }

        return $team;
    }

    /**
     * @param Group $group
     * @return string
     */
    public function getTeamUrl(Group $group)
    {
        return $this->teamRepository->getUrl($group->getId());
    }

    /**
     * @param User $owner
     * @param string $teamName
     * @return Team
     * @throws AzureUserNotExistsException
     */
    public function createTeamByName(User $owner, string $teamName):Team
    {
        $groupId = $this->groupService->createGroupByName($owner, $teamName);

        return $this->addTeamToGroup($groupId);
    }

    /**
     * @param User $user
     * @param Team $team
     * @return bool
     */
    public function isMember(User $user, Team $team):bool
    {
        return $this->groupService->isMemberOfGroup($team->getId(), $user);
    }

    /**
     * @param User $user
     * @param Team $team
     * @return bool
     */
    public function isOwner(User $user, Team $team): bool
    {
        return $this->groupService->isOwnerOfGroup($team->getId(), $user);
    }

    /**
     * @param User $user
     * @param Team $team
     * @throws AzureUserNotExistsException
     */
    public function addMember(User $user, Team $team)
    {
        $this->groupService->addMemberToGroup($team->getId(), $user);
    }

    /**
     * @param User $user
     * @param Team $team
     * @throws AzureUserNotExistsException
     */
    public function addOwner(User $user, Team $team)
    {
        $this->groupService->addOwnerToGroup($team->getId(), $user);
    }
}