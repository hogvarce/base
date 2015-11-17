<?php
    use yii\helpers\Html;

    echo Html::script( "localStorage.setItem('basket', '');" );
?>

<div class="pages-view">
    <h1>Заказ не может быть сделан</h1>
    <p>По каким-то причинам заказ в настоящее время не может быть отправлен.<br>
    Свяжитесь с нами по указанным на сайте телефонам.</p>
</div>
