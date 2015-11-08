var app = app || {};


app.order = Backbone.View.extend({
    template: _.template( $( "#order-list-template" ).html() || '' ),
    el: '.order-list',
    model: {
        'basket': JSON.parse(localStorage.getItem('basket') || '[]')
    },
    render: function(){
        this.$el.html( this.template( this.model ) );
        return this;
    }
});
