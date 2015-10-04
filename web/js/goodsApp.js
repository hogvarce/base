var goodsGroup = new app.GoodsCollections();

goodsGroup.url ="/api/goods";
goodsGroup.fetch({success:function(data){
    var goodsGroupView = new app.allGoodsViews({ collection: data });
    $(".goods").append(goodsGroupView.render().el);
}});

var goodsRoute = new app.Router();

Backbone.history.start({pushState: true});
