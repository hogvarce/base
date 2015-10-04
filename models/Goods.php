<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "goods".
 *
 * @property string $id
 * @property string $contentType
 * @property string $pagetitle
 * @property string $longtitle
 * @property string $description
 * @property string $alias
 * @property integer $published
 * @property integer $pub_date
 * @property integer $unpub_date
 * @property integer $parent
 * @property integer $isfolder
 * @property string $introtext
 * @property string $content
 * @property integer $template
 * @property integer $menuindex
 * @property integer $searchable
 * @property integer $cacheable
 * @property integer $createdby
 * @property integer $createdon
 * @property integer $editedby
 * @property integer $editedon
 * @property integer $deleted
 * @property integer $deletedon
 * @property integer $deletedby
 * @property integer $publishedon
 * @property integer $publishedby
 * @property string $menutitle
 * @property integer $donthit
 * @property integer $privateweb
 * @property integer $privatemgr
 * @property integer $content_dispo
 * @property integer $hidemenu
 * @property string $class_key
 * @property string $context_key
 * @property string $content_type
 * @property string $uri
 * @property integer $uri_override
 * @property integer $hide_children_in_tree
 * @property integer $show_in_tree
 * @property string $properties
 */
class Goods extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'goods';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['published', 'pub_date', 'unpub_date', 'parent', 'isfolder', 'template', 'menuindex', 'searchable', 'cacheable', 'createdby', 'createdon', 'editedby', 'editedon', 'deleted', 'deletedon', 'deletedby', 'publishedon', 'publishedby', 'donthit', 'privateweb', 'privatemgr', 'content_dispo', 'hidemenu', 'content_type', 'uri_override', 'hide_children_in_tree', 'show_in_tree'], 'integer'],
            [['introtext', 'content', 'uri', 'properties'], 'string'],
            [['contentType'], 'string', 'max' => 50],
            [['pagetitle', 'longtitle', 'description', 'alias', 'menutitle'], 'string', 'max' => 255],
            [['class_key', 'context_key'], 'string', 'max' => 100]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'contentType' => 'Content Type',
            'pagetitle' => 'Pagetitle',
            'longtitle' => 'Longtitle',
            'description' => 'Description',
            'alias' => 'Alias',
            'published' => 'Published',
            'pub_date' => 'Pub Date',
            'unpub_date' => 'Unpub Date',
            'parent' => 'Parent',
            'isfolder' => 'Isfolder',
            'introtext' => 'Introtext',
            'content' => 'Content',
            'template' => 'Template',
            'menuindex' => 'Menuindex',
            'searchable' => 'Searchable',
            'cacheable' => 'Cacheable',
            'createdby' => 'Createdby',
            'createdon' => 'Createdon',
            'editedby' => 'Editedby',
            'editedon' => 'Editedon',
            'deleted' => 'Deleted',
            'deletedon' => 'Deletedon',
            'deletedby' => 'Deletedby',
            'publishedon' => 'Publishedon',
            'publishedby' => 'Publishedby',
            'menutitle' => 'Menutitle',
            'donthit' => 'Donthit',
            'privateweb' => 'Privateweb',
            'privatemgr' => 'Privatemgr',
            'content_dispo' => 'Content Dispo',
            'hidemenu' => 'Hidemenu',
            'class_key' => 'Class Key',
            'context_key' => 'Context Key',
            'content_type' => 'Content Type',
            'uri' => 'Uri',
            'uri_override' => 'Uri Override',
            'hide_children_in_tree' => 'Hide Children In Tree',
            'show_in_tree' => 'Show In Tree',
            'properties' => 'Properties',
        ];
    }
}
