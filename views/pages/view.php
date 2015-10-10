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
    <div class="col-xs-2">
        <?php
            $categoryGoods = \app\models\GoodsCategory::find()->all();
            echo '<ul class="list-unstyled">';
            echo '<li><a href="javascript:addParamUrl(\'category\', 0);">Все товары</a></li>';
            foreach ($categoryGoods as $category) {
                echo '<li><a href="javascript:addParamUrl(\'category\', '.$category->id.');">'.$category->title_category.'</a></li>';
            }
            echo '</ul>';
        ?>
    </div>
    <div class="col-xs-10">
        <div class="goods"></div>
    </div>
    <?php endif ?>

</div>
