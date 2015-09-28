<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Pages */
    if(Yii::$app->request->url != Yii::$app->homeUrl){
    //    $this->params['breadcrumbs'][] = ['label' => 'Pages', 'url' => ['index']];
        $this->params['breadcrumbs'][] = $this->title;
    }
?>
<div class="pages-view">

    <h1><?= Html::encode($model->title) ?></h1>
    <p><?= $model->content_page ?></p>

    <?php if ( $model->goods_on_page ): ?>
        <div class="goods"></div>
    <?php endif ?>    

</div>
