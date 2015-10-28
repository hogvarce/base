<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $model app\models\Pages */
    if(Yii::$app->request->url != Yii::$app->homeUrl){
    //    $this->params['breadcrumbs'][] = ['label' => 'Pages', 'url' => ['index']];
        $this->params['breadcrumbs'][] = $this->title;
    }
?>

<?php if(  Url::current() === '/' ): ?>

        <?= $this->render('_slider'); ?>

        <h3>Новинки</h3>

        <div class="newGoods carousel slide" data-ride="carousel">

        </div>

<?php endif; ?>


<div class="pages-view">

    <h1 class="wow animate bounceInLeft"><?= Html::encode($model->title) ?></h1>
    <div class="wow animate fadeInUp"><?= $model->content_page ?></div>

    <?php if ( $model->goods_on_page ): ?>
    <div class="blockGoods">
        <div class="col-xs-12 col-sm-4">
            <div class="category"></div>
            <!-- <?php
                $categoryGoods = \app\models\GoodsCategory::find()->all();
                $activeCategory = Yii::$app->getRequest()->getQueryParam('category');
                echo '<ul class="side-menu list-unstyled">';
                echo '<li class="all"><a href="javascript:addParamUrl(\'category\', 0);">Все товары</a></li>';
                foreach ($categoryGoods as $category) {
                    if( $activeCategory == $category->id ) $active = " class='active'";
                    else  $active = '';
                    echo '<li'. $active .'><a href="javascript:addParamUrl(\'category\', '.$category->id.');">'.$category->title_category.'</a></li>';
                }
                echo '</ul>';
            ?> -->
        </div>
        <div class="col-xs-12 col-sm-8">
            <div class="goods"></div>
        </div>
    </div>
    <?php endif ?>

</div>
