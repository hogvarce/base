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
        'css/site.css',
        'css/styles.css',
        'css/animate.css',
    ];
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js',
        'js/product/wow.min.js',
        'js/product/purl.js',
        'js/product/global.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
