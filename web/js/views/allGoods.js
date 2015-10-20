var app = app || {};

app.allGoodsViews = Backbone.View.extend({
    tagName: "ul",
    className: "row list-inline",
    //index: 0,
    render: function(){
        this.collection.each(this.addGood, this);
        setTimeout(function(){
            $('.goods .row').masonry({
                itemSelector : '.good',
                columnWidth: 230,
                gutterWidth: 25,
                isAnimated: true,
                isResizable: true
              });
        },500);
        return this;
    },
    addGood: function(good){
        var goodView = new app.singleGoodView({model: good});
        // var index = this.collection.indexOf(good)+1;
        // (this.index < 6) ? this.index++ : this.index = 1;
        var index = Math.random() * (.8 - .1) + .1;
        goodView.$el.attr('data-wow-delay', index+'s');
        // this.index++;
        // if (this.index % 2 == 0)  goodView.$el
        //                             .removeClass('bounceInLeft')
        //                                 .addClass('bounceInRight');
        this.$el.append(goodView.render().el);
    }
});
