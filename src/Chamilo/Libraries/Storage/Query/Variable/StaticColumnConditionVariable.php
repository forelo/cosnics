<?php
namespace Chamilo\Libraries\Storage\Query\Variable;

/**
 *
 * @package Chamilo\Libraries\Storage\Query\Variable
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class StaticColumnConditionVariable extends StaticConditionVariable
{

    public function __construct($value, $quote = false)
    {
        parent::__construct($value, $quote);
    }
}
