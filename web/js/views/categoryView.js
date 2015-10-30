var app = app || {};

app.categoryView = Backbone.View.extend({
    tagName: "li",
    className: "wow animate bounceInLeft",
    template: _.template( '<a href="/goods?category=<%= id %>"><%= title_category %></a>' ) ,
    render: function(){
        var categoryTemplate = this.template(this.model.toJSON());
        this.$el.html(categoryTemplate);
        return this;
    }

});
