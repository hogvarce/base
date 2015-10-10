<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\GoodSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="goods-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'articale') ?>

    <?= $form->field($model, 'pagetitle') ?>

    <?= $form->field($model, 'longtitle') ?>

    <?= $form->field($model, 'description') ?>

    <?php // echo $form->field($model, 'published') ?>

    <?php // echo $form->field($model, 'parent') ?>

    <?php // echo $form->field($model, 'introtext') ?>

    <?php // echo $form->field($model, 'content') ?>

    <?php // echo $form->field($model, 'price') ?>

    <?php // echo $form->field($model, 'image') ?>

    <?php // echo $form->field($model, 'color') ?>

    <?php // echo $form->field($model, 'count_in_pack') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
