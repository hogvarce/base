<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;
use yii\helpers\Url;
use vova07\imperavi\Widget;
/* @var $this yii\web\View */
/* @var $model app\models\Goods */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="goods-form">

    <?php $form = ActiveForm::begin([
                'options' => ['enctype'=>'multipart/form-data']
        ]); ?>

    <?= $form->field($model, 'articale')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pagetitle')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'longtitle')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'published')->textInput() ?>

    <?= $form->field($model, 'parent')->textInput() ?>

    <?= $form->field($model, 'introtext')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'content')->widget(Widget::className(), [
            'settings' => [
                'lang' => 'ru',
                'minHeight' => 200,
                'plugins' => [
                    'clips',
                    'fullscreen',
                    'imagemanager'
                ],
                'imageManagerJson' => Url::to(['/admin/pages/images-get']),
                'imageUpload' => Url::to(['/admin/pages/image-upload']),
            ]
        ]); ?>

    <?= $form->field($model, 'price')->textInput() ?>

    <?=$form->field($model, 'imageFile')->widget(FileInput::classname(), [
                    'options' => ['multiple' => true, 'accept' => 'upload/*'],
                    'pluginOptions' => [
                        'previewFileType' => 'image',
                        'showUpload' => false
                    ],
                ]);
    ?>

    <?= $form->field($model, 'color')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'count_in_pack')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
