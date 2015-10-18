var app = app || {};

app.basketCounter = Backbone.View.extend({
    render: function(){
        $('.cart_num a').text(this.model.get('goodsCount') + ' '+ declOfNum(this.model.get('goodsCount'), ["позиция", "позиции", "позиций"]));
        this.listenTo(this.model, 'change', this.addBasket);
    },
    addBasket: function(){
        $('.cart_num a').text(this.model.get('goodsCount') + ' '+ declOfNum(this.model.get('goodsCount'), ["позиция", "позиции", "позиций"]));
    },
    clearBasket: function(){
        localStorage.setItem('basket', '');
        app.BasketModel.set('goodsCount', 0);
    }
});
