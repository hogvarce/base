if ($('.goods').length) {

    var goodsRoute = new app.Router();

    Backbone.history.start({pushState: true});


}
app.BasketModel = new app.Basket();
var BasketCountView = new app.basketCounter({
    model: app.BasketModel
});
BasketCountView.render();
