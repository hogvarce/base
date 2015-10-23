var app = app || {};

app.basket = Backbone.View.extend({
    template: _.template( $( "#basket-list" ).html() || '' ),
    el: '.basket-view',
    model: {
        'basket': JSON.parse(localStorage.getItem('basket') || '[]')
    },
    render: function(){
        this.$el.html( this.template( this.model ) );
        return this;
    },
    events:{
        'change .counter': 'changeCount',
        'click .quantity-controls' : 'changeQuantity'
    },
    changeCount: function(e){
        var $counter = $(e.target),
            inx = $counter.parent().parent().index();
            
        this.model.basket[inx].count = parseInt($counter.val()) || 1;

        localStorage.setItem('basket', JSON.stringify(this.model.basket));

        this.render();
    },
    changeQuantity: function(e){
        e.stopPropagation();

        var $th = $(e.target),
            $counter = $th.parent().prev(),
            inx = $counter.parent().parent().index();

        switch ( $th.attr('class') ) {
            case "fa fa-minus quantity-controls quantity-minus":
                if( $counter.val() > $counter.attr("step") ){
                    $counter.val( parseInt( $counter.val() ) - parseInt( $counter.attr("step") ) );
                    this.model.basket[inx].count = parseInt($counter.val()) || 1;
                }
                break;
            case "fa fa-plus quantity-controls quantity-plus":
                $counter.val( parseInt( $counter.val() ) + parseInt( $counter.attr("step") ) );
                this.model.basket[inx].count = parseInt($counter.val()) || 1;
                break;
        }

        localStorage.setItem('basket', JSON.stringify(this.model.basket));

        this.render();
    }
});