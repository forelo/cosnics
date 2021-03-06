<?php

namespace Chamilo\Application\Lti\Service\Security;

use IMSGlobal\LTI\OAuth\OAuthConsumer;
use IMSGlobal\LTI\OAuth\OAuthToken;

/**
 * @package Chamilo\Application\Lti\Service
 * @author - Sven Vanpoucke - Hogeschool Gent
 */
class OAuthDataStore extends \IMSGlobal\LTI\OAuth\OAuthDataStore
{
    /**
     * @var \IMSGlobal\LTI\OAuth\OAuthConsumer
     */
    protected $oAuthConsumer;

    /**
     * OAuthDataStore constructor.
    $oAuthConsumer
     * @param \IMSGlobal\LTI\OAuth\OAuthConsumer $oAuthConsumer
     */
    public function __construct(OAuthConsumer $oAuthConsumer)
    {
        $this->oAuthConsumer = $oAuthConsumer;
    }

    /**
     * Create an OAuthConsumer object for the tool consumer.
     *
     * @param string $consumerKey Consumer key value
     *
     * @return OAuthConsumer OAuthConsumer object
     */
    function lookup_consumer($consumerKey)
    {
        return $this->oAuthConsumer;
    }

    /**
     * Create an OAuthToken object for the tool consumer.
     *
     * @param string $consumer   OAuthConsumer object
     * @param string $tokenType  Token type
     * @param string $token      Token value
     *
     * @return OAuthToken OAuthToken object
     */
    function lookup_token($consumer, $tokenType, $token)
    {
        return new OAuthToken($consumer, '');
    }

    /**
     * Lookup nonce value for the tool consumer.
     *
     * @param OAuthConsumer $consumer OAuthConsumer object
     * @param string $token Token value
     * @param string $nonce
     * @param string $timestamp Date/time of request
     *
     * @return boolean True if the nonce value already exists
     */
    function lookup_nonce($consumer, $token, $nonce, $timestamp)
    {
        return false;
    }
}