<?php
/* @var $this yii\web\View */
  use yii\helpers\Url;
  use yii\helpers\Html;
?>
<h1>pages/index</h1>

<p>
    <?=Html::a('slug', Url::toRoute(['page', 'slug' => 'first']))?>
  
</p>
