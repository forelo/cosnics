<?php
namespace Chamilo\Libraries\Format\Structure\Glyph;

/**
 *
 * @package Chamilo\Libraries\Format\Structure\Glyph
 * @author Hans De Bisschop <hans.de.bisschop@ehb.be>
 * @author Magali Gillard <magali.gillard@ehb.be>
 * @author Eduard Vossen <eduard.vossen@ehb.be>
 */
class FontAwesomeGlyph extends InlineGlyph
{

    /**
     *
     * @see \Chamilo\Libraries\Format\Structure\Glyph\InlineGlyph::getBaseClassNames()
     */
    public function getBaseClassNames()
    {
        $baseClassNames = parent::getBaseClassNames();

        $baseClassNames[] = 'fa';
        $baseClassNames[] = 'fa-' . $this->getType();

        return $baseClassNames;
    }
}