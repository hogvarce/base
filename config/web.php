<?php

$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'defaultRoute' => 'pages',
    'layout' => 'pages',
    'modules' => [
        'admin' => [
            'class' => 'app\modules\admin\AdminModule',
        ],
        'api' => [
            'class' => 'app\modules\api\ApiModule',
        ],
    ],
    'components' => [
        'urlManager' => [
          'class' => 'yii\web\UrlManager',
          // Disable index.php
          'showScriptName' => false,
          // Disable r= routes
          'enablePrettyUrl' => true,
          'rules' => [
                  ['class' => 'yii\rest\UrlRule', 'controller' => 'modules/api'],
                  '<controller:\w+>/<id:\d+>' => '<controller>/view',
                  '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                  '<module:\w+>/<controller:\w+>/<action:\w+>' => '<module>/<controller>/<action>',
                  '<module:\w+>/<controller:\w+>/<view:\w+>/<id:\d+>' => '<module>/<controller>/view',
                  '<module:\w+>/<controller:\w+>/<action:\w+>/<id:\d+>' => '<module>/<controller>/<action>',
                  '<controller:\w+>/<action:\w+>/<slug:\w+>' => '<controller>/<action>',
                  '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
          ],
        ],
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => '1JDvFyvW2Iww5fUA0W9DdeamWE48eqD3',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    // $config['bootstrap'][] = 'debug';
    // $config['modules']['debug'] = [
    //     'class' => 'yii\debug\Module',
    // ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
    ];
}

return $config;
