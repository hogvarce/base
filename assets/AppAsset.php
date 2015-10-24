<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css',
        'css/camera.css',
        'css/site.css',
        'css/styles.css',
        'css/animate.css',
    ];
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack.js',
        'js/product/jquery.easing.1.3.js',
        'js/product/bootstrap.min.js',
        'js/product/masonry.js',
        'js/product/cookie.js',
        'js/product/wow.min.js',
        'js/product/camera.min.js',
        'js/product/purl.js',
        'js/product/tm-stick-up.js',
        'js/product/global.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
