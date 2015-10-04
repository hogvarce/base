<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Goods;

/**
 * GoodsSearch represents the model behind the search form about `app\models\Goods`.
 */
class GoodsSearch extends Goods
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'published', 'pub_date', 'unpub_date', 'parent', 'searchable', 'cacheable', 'createdby', 'createdon', 'editedby', 'editedon', 'deleted', 'deletedon', 'deletedby', 'publishedon', 'publishedby', 'donthit', 'privateweb', 'privatemgr', 'content_dispo', 'hidemenu', 'content_type', 'uri_override', 'hide_children_in_tree', 'show_in_tree'], 'integer'],
            [['pagetitle', 'longtitle', 'description', 'alias', 'introtext', 'content', 'menutitle', 'class_key', 'context_key', 'uri', 'properties'], 'safe'],
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
        $query = Goods::find();

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
            'id' => $this->id,
            'published' => $this->published,
            'pub_date' => $this->pub_date,
            'unpub_date' => $this->unpub_date,
            'parent' => $this->parent,
            'searchable' => $this->searchable,
            'cacheable' => $this->cacheable,
            'createdby' => $this->createdby,
            'createdon' => $this->createdon,
            'editedby' => $this->editedby,
            'editedon' => $this->editedon,
            'deleted' => $this->deleted,
            'deletedon' => $this->deletedon,
            'deletedby' => $this->deletedby,
            'publishedon' => $this->publishedon,
            'publishedby' => $this->publishedby,
            'donthit' => $this->donthit,
            'privateweb' => $this->privateweb,
            'privatemgr' => $this->privatemgr,
            'content_dispo' => $this->content_dispo,
            'hidemenu' => $this->hidemenu,
            'content_type' => $this->content_type,
            'uri_override' => $this->uri_override,
            'hide_children_in_tree' => $this->hide_children_in_tree,
            'show_in_tree' => $this->show_in_tree,
        ]);

        $query->andFilterWhere(['like', 'pagetitle', $this->pagetitle])
            ->andFilterWhere(['like', 'longtitle', $this->longtitle])
            ->andFilterWhere(['like', 'description', $this->description])
            ->andFilterWhere(['like', 'alias', $this->alias])
            ->andFilterWhere(['like', 'introtext', $this->introtext])
            ->andFilterWhere(['like', 'content', $this->content])
            ->andFilterWhere(['like', 'menutitle', $this->menutitle])
            ->andFilterWhere(['like', 'class_key', $this->class_key])
            ->andFilterWhere(['like', 'context_key', $this->context_key])
            ->andFilterWhere(['like', 'uri', $this->uri])
            ->andFilterWhere(['like', 'properties', $this->properties]);

        return $dataProvider;
    }
}
