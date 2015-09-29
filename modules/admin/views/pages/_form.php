<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use vova07\imperavi\Widget;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $model app\models\Pages */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="pages-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->input([]) ?>

    <?= $form->field($model, 'slug')->input([]) ?>

    <?= $form->field($model, 'keyword_page')->input([]) ?>

    <?= $form->field($model, 'desc_page')->input([]) ?>

    <?= $form->field($model, 'content_page')->widget(Widget::className(), [
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
        ]);
       ?>
    <?= $form->field($model, 'goods_on_page')->checkbox([]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
