<?php 
  return  [
    ['class' => 'yii\rest\UrlRule', 'controller' => 'modules/api'],
    '<controller:\w+>/<id:\d+>' => '<controller>/view',
    '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
    '<controller:(pages)>/<action:\w+>/<slug:\w+>' => '<controller>/<action>',
    '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
    'admin' => 'admin/default/login',
  ];
