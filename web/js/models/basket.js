var app = app || {};

app.Basket = Backbone.Model.extend({
    defaults:{
        goodsCount: JSON.parse(localStorage.getItem('basket') || '[]').length
    }
});
