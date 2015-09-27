var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
            "pages/index/goods": "goods"
    },
    goods: function(){
        var goodsGroup = new app.GoodsCollections();
        goodsGroup.url ="/api/pages";
        goodsGroup.fetch({success:function(data){
            var goodsGroupView = new app.allGoodsViews({ collection: data });
            $(".pages-view").append(goodsGroupView.render().el);
        }});

    }
});
