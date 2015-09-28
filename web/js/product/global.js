var app = app || {};

app.singleGood = Backbone.Model.extend({
    defaults:{
        title: "undefined",
        price: 0,
        img: "#"
    }
});

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
        var index = this.collection.indexOf(good)+1;
        console.log(goodView.$el.attr('data-wow-delay', '0.'+index+'s'));
        this.$el.append(goodView.render().el);
    }
});

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

var app = app || {};

app.GoodsCollections = Backbone.Collection.extend({
    model: app.singleGood
});

var app = app || {};

app.Router = Backbone.Router.extend({

});

var goodsGroup = new app.GoodsCollections();

goodsGroup.url ="/api/pages";
goodsGroup.fetch({success:function(data){
    var goodsGroupView = new app.allGoodsViews({ collection: data });
    $(".goods").append(goodsGroupView.render().el);
}});

var goodsRoute = new app.Router();

Backbone.history.start({pushState: true});

$(function(){
    // wow animation activation
      new WOW().init();

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUdvb2QuanMiLCJhbGxHb29kcy5qcyIsImdvb2RzLmpzIiwiZ29vZHNBcHAuanMiLCJzY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRGhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xyXG5cclxuYXBwLnNpbmdsZUdvb2RWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgIGNsYXNzTmFtZTogXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTQgZ29vZCB3b3cgYW5pbWF0ZSBib3VuY2VJbkxlZnRcIixcclxuICAgIHRlbXBsYXRlOiBfLnRlbXBsYXRlKCAkKCcjR29vZCcpLmh0bWwoKSApLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBnb29kVGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwudG9KU09OKCkpO1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoZ29vZFRlbXBsYXRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSk7XHJcbiIsInZhciBhcHAgPSBhcHAgfHwge307XHJcblxyXG5hcHAuR29vZHNDb2xsZWN0aW9ucyA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuICAgIG1vZGVsOiBhcHAuc2luZ2xlR29vZFxyXG59KTtcclxuIiwidmFyIGFwcCA9IGFwcCB8fCB7fTtcclxuXHJcbmFwcC5Sb3V0ZXIgPSBCYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcclxuXHJcbn0pO1xyXG4iLCJ2YXIgZ29vZHNHcm91cCA9IG5ldyBhcHAuR29vZHNDb2xsZWN0aW9ucygpO1xyXG5cclxuZ29vZHNHcm91cC51cmwgPVwiL2FwaS9wYWdlc1wiO1xyXG5nb29kc0dyb3VwLmZldGNoKHtzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgdmFyIGdvb2RzR3JvdXBWaWV3ID0gbmV3IGFwcC5hbGxHb29kc1ZpZXdzKHsgY29sbGVjdGlvbjogZGF0YSB9KTtcclxuICAgICQoXCIuZ29vZHNcIikuYXBwZW5kKGdvb2RzR3JvdXBWaWV3LnJlbmRlcigpLmVsKTtcclxufX0pO1xyXG5cclxudmFyIGdvb2RzUm91dGUgPSBuZXcgYXBwLlJvdXRlcigpO1xyXG5cclxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7cHVzaFN0YXRlOiB0cnVlfSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuICAgIC8vIHdvdyBhbmltYXRpb24gYWN0aXZhdGlvblxyXG4gICAgICBuZXcgV09XKCkuaW5pdCgpO1xyXG5cclxufSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9