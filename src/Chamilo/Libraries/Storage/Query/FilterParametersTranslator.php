<?php

namespace Chamilo\Libraries\Storage\Query;

use Chamilo\Libraries\Storage\DataClass\Property\DataClassProperties;
use Chamilo\Libraries\Storage\Parameters\DataClassParameters;
use Chamilo\Libraries\Storage\Parameters\FilterParameters;
use Chamilo\Libraries\Storage\Query\Condition\AndCondition;
use Chamilo\Libraries\Storage\Query\Condition\Condition;
use Chamilo\Libraries\Storage\Query\Condition\OrCondition;
use Chamilo\Libraries\Storage\Query\Condition\PatternMatchCondition;

/**
 * Translates a filter parameters object into a DataClassParameters object
 *
 * @package Chamilo\Libraries\Storage\Query
 *
 * @author Sven Vanpoucke - Hogeschool Gent
 */
class FilterParametersTranslator
{
    /**
     * @param \Chamilo\Libraries\Storage\Parameters\FilterParameters $filterParameters
     * @param \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperties $searchProperties
     * @param \Chamilo\Libraries\Storage\Parameters\DataClassParameters $dataClassParameters
     * @param \Chamilo\Libraries\Storage\Query\Condition\Condition $contextCondition
     */
    public function translateFilterParameters(
        FilterParameters $filterParameters, DataClassProperties $searchProperties,
        DataClassParameters $dataClassParameters, Condition $contextCondition = null
    )
    {
        $dataClassParameters->setCondition(
            $this->translateSearchParametersToCondition($filterParameters, $searchProperties, $contextCondition)
        );
        $dataClassParameters->setOffset($filterParameters->getOffset());
        $dataClassParameters->setCount($filterParameters->getCount());
        $dataClassParameters->setOrderBy($filterParameters->getOrderBy());
    }

    /**
     * @param \Chamilo\Libraries\Storage\Parameters\FilterParameters $filterParameters
     * @param \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperties $searchProperties
     * @param \Chamilo\Libraries\Storage\Query\Condition\Condition $contextCondition
     *
     * @return Condition
     */
    protected function translateSearchParametersToCondition(
        FilterParameters $filterParameters, DataClassProperties $searchProperties, Condition $contextCondition = null
    )
    {
        $conditions = [$contextCondition];

        $conditions[] = $this->translateSearchStringToCondition(
            $searchProperties, $filterParameters->getGlobalSearchQuery()
        );

        foreach ($filterParameters->getDataClassSearchQueries() as $dataClassSearchQuery)
        {
            $conditions[] = $this->translateSearchStringToCondition(
                new DataClassProperties(
                    [$dataClassSearchQuery->getConditionVariable()], $dataClassSearchQuery->getSearchQuery()
                )
            );
        }

        return new AndCondition($conditions);
    }

    /**
     * @param \Chamilo\Libraries\Storage\DataClass\Property\DataClassProperties $searchProperties
     * @param string|null $searchString
     *
     * @return \Chamilo\Libraries\Storage\Query\Condition\AndCondition
     */
    protected function translateSearchStringToCondition(
        DataClassProperties $searchProperties, string $searchString = null
    )
    {
        $searchParts = $this->splitSearchString($searchString);

        $conditions = array();

        foreach ($searchParts as $searchPart)
        {
            $searchPartPattern = '*' . $searchPart . '*';
            $searchPartConditions = array();

            foreach ($searchProperties->get() as $searchProp)
            {
                $searchPartConditions[] = new PatternMatchCondition($searchProp, $searchPartPattern);
            }

            $conditions[] = new OrCondition($searchPartConditions);
        }

        return new AndCondition($conditions);
    }

    /**
     * @param string $searchString
     *
     * @return string[]
     */
    public function splitSearchString(string $searchString = null)
    {
        if(empty($searchString))
        {
            return [];
        }

        $matches = array();
        preg_match_all('/(?:"([^"]+)"|""|(\S+))/', $searchString, $matches);
        $parts = array();

        for ($i = 1; $i <= 2; $i ++)
        {
            foreach ($matches[$i] as $m)
            {
                if (!is_null($m) && strlen($m) > 0)
                {
                    $parts[] = $m;
                }
            }
        }

        return (count($parts) ? $parts : []);
    }
}