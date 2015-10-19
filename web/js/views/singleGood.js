var app = app || {};

app.singleGoodView = Backbone.View.extend({
    tagName: "li",
    className: "good wow animate zoomIn", //col-xs-12 col-sm-6 col-md-4 col-lg-4 
    template: _.template( $('#Good').html() || '' ) ,
    render: function(){
        var goodTemplate = this.template(this.model.toJSON());
        this.$el.html(goodTemplate);
        return this;
    },
    events:{
        'change .buy + input': function(e){
            this.model.set('count',$(e.target).val());
        },
        'click img.good-preview': 'openFrame',
        'click .buy': 'Buy'
    },
    openFrame: function(){
        var frameContent = this.$('.description').html();
        $.fancybox({
            content: frameContent
        });
    },
    Buy: function(){
        var itemBuy = {
                goodID          : this.model.get('id'),
                goodTitle       : this.model.get('pagetitle'),
                goodArticle     : this.model.get('articale'),
                goodColor       : this.model.get('color'),
                goodCount       : this.model.get('count'),
                goodCountInPack : this.model.get('count_in_pack')
            };
        var basket = JSON.parse(localStorage.getItem('basket') || '[]');
        basket.push(itemBuy);
        app.BasketModel.set('goodsCount', basket.length);
        localStorage.setItem('basket', JSON.stringify(basket));
    }
});
