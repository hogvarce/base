<?php

namespace app\models;

use Yii;
use yii\web\UploadedFile;
/**
 * This is the model class for table "goods".
 *
 * @property string $id
 * @property string $articale
 * @property string $pagetitle
 * @property string $longtitle
 * @property string $description
 * @property integer $published
 * @property integer $parent
 * @property string $introtext
 * @property string $content
 * @property double $price
 * @property string $image
 * @property string $color
 * @property integer $count_in_pack
 *
 * @property Goods $parent0
 * @property Goods[] $goods
 * @property GoodsCategory $goodsCategory
 */
class Goods extends \yii\db\ActiveRecord
{
    /**
     * @var UploadedFile
     */
    public $imageFile;
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
            [['articale', 'pagetitle', 'parent', 'price'], 'required'],
            [['published', 'parent', 'count_in_pack'], 'integer'],
            [['introtext', 'content', 'color'], 'string'],
            [['price'], 'number'],
            [['articale', 'pagetitle', 'longtitle', 'description', 'image'], 'string', 'max' => 255],
            [['imageFile'], 'file', 'extensions' => 'png, jpg'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'articale' => 'Articale',
            'pagetitle' => 'Pagetitle',
            'longtitle' => 'Longtitle',
            'description' => 'Description',
            'published' => 'Published',
            'parent' => 'Parent',
            'introtext' => 'Introtext',
            'content' => 'Content',
            'price' => 'Price',
            'image' => 'Image',
            'color' => 'Color',
            'count_in_pack' => 'Count In Pack',
        ];
    }

    // public function upload()
    // {
    //     if ($this->validate()) {
    //         $this->image = 'upload/goods-images/' . $this->imageFile->baseName . '.' . $this->imageFile->extension;
    //         $this->imageFile->saveAs($this->image);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getParent0()
    {
        return $this->hasOne(Goods::className(), ['parent' => 'parent']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGoods()
    {
        return $this->hasMany(Goods::className(), ['parent' => 'parent']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGoodsCategory()
    {
        return $this->hasOne(GoodsCategory::className(), ['id' => 'parent']);
    }
}
