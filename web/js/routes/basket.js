var app = app || {};

app.basketRouter = Backbone.Router.extend({
    routes: {
        'basket': 'Basket'
    },
    Basket: function(){
        var basket  = new app.basket();
        basket.render();
    }
});
