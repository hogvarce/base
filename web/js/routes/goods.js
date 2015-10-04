var app = app || {};

app.Router = Backbone.Router.extend({

    routes: {
        '*goods(/:page)': 'goods'
    },
    goods: function(url, page){
        var page = parseInt(page) || '1';
        var goodsGroup = new app.GoodsCollections();

        goodsGroup.url ="/api/goods?page="+page;
        goodsGroup.fetch({success:function(data){
            var goodsGroupView = new app.allGoodsViews({ collection: data });
            $(".goods").append(goodsGroupView.render().el);
        }});
    }

});
