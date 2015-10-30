if ( $('.goods').length ) {

    var goodsRoute = new app.goodsRoute();
    goodsRoute.init();

    $(document).on('click', '.pagin', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        Backbone.history.navigate(url, {trigger: true, replace: true});
        goodsRoute.init();
    });

}

if ( $('.newGoods').length ) {

    var goodsRoute = new app.goodsRoute();
    goodsRoute.newRender();

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
