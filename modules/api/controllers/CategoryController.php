<?php

namespace app\modules\api\controllers;

use app\models\GoodsCategory;
use yii\rest\ActiveController;

class CategoryController extends ActiveController
{
    public $modelClass = 'app\models\GoodsCategory';
}
