<?php

namespace app\modules\api\controllers;

use yii\web\Controller;
use yii\rest\ActiveController;

class PagesController extends ActiveController
{
    public $modelClass = 'app\models\Pages';
    public function actionIndex()
    {
        return Pages::find();
    }
    public function actionView($id)
    {
        return Pages::findOne([
          'id_page' => $id,
      ]);
    }
}
