var app = app || {};

app.basketRouter = Backbone.Router.extend({
    routes: {
        'basket': 'Basket',
        'order' : 'Order'
    },
    Basket: function(){
        var basket  = new app.basket();
        basket.render();
    },
    Order: function(){
        var order  = new app.order();
        order.render();
    }
});
