var app = app || {};

app.singleGoodView = Backbone.View.extend({
    tagName: "div",
    className: "col-xs-12 col-sm-3 col-md-4 good wow animate bounceInLeft",
    template: _.template( $('#Good').html() ),
    render: function(){
        var goodTemplate = this.template(this.model.toJSON());
        this.$el.html(goodTemplate);
        return this;
    }
});
