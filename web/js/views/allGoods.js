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
        this.$el.append(goodView.render().el);
    }
});
