<?php

namespace Chamilo\Core\Repository\ContentObject\ExternalCalendar\Form;

use Chamilo\Core\Repository\ContentObject\ExternalCalendar\Storage\DataClass\ExternalCalendar;
use Chamilo\Core\Repository\Form\ContentObjectForm;
use Chamilo\Core\Repository\Quota\Calculator;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\File\Properties\FileProperties;
use Chamilo\Libraries\Format\Utilities\ResourceManager;
use Chamilo\Libraries\Translation\Translation;
use Chamilo\Libraries\Utilities\StringUtilities;
use Chamilo\Libraries\Utilities\Utilities;
use function strpos;

/**
 *
 * @package repository.lib.content_object.external_calendar
 */
class ExternalCalendarForm extends ContentObjectForm
{

    protected function build_creation_form()
    {
        parent::build_creation_form();
        $this->build_extra_form();
    }

    protected function build_editing_form()
    {
        parent::build_editing_form();
        $this->build_extra_form();
    }

    public function build_extra_form()
    {
        $this->addElement('category', Translation::get('Properties'));
        $this->addElement(
            'radio',
            ExternalCalendar::PROPERTY_PATH_TYPE,
            '',
            Translation::get('PathTypeRemote'),
            ExternalCalendar::PATH_TYPE_REMOTE
        );

        $path_type_remote_id = ExternalCalendar::PROPERTY_PATH_TYPE . '_' . ExternalCalendar::PATH_TYPE_REMOTE;

        $this->addElement(
            'html',
            '<div style="padding-left:28px;" id="' . $path_type_remote_id . '" class="' .
            ExternalCalendar::PROPERTY_PATH_TYPE . '">'
        );

        $this->add_textfield(
            ExternalCalendar::PROPERTY_PATH . '[' . ExternalCalendar::PATH_TYPE_REMOTE . ']',
            null,
            false,
            array('size' => '100')
        );

        $this->addRule(
            ExternalCalendar::PROPERTY_PATH . '[' . ExternalCalendar::PATH_TYPE_REMOTE . ']',
            Translation::get('SameHostNotAllowed'), 'callback', array($this, 'checkRemoteUrl')
        );

        $this->addElement('html', '</div>');

        $this->addElement(
            'radio',
            ExternalCalendar::PROPERTY_PATH_TYPE,
            '',
            Translation::get('PathTypeLocal'),
            ExternalCalendar::PATH_TYPE_LOCAL
        );

        $path_type_local_id = ExternalCalendar::PROPERTY_PATH_TYPE . '_' . ExternalCalendar::PATH_TYPE_LOCAL;

        $this->addElement(
            'html',
            '<div style="padding-left:28px;" id="' . $path_type_local_id . '" class="' .
            ExternalCalendar::PROPERTY_PATH_TYPE . '">'
        );

        $calculator = new Calculator(
            \Chamilo\Core\User\Storage\DataManager::retrieve_by_id(
                \Chamilo\Core\User\Storage\DataClass\User::class_name(),
                (int) $this->get_owner_id()
            )
        );

        $calculator->addUploadWarningToForm($this);

        $this->addElement('file', ExternalCalendar::PROPERTY_PATH . '[' . ExternalCalendar::PATH_TYPE_LOCAL . ']');
        $this->addRule(
            ExternalCalendar::PROPERTY_PATH . '[' . ExternalCalendar::PATH_TYPE_LOCAL . ']',
            Translation::get('DiskQuotaExceeded', null, Utilities::COMMON_LIBRARIES),
            'disk_quota'
        );

        // $this->addFormRule(array($this, 'check_document_form'));

        $this->addElement('html', '</div>');
        $this->addElement('category');
        $this->addElement(
            'html',
            ResourceManager::getInstance()->get_resource_html(
                Path::getInstance()->getJavascriptPath('Chamilo\Core\Repository\ContentObject\ExternalCalendar', true) .
                'ExternalCalendar.js'
            )
        );
    }

    /**
     * @param string $remoteUrl
     *
     * @return bool
     */
    public function checkRemoteUrl(string $remoteUrl)
    {
        $basePath = Path::getInstance()->getBasePath(true);
        $basePathParts = explode('//', $basePath);
        $pathWithoutScheme = $basePathParts[1];
        if(substr($pathWithoutScheme, -1, 1) == '/')
        {
            $pathWithoutScheme = substr($pathWithoutScheme, 0, -1);
        }

        return strpos($remoteUrl, $pathWithoutScheme) == false;
    }

    public function setDefaults($defaults = array())
    {
        $content_object = $this->get_content_object();

        if ($content_object instanceof ExternalCalendar)
        {
            if ($content_object->get_path_type() == ExternalCalendar::PATH_TYPE_LOCAL)
            {
                $defaults[ExternalCalendar::PROPERTY_PATH_TYPE] = ExternalCalendar::PATH_TYPE_LOCAL;
            }
            else
            {
                $defaults[ExternalCalendar::PROPERTY_PATH_TYPE] = ExternalCalendar::PATH_TYPE_REMOTE;

                if (StringUtilities::getInstance()->hasValue($content_object->get_path()))
                {
                    $defaults[ExternalCalendar::PROPERTY_PATH][ExternalCalendar::PATH_TYPE_REMOTE] =
                        $content_object->get_path();
                }
                else
                {
                    $defaults[ExternalCalendar::PROPERTY_PATH][ExternalCalendar::PATH_TYPE_REMOTE] = 'http://';
                }
            }
        }
        else
        {
            $defaults[ExternalCalendar::PROPERTY_PATH_TYPE] = ExternalCalendar::PATH_TYPE_REMOTE;
            $defaults[ExternalCalendar::PROPERTY_PATH][ExternalCalendar::PATH_TYPE_REMOTE] = 'http://';
        }

        parent::setDefaults($defaults);
    }

    public function create_content_object()
    {
        $object = new ExternalCalendar();
        $this->set_content_object_properties($object);
        $this->set_content_object($object);

        return parent::create_content_object();
    }

    public function update_content_object()
    {
        $object = $this->get_content_object();
        $this->set_content_object_properties($object);

        return parent::update_content_object();
    }

    public function set_content_object_properties($object)
    {
        $values = $this->exportValues();

        $path_type = $values[ExternalCalendar::PROPERTY_PATH_TYPE];
        $object->set_path_type($path_type);

        if ($path_type == ExternalCalendar::PATH_TYPE_REMOTE)
        {
            $url = $values[ExternalCalendar::PROPERTY_PATH][ExternalCalendar::PATH_TYPE_REMOTE];
            $file_properties = FileProperties::from_url($url);

            $object->set_path($url);
            $object->set_filename($file_properties->get_name_extension());
            $object->set_filesize($file_properties->get_size());
            $object->set_hash(md5($url));
        }
        else
        {
            $file = $_FILES[ExternalCalendar::PROPERTY_PATH];

            if (StringUtilities::getInstance()->hasValue($file['name'][ExternalCalendar::PATH_TYPE_LOCAL]))
            {
                $object->set_filename($file['name'][ExternalCalendar::PATH_TYPE_LOCAL]);
                $object->set_temporary_file_path($file['tmp_name'][ExternalCalendar::PATH_TYPE_LOCAL]);
            }

            if ((isset($values['version']) && $values['version'] == 0) || !isset($values['version']))
            {
                $object->set_save_as_new_version(false);
            }
            else
            {
                $object->set_save_as_new_version(true);
            }
        }
    }
}
