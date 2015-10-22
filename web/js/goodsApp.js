if ($('.goods').length) {

    var goodsRoute = new app.Router();

}

if ($('.basket-view').length){

    var basketRoute = new app.basketRouter();

}

app.BasketModel = new app.Basket();
var BasketCountView = new app.basketCounter({
    model: app.BasketModel
});
BasketCountView.render();


Backbone.history.start({pushState: true});
