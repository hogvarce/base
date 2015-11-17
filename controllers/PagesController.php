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
use app\models\Delivery;

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

/*   public function actionPage($slug)
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
    }*/

    public function actionBasket()
    {
        $delivery = Delivery::find()->all();
        return $this->render('basket',[
            'model' => $model,
            'delivery' => $delivery
            ]);
    }

    public function actionOrder()
    {
        $model = new Customers();
        if ( $model->load(Yii::$app->request->post()) && $model->validate() ){

            $customer = Yii::$app->request->post()["Customers"];
            $textMail = "<p><strong>" . $customer['customer_name'] . "</strong> сделал заказ на сайте. </p> " .
                "<p>Его телефон: <strong>" . $customer['customer_phone'] . "</strong></p>" .
                "<p>Адрес доставки: <strong>" . $customer['order_address'] . "</strong></p>" .
                "<p>Комментарии: <strong>" . $customer['comments'] . "</strong></p>" .
                $customer['order_list'];

            $mail = Yii::$app->mail->compose()
                                     ->setFrom('fynjy410@yandex.ru')
                                     ->setTo('fynjy410@yandex.ru')
                                     ->setSubject('Заказ на plastic-dom')
                                     ->setHtmlBody($textMail);
             if (!$mail->send())
              return $this->redirect('failed-order', 302);
            $model->save();
            return $this->redirect('success-order', 302);
        }
        $delivery = Delivery::find()->all();
        return $this->render('order',[
            'model' => $model,
            'delivery' => $delivery
            ]);
    }

    public function actionSuccess(){
        return $this->render('success-order');
    }

    public function actionFailed(){
        return $this->render('failed-order');
    }

}
