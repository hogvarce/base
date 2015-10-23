<?php
    use yii\helpers\Html;
    use yii\bootstrap\ActiveForm;
?>
<div class="order-view">
    <h1>Персональные данные заказчика</h1>
    <?php $form = ActiveForm::begin([
        'id' => 'order-form',
        'action' => '',
        'options' => ['class' => 'form-horizontal'],
        'fieldConfig' => [
            'template' => "{label}\n<div class=\"col-lg-3\">{input}</div>\n<div class=\"col-lg-8\">{error}</div>",
            'labelOptions' => ['class' => 'col-lg-1 control-label'],
        ],
    ]); ?>
    <?= $form->field($model, 'customer_name')->input([]) ?>
    <?= $form->field($model, 'customer_phone')->input([]) ?>
    <?= $form->field($model, 'customer_email')->input([]) ?>
    <?= $form->field($model, 'order_address')->input([]) ?>
    <?= $form->field($model, 'comments')->textArea(['rows' => 6]) ?>
    <div class="form-group">
        <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary pull-right']) ?>
    </div>
    <?php $form = ActiveForm::end(); ?>
</div>
