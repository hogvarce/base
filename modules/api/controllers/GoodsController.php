<?php

namespace app\modules\api\controllers;

use app\models\Goods;
use yii\rest\ActiveController;
use yii\data\ActiveDataProvider;

class GoodsController extends ActiveController
{
    public $modelClass = 'app\models\Goods';
    public function actions()
    {
        $actions = parent::actions();
        unset($actions['index']);

        return $actions;
    }
    public function actionIndex($filter = null, $sort = 'id', $sortMethod = SORT_ASC)
    {
        $query = Goods::find();
        if ( $filter ) {
            $filter = json_decode($filter, true);
            $query  = $query->andWhere($filter);
        }
        return new ActiveDataProvider([
            'pagination' => [
                'pageSize' => 20,
            ],
            'query' => $query,
            'sort' => ['defaultOrder' => [$sort => $sortMethod]],
        ]);
    }
}
