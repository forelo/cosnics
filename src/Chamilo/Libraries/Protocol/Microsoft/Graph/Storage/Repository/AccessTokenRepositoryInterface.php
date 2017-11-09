<?php
namespace Chamilo\Libraries\Protocol\Microsoft\Graph\Storage\Repository;

use League\OAuth2\Client\Token\AccessToken;

/**
 * Storage solution for the office365 access token
 * 
 * @package Chamilo\Libraries\Protocol\Microsoft\Graph\Storage\Repository
 * @author Sven Vanpoucke - Hogeschool Gent
 */
interface AccessTokenRepositoryInterface
{

    /**
     * Returns the application access token
     * 
     * @return AccessToken
     */
    public function getApplicationAccessToken();

    /**
     * Stores the application access token
     * 
     * @param \League\OAuth2\Client\Token\AccessToken $accessToken
     */
    public function storeApplicationAccessToken(AccessToken $accessToken);

    /**
     * Returns the delegated access token
     * 
     * @return AccessToken
     */
    public function getDelegatedAccessToken();

    /**
     * Stores the delegated access token
     * 
     * @param \League\OAuth2\Client\Token\AccessToken $accessToken
     */
    public function storeDelegatedAccessToken(AccessToken $accessToken);
}