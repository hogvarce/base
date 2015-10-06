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
            [['title', 'keyword_page', 'desc_page', 'content_page', 'slug'], 'string'],
            [['goods_on_page'], 'boolean'],
            [['order_page'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_page' => 'Id Страницы',
            'title' => 'Заголовок',
            'keyword_page' => 'Ключевые слова',
            'desc_page' => 'Описание',
            'content_page' => 'Основное содержимое',
            'slug' => 'Ссылка',
            'goods_on_page' => 'Наличие товаров на странице',
            'order_page' => 'Порядок вывода в меню',
        ];
    }
    public static function getItems()
    {
        $items = [];
        $models = parent::find()->orderBy("order_page")->all();
        foreach($models as $model) {
            $items[] = ['label' => $model->title, 'url' => ($model->slug == '/') ? $model->slug : '/pages/'.$model->slug];
        }
        return $items;
    }
}
