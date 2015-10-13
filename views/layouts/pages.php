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
            <div class="row navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-sx-12">
                        <?php
                            $menuItems = Pages::getItems();
                            //   if (!Yii::$app->user->isGuest)
                            //     $menuItems[] = [
                            //         'label' => 'AdminPanel',
                            //         'url' => ['admin/default/index'],
                            //     ];
                            //   else
                            //     $menuItems[] = [
                            //       'label' => 'Login', 'url' => ['/admin']
                            //     ];
                            // NavBar::begin([
                            //     // 'brandLabel' => 'My Company',
                            //     'brandUrl' => Yii::$app->homeUrl,
                            //     'options' => [
                            //         'class' => 'navbar navbar-top',
                            //     ],
                            // ]);
                            echo Nav::widget([
                                'options' => ['class' => 'navbar-nav navbar-left'],
                                'items'   =>   $menuItems,
                            ]);
                            // NavBar::end();
                        ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <!-- <?= Breadcrumbs::widget([
                    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                ]) ?> -->
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
            <p itemprop="name"><%= pagetitle %></p>
            <img itemprop="image" src="/<%=image%>" alt="<%=pagetitle%>">
            <div class="description" itemprop="description"><%= content %></div>
            <p itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="price"><meta itemprop="priceCurrency" content="RUB" /><strong itemprop="price"><%= price %></strong> руб.</p>
            <button  class="buy">Купить</button><input type="number" value="<%= count %>" step="<%= count %>" min="<%= count %>" max="99" />
        </div>
    </script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
