<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Pages;

/**
 * PagesSearch represents the model behind the search form about `app\models\Pages`.
 */
class PagesSearch extends Pages
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_page'], 'integer'],
            [['title', 'keyword_page', 'desc_page', 'content_page', 'slug'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Pages::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id_page' => $this->id_page,
        ]);

        $query->andFilterWhere(['like', 'title', $this->title])
            ->andFilterWhere(['like', 'keyword_page', $this->keyword_page])
            ->andFilterWhere(['like', 'desc_page', $this->desc_page])
            ->andFilterWhere(['like', 'content_page', $this->content_page])
            ->andFilterWhere(['like', 'slug', $this->slug]);

        return $dataProvider;
    }
}
