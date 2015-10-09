<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "goods_category".
 *
 * @property integer $id
 * @property string $title_category
 */
class GoodsCategory extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'goods_category';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title_category'], 'required'],
            [['title_category'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title_category' => 'Категория',
        ];
    }
}
