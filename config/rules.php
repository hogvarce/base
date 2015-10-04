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
    '<controller:\w+>/<id:\d+>' => '<controller>/view',
    '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
    '<controller:(pages)>/<action:\w+>/<slug:\w+>' => '<controller>/<action>',
    '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
  ];
