<?php

namespace app\modules\api\controllers;

use yii\web\Controller;
use yii\rest\ActiveController;

class GoodsController extends ActiveController
{
    public $modelClass = 'app\models\Goods';
}
