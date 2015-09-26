<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "pages".
 *
 * @property integer $id_page
 * @property string $title
 * @property string $keyword_page
 * @property string $desc_page
 * @property string $content_page
 * @property string $slug
 */
class Pages extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'pages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'slug'], 'required'],
            [['title', 'keyword_page', 'desc_page', 'content_page', 'slug'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_page' => 'Id Page',
            'title' => 'Title',
            'keyword_page' => 'Keyword Page',
            'desc_page' => 'Desc Page',
            'content_page' => 'Content Page',
            'slug' => 'Slug',
        ];
    }
    public static function getItems()
    {
        $items = [];
        $models = parent::find()->all();
        foreach($models as $model) {
            $items[] = ['label' => $model->title, 'url' => ($model->slug == '/') ? $model->slug : '/pages/index/'.$model->slug];
        }
        return $items;
    }
}
