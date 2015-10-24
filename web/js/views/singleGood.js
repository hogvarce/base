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
        'click img.good-preview': 'openFrame',
        'click .buy': 'Buy',
        'click .quantity-controls': 'changeCount'
    },
    changeCount: function(e){
        e.stopPropagation();
        var $th = $(e.target),
            $counter = this.$('.counter');
        switch( $th.attr('class') ){
            case "fa fa-plus quantity-controls quantity-plus":
                $counter.val( parseInt( $counter.val() ) + parseInt( $counter.attr("step") ) );
                break;
            case "fa fa-minus quantity-controls quantity-minus":
                if( $counter.val() > $counter.attr("step") )
                    $counter.val( parseInt( $counter.val() ) - parseInt( $counter.attr("step") ) );
                break;
        }
        this.model.set('count', $counter.val());
    },
    openFrame: function(){
        var frameContent = this.$('.description').html();
        $.fancybox({
            beforeLoad: function(){
                $('html, body').addClass('autoScroll');
            },
            afterClose: function(){
                $('html, body').removeClass('autoScroll');
            },
            content: frameContent
        });
    },
    Buy: function(e){
        e.preventDefault();
        var basket = JSON.parse(localStorage.getItem('basket') || '[]');
        basket.push(this.model);
        app.BasketModel.set('goodsCount', basket.length);
        localStorage.setItem('basket', JSON.stringify(basket));
        var imgAnimate   = this.$('.good-preview').clone().appendTo('body');
        var offsetImg    = this.$('.good-preview').offset();
        var offsetBasket = $('.cart_num').offset();
        imgAnimate.css({
            'position': 'absolute',
            'top'     : offsetImg.top,
            'left'    : offsetImg.left
        }).animate({
            'top'     : offsetBasket.top,
            'left'    : offsetBasket.left,
            'width'   : '0px',
            'height'  : '0px'
        }, "fast", function(){
            this.remove();
        });


    }
});
