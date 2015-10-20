<?php
  return  [
    '<module:(admin)>/<controller:\w+>/<action:\w+>' => '<module>/<controller>/<action>',
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/goods',
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/pages',
    ],
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => 'api/category',
    ],
    'basket' => 'pages/basket',
    '<slug:\w+>' => 'pages/index',
    // '<controller:(pages)>/<slug:\w+>/<pagination:\d+>' => '<controller>/index',
    // '<controller:(pages)>/<slug:\w+>/<pagination:\d+>/<category:\d+>' => '<controller>/index',
    '<controller:\w+>/<id:\d+>' => '<controller>/view',
    '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
    '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
  ];
