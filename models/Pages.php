<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "pages".
 *
 * @property integer $id_page
 * @property string $keyword_page
 * @property string $desc_page
 * @property string $content_page
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
            [['keyword_page', 'desc_page', 'content_page'], 'required'],
            [['keyword_page', 'desc_page', 'content_page'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_page' => 'Id Page',
            'keyword_page' => 'Keyword Page',
            'desc_page' => 'Desc Page',
            'content_page' => 'Content Page',
        ];
    }
}
