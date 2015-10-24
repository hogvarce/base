var app = app || {};

app.basketCounter = Backbone.View.extend({
    el: '.cart_num a',
    render: function(){
        this.$el.html(this.model.get('goodsCount') + ' ' + declOfNum(this.model.get('goodsCount'), ["позиция", "позиции", "позиций"]) + ' ' + '<span class="delete">очистить</span>');
        this.listenTo(this.model, 'change', this.addBasket);
        return this;
    },
    events: {
        'click .delete': 'clearBasket'
    },
    clearBasket: function(e){
        e.preventDefault();
        localStorage.setItem('basket', '');
        window.location.reload();
    },
    addBasket: function(){
        $('.cart_num a').html(this.model.get('goodsCount') + ' ' + declOfNum(this.model.get('goodsCount'), ["позиция", "позиции", "позиций"]) + ' ' + '<span class="delete">очистить</span>');
    }
});
