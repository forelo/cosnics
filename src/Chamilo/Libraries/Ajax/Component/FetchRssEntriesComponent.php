<?php
namespace Chamilo\Libraries\Ajax\Component;

use Chamilo\Libraries\Architecture\Interfaces\NoAuthenticationSupport;
use Chamilo\Libraries\Architecture\JsonAjaxResult;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Ajax\Manager;
use Chamilo\Libraries\File\Rss\Parser\RssFeedParserFactory;

/**
 *
 * @package Chamilo\Libraries\Ajax\Component
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 */
class FetchRssEntriesComponent extends Manager implements NoAuthenticationSupport
{

    /**
     *
     * @see \Chamilo\Libraries\Architecture\Application\Application::run()
     */
    public function run()
    {
        $url = $this->getRequest()->get('rss_feed_url');
        $number_entries = $this->getRequest()->get('number_of_entries');

        /**
         * WARNING! ONLY DO THIS WHEN YOU ARE SURE THAT YOU DON'T NEED TO WRITE TO THE SESSION ANYMORE.
         * THIS FUNCTION MAKES SURE THAT THE SESSION IS NOT BLOCKED WHEN PARSING (INVALID) RSS FEEDS.
         */
        session_write_close();

        $purifier_config = \HTMLPurifier_Config::createDefault();
        $purifier_config->set('Cache.SerializerPath', Path::getInstance()->getCachePath());
        $purifier_config->set('Cache.SerializerPermissions', 06770);

        $feed_parser = RssFeedParserFactory::create(
            new \HTMLPurifier($purifier_config),
            RssFeedParserFactory::SIMPLE_PIE_FEED_PARSER);

        $result = new JsonAjaxResult();
        $result->set_properties($feed_parser->parse($url, $number_entries));
        $result->display();
    }

    /**
     *
     * @see \Chamilo\Libraries\Architecture\AjaxManager::getRequiredPostParameters()
     */
    public function getRequiredPostParameters()
    {
        return array('rss_feed_url', 'number_of_entries');
    }
}