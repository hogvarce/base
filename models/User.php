<?php

namespace app\models;

use Yii;
use yii\base\NotSupportedException;
use yii\db\ActiveRecord;
use yii\helpers\Security;
use yii\web\IdentityInterface;

class User extends \yii\db\ActiveRecord  implements IdentityInterface
{
      public static function tableName()
     {
         return 'dom_users';
     }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
      return static::findOne($id);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
      return static::findOne(['accessToken' => $token]);
    }


    /**
     * Finds user by username
     *
     * @param  string      $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
      return static::findOne(['username' => $username]);
    }

    public static function findByPasswordResetToken($token)
    {
        $expire = \Yii::$app->params['user.passwordResetTokenExpire'];
        $parts = explode('_', $token);
        $timestamp = (int) end($parts);
        if ($timestamp + $expire < time()) {
            // token expired
            return null;
        }

        return static::findOne([
            'accessToken' => $token
        ]);
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
      return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
      return $this->authKey;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
      return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param  string  $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return $this->password === sha1($password);
    }

    public function setPassword($password)
    {
        $this->password_hash = Security::generatePasswordHash($password);
    }

    public function generateAuthKey()
    {
        $this->authKey = Security::generateRandomKey();
    }

    public function generatePasswordResetToken()
    {
        $this->accessToken = Security::generateRandomKey() . '_' . time();
    }

    public function removePasswordResetToken()
    {
        $this->accessToken = null;
    }
}
