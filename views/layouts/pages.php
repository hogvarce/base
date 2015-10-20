<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use app\models\Pages;
use yii\helpers\Url;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>

<?php $this->beginBody() ?>
    <div class="wrap">
        <header>
            <div class="container">

            </div>
        </header>
        <div class="container box-layout">
            <div class="top-block">
                <div class="logo col-md-5 col-lg-5 col-sm-5">
                    <a href="/">
                        <img src="/img/logo.png" alt="Логотип Пластиковый Дом" />
                    </a>
                </div>
                <div class="col-md-7 col-lg-7 col-sm-7">
                        <div class="pull-right basket">
                            <span>Корзина: </span><span class="cart_num"><a href="/basket">0</a></span>
                        </div>
                        <div class="pull-right phone">
                            <span>Телефон: </span><span class="phone-number">8(812) 985 76 78</span>
                        </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="row navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-sx-12">
                            <nav class="navbar" role="navigation">
                                <?= Nav::widget([
                                        'options' => ['class' => 'navbar-nav navbar-left collapse navbar-collapse', 'id' => 'TopMenu'],
                                        'items'   =>  Pages::getItems(),
                                    ]);  ?>
                                </div>
                            </nav>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#TopMenu">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                         </button>
                    </div>
                </div>
            </div>
            <div class="content">
                <?= $content ?>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="pull-left">&copy; Мой сайт <?= date('Y') ?></p>
            <p class="pull-right">Сделано мой</p>
        </div>
    </footer>

    <script type="text/template" id="Good">
        <div class="insideBlock" itemscope itemtype="http://schema.org/Product">
            <p itemprop="name" class="good-name"><%= pagetitle %></p>
            <img itemprop="image" class="good-preview" src="/<%=image%>" title='<%=pagetitle%>' alt='<%=pagetitle%>'>
            <div class="description" itemprop="description"><%= content %></div>
            <p itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="price"><meta itemprop="priceCurrency" content="RUB" /><strong itemprop="price"><%= price %></strong> руб.</p>
            <a data-toggle="tooltip" data-placement="top" title="" name="addtocart" href="#" class="addtocart-button btn btn-primary buy" data-original-title="В корзину"><span><span>В корзину</span></span></a>
            <input type="number" value="<%= count %>" step="<%= count %>" min="<%= count %>" max="99" />
        </div>
    </script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
