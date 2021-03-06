<?php
namespace Chamilo\Core\Repository\Common\Export\Html;

use Chamilo\Core\Repository\Common\Export\ContentObjectExport;
use Chamilo\Core\Repository\Common\Export\ContentObjectExportController;
use Chamilo\Core\Repository\Common\Export\ContentObjectExportImplementation;
use Chamilo\Core\Repository\Common\Export\ExportParameters;
use Chamilo\Core\Repository\Storage\DataClass\ContentObject;
use Chamilo\Core\Repository\Storage\DataManager;
use Chamilo\Libraries\File\Filesystem;
use Chamilo\Libraries\File\Path;
use Chamilo\Libraries\Platform\Session\Session;
use Chamilo\Libraries\Storage\Parameters\DataClassRetrievesParameters;
use Chamilo\Libraries\Storage\Query\Condition\InCondition;
use Chamilo\Libraries\Storage\Query\Variable\PropertyConditionVariable;

/**
 * Controller for the HTML Export of a Content Object.
 * 
 * @author Maarten Volckaert - Hogeschool Gent
 */
class HtmlContentObjectExportController extends ContentObjectExportController
{

    /**
     * Temporary diretory in which the export file is located.
     * 
     * @var string
     */
    private $temporary_directory;

    public function __construct(ExportParameters $parameters)
    {
        parent::__construct($parameters);
        $this->prepare_file_system();
    }

    /**
     * Launches the renderation of the HTML file and returns it to the file variable.
     * 
     * @param $content_object ContentObject
     */
    public function process($content_object)
    {
        $export_types = ContentObjectExportImplementation::get_types_for_object($content_object->package());
        
        if (in_array(ContentObjectExport::FORMAT_HTML, $export_types))
        {
            ContentObjectExportImplementation::launch(
                $this, 
                $content_object, 
                ContentObjectExport::FORMAT_HTML, 
                $this->get_parameters()->get_type());
        }
    }

    /**
     * Main function of this class, retrieves the content object by condition and returns a HTML file.
     * 
     * @return HTML file
     */
    public function run()
    {
        $content_object_ids = $this->get_parameters()->get_content_object_ids();
        
        if (count($content_object_ids) > 0)
        {
            $condition = new InCondition(
                new PropertyConditionVariable(ContentObject::class_name(), ContentObject::PROPERTY_ID), 
                $content_object_ids, 
                ContentObject::get_table_name());
        }
        else
        {
            $condition = null;
        }
        $parameters = new DataClassRetrievesParameters($condition);
        $content_objects = DataManager::retrieve_active_content_objects(ContentObject::class_name(), $parameters);
        while ($content_object = $content_objects->next_result())
        {
            $this->process($content_object);
        }
        
        return $this->get_file_path();
    }

    /**
     * Make a temporary directory based on the user id in which the file will be saved.
     */
    public function prepare_file_system()
    {
        $user_id = Session::get_user_id();
        
        $this->temporary_directory = Path::getInstance()->getTemporaryPath() . $user_id . '/export_content_objects/';
        if (! is_dir($this->temporary_directory))
        {
            mkdir($this->temporary_directory, 0777, true);
        }
    }

    /**
     * Gets the full path to the file.
     * 
     * @return string
     */
    public function get_file_path()
    {
        return $this->temporary_directory . 'content_object.html';
    }

    /**
     *
     * @param $source string
     * @param $destination string
     */
    public function add_files($source, $destination)
    {
        Filesystem::recurse_copy($source, $this->temporary_directory . $destination, true);
    }

    /**
     * Gets the temporary directory path.
     * 
     * @return string
     */
    public function get_temporary_directory()
    {
        return $this->temporary_directory;
    }

    /**
     * Gets the filename of the exported object.
     * 
     * @return string
     */
    public function get_filename()
    {
        return 'content_object.html';
    }
}
