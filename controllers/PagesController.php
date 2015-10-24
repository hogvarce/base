<?php

namespace app\controllers;

use Yii;
use app\models\Pages;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Customers;

class PagesController extends Controller
{

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }


    public function actionIndex($slug = '/')
    {
      $model = Pages::findOne([
        'slug' => $slug,
    ]);
      if ($model === null) {
          throw new NotFoundHttpException;
      }

      // renders a view named "view" and applies a layout to it
      return $this->render('view', [
          'model' => $model,
      ]);
    }

    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionPage($slug)
    {
        $model = Pages::findOne([
          'slug' => $slug,
      ]);
        if ($model === null) {
            throw new NotFoundHttpException;
        }

        // renders a view named "view" and applies a layout to it
        return $this->render('view', [
            'model' => $model,
        ]);
    }

    public function actionBasket()
    {
        return $this->render('basket',[
            'model' => $model,
            ]);
    }

    public function actionOrder()
    {
        $model = new Customers();
        if ( $model->load(Yii::$app->request->post()) ){
            // $mail = Yii::$app->mail->compose()
            //  ->setFrom('fynjy410@yandex.ru')
            //  ->setTo('fynjy410@yandex.ru')
            //  ->setSubject('Email sent from Yii2-Swiftmailer');
            //  if (!$mail->send())
            //   echo "чет не получилось.";
            $model->save();
             return $this->redirect('success-order', 302);
        }
        return $this->render('order',[
            'model' => $model,
            ]);
    }

    public function actionSuccess(){
        return $this->render('success-order');
    }

}
