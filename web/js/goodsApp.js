if ($('.goods').length) {

    var goodsRoute = new app.goodsRoute();

}

if ($('.basket-view').length){

    var basketRoute = new app.basketRouter();

}

app.BasketModel = new app.Basket();
app.BasketCountView = new app.basketCounter({
    model: app.BasketModel
});
app.BasketCountView.render();


Backbone.history.start({pushState: true});
