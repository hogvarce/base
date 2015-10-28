var app = app || {};

app.categoryViews = Backbone.View.extend({
        tagName: "ul",
        className: "side-menu list-unstyled",
        render: function(){
            this.collection.each(this.addCategory, this);
            return this;
        },
        addCategory: function(category){
            var categoryView = new app.categoryView({model: category});
            this.$el.append(categoryView.render().el);
        }
});
