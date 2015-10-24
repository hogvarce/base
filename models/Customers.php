<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "customers".
 *
 * @property integer $id
 * @property string $customer_name
 * @property string $customer_phone
 * @property string $customer_email
 * @property string $order_address
 * @property string $comments
 */
class Customers extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'customers';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['customer_name', 'customer_phone', 'customer_email'], 'required', 'message'=>'Заполните, пожалуйста, это поле'],
            [['comments'], 'string'],
            [['customer_name', 'customer_phone', 'customer_email', 'order_address'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'customer_name' => 'Покупатель',
            'customer_phone' => 'Контактный телефон',
            'customer_email' => 'Email',
            'order_address' => 'Адрес доставки',
            'comments' => 'Комментарии к заказу',
        ];
    }
}