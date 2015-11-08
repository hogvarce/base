<?php
    use yii\helpers\Html;
    use yii\bootstrap\ActiveForm;
?>
<div class="order-view">
    <h1>Персональные данные заказчика</h1>

    <div class="col-xs-12 col-md-6">

        <?php $form = ActiveForm::begin([
            'id' => 'order-form',
            'action' => '',
            'options' => ['class' => 'form-horizontal'],
            'fieldConfig' => [
                'template' => "{label}\n<div class=\"col-lg-12\">{input}</div>\n<div class=\"col-lg-12\">{error}</div>",
                'labelOptions' => ['class' => 'col-lg-1 control-label'],
            ],
        ]); ?>
            <?= $form->field($model, 'customer_name')->input([]) ?>
            <?= $form->field($model, 'customer_phone')->input('tel', ['required' => true]) ?>
            <?= $form->field($model, 'customer_email')->input('email', ['required' => true]) ?>
            <?= $form->field($model, 'order_address')->input([]) ?>
            <?= $form->field($model, 'comments')->textArea(['rows' => 6]) ?>
            <div class="form-submit">
                <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary pull-right send-order']) ?>
            </div>
            <?= $form->field($model, 'payment_type')->radioList(['0' => 'Наличными', '1' => 'Картой']) ?>
    <?php $form = ActiveForm::end(); ?>

    </div>
    <div class="col-xs-12 col-md-6">
        <h3>Список заказа:</h3>
        <ol class="order-list">
        </ol>
    </div>
</div>

<script type="text/template" id="order-list-template">
    <% var sum = 0; %>
    <% _.each(basket, function(item, e){ %>
    <%
        goodSum = Math.round((item.count * item.price)*100)/100;
        sum += Math.round((goodSum)*100)/100;
    %>
        <li><%= item.pagetitle %> - <%= item.count %> шт.</li>
    <% }); %>
    <%
        sumDiscount = ( <?= $delivery[0]->sum_delivery ?> > sum ) ? <?= $delivery[0]->cost_delivery ?> : 0;
        sum += sumDiscount;
     %>
    <p><strong>Доставка: <%= (sumDiscount > 0) ? sumDiscount  : "бесплатно" %> <%= (sumDiscount > 0) ? declOfNum(Math.round(sumDiscount), ["рубль", "рубля", "рублей"]) : '' %></strong></p>
    <h4>Итого: <%= sum %> <%=  declOfNum(Math.round(sum), ["рубль", "рубля", "рублей"]) %></h4>
</script>
