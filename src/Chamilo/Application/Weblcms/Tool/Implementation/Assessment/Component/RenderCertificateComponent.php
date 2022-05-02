<?php

namespace Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Component;

use Chamilo\Application\Weblcms\Integration\Chamilo\Core\Tracking\Storage\DataClass\AssessmentAttempt;
use Chamilo\Application\Weblcms\Tool\Implementation\Assessment\Manager;
use Chamilo\Core\Repository\ContentObject\Assessment\Display\Attempt\AbstractAttempt;
use Chamilo\Core\Repository\ContentObject\Assessment\Storage\DataClass\Assessment;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Core\User\Storage\DataClass\User;
use Chamilo\Libraries\Architecture\Application\ApplicationConfigurationInterface;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Storage\DataClass\DataClass;
use Chamilo\Libraries\Storage\DataManager\DataManager;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrieveParameters;
use Chamilo\Libraries\Storage\Query\Condition\EqualityCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Storage\Query\Variable\StaticConditionVariable;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class RenderCertificateComponent extends Manager
{
    /**
     * @throws NotAllowedException
     */
    public function __construct(ApplicationConfigurationInterface $applicationConfiguration)
    {
        parent::__construct($applicationConfiguration);
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function run(): string
    {
        // Assesment properties
        $uaid = Request::get(self::PARAM_USER_ASSESSMENT);
        $aid = Request::get(self::PARAM_ASSESSMENT);

        $assessmentAttemptInfo = $this->getAssessementAttempt($uaid);
        $assessmentInfo = $this->getAssessement($aid);
        $userProperties = $this->getUserInfo($assessmentAttemptInfo[DataClass::PROPERTIES_DEFAULT][AbstractAttempt::PROPERTY_USER_ID]);

        // User properties
        $properties['title'] = $assessmentInfo[DataClass::PROPERTIES_DEFAULT][Assessment::PROPERTY_TITLE];
        $properties['name'] = $userProperties[DataClass::PROPERTIES_DEFAULT][User::PROPERTY_FIRSTNAME] . ' ' . $userProperties[DataClass::PROPERTIES_DEFAULT][User::PROPERTY_LASTNAME];
        $properties['company'] = $userProperties[DataClass::PROPERTIES_DEFAULT][User::PROPERTY_OFFICIAL_CODE];
        $properties['score'] = $assessmentAttemptInfo[DataClass::PROPERTIES_DEFAULT][AbstractAttempt::PROPERTY_TOTAL_SCORE];
        $date = strtolower(
            gmdate("l j F Y", $assessmentAttemptInfo[DataClass::PROPERTIES_DEFAULT][AbstractAttempt::PROPERTY_END_TIME])
        );
        $properties['valid'] = $date;
        $properties['valid2'] = (int)(substr($date, strlen($date) - 4, 4)) + 1;

        return $this->getTwig()->render(
            'Chamilo\Application\Forelo:ForeloCertificate.html.twig', $properties);
    }

    private function getAssessement(int $aid): array
    {
        $conditionItem = new EqualityCondition(
            new PropertyConditionVariable(
                ContentObject::class_name(),
                DataClass::PROPERTY_ID),
            new StaticConditionVariable($aid));
        $item = DataManager::retrieve(
            ContentObject::class_name(),
            new DataClassRetrieveParameters($conditionItem));

        return $item->get_properties();
    }

    private function getAssessementAttempt(int $uaid): array
    {
        $conditionItem = new EqualityCondition(
            new PropertyConditionVariable(
                AssessmentAttempt::class_name(),
                AssessmentAttempt::PROPERTY_ID),
            new StaticConditionVariable($uaid));
        $item = DataManager::retrieve(
            AssessmentAttempt::class_name(),
            new DataClassRetrieveParameters($conditionItem));

        return $item->get_properties();
    }

    private function getUserInfo(int $userId): array
    {
        $conditionUser = new EqualityCondition(
            new PropertyConditionVariable(
                User::class_name(),
                User::PROPERTY_ID),
            new StaticConditionVariable($userId));
        $user = DataManager::retrieve(
            User::class_name(),
            new DataClassRetrieveParameters($conditionUser));

        return $user->get_properties();
    }
}
