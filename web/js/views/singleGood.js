var app = app || {};

app.singleGoodView = Backbone.View.extend({
    tagName: "li",
    className: "col-xs-12 col-sm-6 col-md-4 col-lg-3 good wow animate bounceInLeft",
    template: _.template( $('#Good').html() || '' ) ,
    render: function(){
        var goodTemplate = this.template(this.model.toJSON());
        this.$el.html(goodTemplate);
        return this;
    }
});