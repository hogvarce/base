var app = app || {};

app.Basket = Backbone.Model.extend({
    defaults:{
        goodsCount: JSON.parse(Cookies.get('basket') || '[]').length
    }
});
