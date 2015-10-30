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
            var index = this.collection.indexOf(category)+1;
            categoryView.$el.attr('data-wow-delay', '0.'+index+'s');
            this.$el.append(categoryView.render().el);
        }
});
