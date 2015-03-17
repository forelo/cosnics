<?php
namespace Chamilo\Core\User\Integration\Chamilo\Core\Home\Package;

use Chamilo\Libraries\Platform\Translation;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrieveParameters;
use Chamilo\Libraries\Storage\Query\Condition\AndCondition;
use Chamilo\Libraries\Storage\Query\Condition\EqualityCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;
use Chamilo\Libraries\Storage\Query\Variable\StaticConditionVariable;

/**
 *
 * @package Chamilo\Core\User\Integration\Chamilo\Core\Home\Package
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class Installer extends \Chamilo\Core\Home\Action\Installer
{

    public function extra()
    {
        if (parent :: extra())
        {
            $conditions = array();
            $conditions[] = new EqualityCondition(
                new PropertyConditionVariable(
                    \Chamilo\Core\Home\Storage\DataClass\Column :: class_name(), 
                    \Chamilo\Core\Home\Storage\DataClass\Column :: PROPERTY_TITLE), 
                new StaticConditionVariable(Translation :: get('Various', null, 'core\home')));
            $conditions[] = new EqualityCondition(
                new PropertyConditionVariable(
                    \Chamilo\Core\Home\Storage\DataClass\Column :: class_name(), 
                    \Chamilo\Core\Home\Storage\DataClass\Column :: PROPERTY_USER), 
                new StaticConditionVariable(0));
            $condition = new AndCondition($conditions);
            
            $parameters = new DataClassRetrieveParameters($condition);
            $column = \Chamilo\Core\Home\Storage\DataManager :: retrieve(
                \Chamilo\Core\Home\Storage\DataClass\Column :: class_name(), 
                $parameters);
            
            if ($column instanceof \Chamilo\Core\Home\Storage\DataClass\Column)
            {
                
                $block = new \Chamilo\Core\Home\Storage\DataClass\Block();
                $block->set_column($column->get_id());
                $block->set_title(Translation :: get('User', null, \Chamilo\Core\User\Manager :: context()));
                $registration = \Chamilo\Core\Home\Storage\DataManager :: retrieve_home_block_registration_by_context_and_block(
                    static :: package(), 
                    'Login');
                $block->set_registration_id($registration->get_id());
                $block->set_user('0');
                if (! $block->create())
                {
                    return false;
                }
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
}
