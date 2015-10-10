<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\GoodSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Goods';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="goods-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Goods', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'articale',
            'pagetitle',
            'longtitle',
            'description',
            // 'published',
            // 'parent',
            // 'introtext:ntext',
            // 'content:ntext',
            // 'price',
            // 'image',
            // 'color:ntext',
            // 'count_in_pack',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>

</div>
