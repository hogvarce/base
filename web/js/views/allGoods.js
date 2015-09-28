var app = app || {};

app.allGoodsViews = Backbone.View.extend({
    tagName: "div",
    className: "row",
    render: function(){
        this.collection.each(this.addGood, this);
        return this;
    },
    addGood: function(good){
        var goodView = new app.singleGoodView({model: good});
        var index = this.collection.indexOf(good)+1;
        console.log(goodView.$el.attr('data-wow-delay', '0.'+index+'s'));
        this.$el.append(goodView.render().el);
    }
});
