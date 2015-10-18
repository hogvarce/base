var app = app || {};

app.basketCounter = Backbone.View.extend({
    render: function(){
        $('.cart_num a').text(this.model.get('goodsCount'));
        this.listenTo(this.model, 'change', this.addBasket);
    },
    addBasket: function(){
        $('.cart_num a').text(this.model.get('goodsCount'));
    }
});
