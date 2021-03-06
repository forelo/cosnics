<?php
namespace Chamilo\Core\Repository\ContentObject\Introduction\Form;

use Chamilo\Core\Repository\ContentObject\Introduction\Storage\DataClass\Introduction;
use Chamilo\Core\Repository\Form\ContentObjectForm;

/**
 *
 * @package repository.lib.content_object.introduction
 */
/**
 * A form to create/update an introduction
 */
class IntroductionForm extends ContentObjectForm
{

    // Inherited
    public function create_content_object()
    {
        $object = new Introduction();
        $this->set_content_object($object);
        return parent::create_content_object();
    }
}
