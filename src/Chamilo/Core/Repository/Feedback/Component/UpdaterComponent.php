<?php

namespace Chamilo\Core\Repository\Feedback\Component;

use a;
use Chamilo\Core\Repository\Feedback\Form\FeedbackForm;
use Chamilo\Core\Repository\Feedback\Manager;
use Chamilo\Core\Repository\Feedback\Storage\DataClass\Feedback;
use Chamilo\Libraries\Architecture\Exceptions\NotAllowedException;
use Chamilo\Libraries\Architecture\Exceptions\ObjectNotExistException;
use Chamilo\Libraries\Platform\Session\Request;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\Utilities;
use function sprintf;

/**
 * Controller to update the controlled vocabulary
 *
 * @package core\metadata
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class UpdaterComponent extends Manager
{

    /**
     * Executes this controller
     */
    public function run()
    {
        $feedback_id = Request::get(self::PARAM_FEEDBACK_ID);
        $this->set_parameter(self::PARAM_FEEDBACK_ID, $feedback_id);

        $feedback = $this->feedbackServiceBridge->getFeedbackById($feedback_id);

        if (!$feedback instanceof Feedback)
        {
            throw new ObjectNotExistException(Translation::getInstance()->getTranslation('Feedback'), $feedback_id);
        }

        if (!$this->feedbackRightsServiceBridge->canEditFeedback($feedback))
        {
            throw new NotAllowedException();
        }

        $form = new FeedbackForm($this, $this->getContentObjectRepository(), $this->get_url(), $feedback);

        if ($form->validate())
        {
            try
            {
                $values = $form->exportValues();

                if ($feedback->getFeedbackContentObjectId() > 0)
                {
                    $feedbackContentObject =
                        $this->getContentObjectRepository()->findById($feedback->getFeedbackContentObjectId());
                    if (!$feedbackContentObject instanceof
                        \Chamilo\Core\Repository\ContentObject\Feedback\Storage\DataClass\Feedback)
                    {
                        throw new \RuntimeException(
                            sprintf(
                                'The given feedback with id %s references an invalid content object', $feedback->getId()
                            )
                        );
                    }

                    $feedbackContentObject->set_description($values[Feedback::PROPERTY_COMMENT]);
                    $this->getContentObjectIncluder()->scanForResourcesAndIncludeContentObjects($feedbackContentObject);
                    if (!$feedbackContentObject->update())
                    {
                        throw new \RuntimeException(
                            sprintf(
                                'Could not update the feedback content object for feedback with id %s',
                                $feedback->getId()
                            )
                        );
                    }
                }
                else
                {
                    $feedback->set_comment($values[Feedback::PROPERTY_COMMENT]);
                }

                $this->feedbackServiceBridge->updateFeedback($feedback);

                $message = Translation::get(
                    'ObjectUpdated',
                    array('OBJECT' => Translation::get('Feedback')),
                    Utilities::COMMON_LIBRARIES
                );

                $success = true;
            }
            catch (\Exception $ex)
            {
                $success = false;
                $this->getExceptionLogger()->logException($ex);
                $message = $ex->getMessage();
            }

            $this->redirect($message, !$success, array(self::PARAM_ACTION => self::ACTION_BROWSE));
        }
        else
        {
            return $form->toHtml();
        }
    }
}
