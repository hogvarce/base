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
        this.$el.append(goodView.render().el);
    }
});

var app = app || {};

app.singleGoodView = Backbone.View.extend({
    tagName: "div",
    className: "col-xs-12 col-sm-3 col-md-4 good",
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
    routes: {
            "pages/index/goods": "goods"
    },
    goods: function(){
        var goodsGroup = new app.GoodsCollections();
        goodsGroup.url ="/api/pages";
        goodsGroup.fetch({success:function(data){
            var goodsGroupView = new app.allGoodsViews({ collection: data });
            $(".pages-view").append(goodsGroupView.render().el);
        }});

    }
});

var goodsRoute = new app.Router();

Backbone.history.start({pushState: true});

$(function(){

    

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUdvb2QuanMiLCJhbGxHb29kcy5qcyIsImdvb2RzLmpzIiwiZ29vZHNBcHAuanMiLCJzY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhcHAgfHwge307XHJcblxyXG5hcHAuc2luZ2xlR29vZFZpZXcgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHJcbiAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgY2xhc3NOYW1lOiBcImNvbC14cy0xMiBjb2wtc20tMyBjb2wtbWQtNCBnb29kXCIsXHJcbiAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZSggJCgnI0dvb2QnKS5odG1sKCkgKSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgZ29vZFRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSh0aGlzLm1vZGVsLnRvSlNPTigpKTtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGdvb2RUZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJ2YXIgYXBwID0gYXBwIHx8IHt9O1xyXG5cclxuYXBwLkdvb2RzQ29sbGVjdGlvbnMgPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XHJcbiAgICBtb2RlbDogYXBwLnNpbmdsZUdvb2RcclxufSk7XHJcbiIsInZhciBhcHAgPSBhcHAgfHwge307XHJcblxyXG5hcHAuUm91dGVyID0gQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XHJcbiAgICByb3V0ZXM6IHtcclxuICAgICAgICAgICAgXCJwYWdlcy9pbmRleC9nb29kc1wiOiBcImdvb2RzXCJcclxuICAgIH0sXHJcbiAgICBnb29kczogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgZ29vZHNHcm91cCA9IG5ldyBhcHAuR29vZHNDb2xsZWN0aW9ucygpO1xyXG4gICAgICAgIGdvb2RzR3JvdXAudXJsID1cIi9hcGkvcGFnZXNcIjtcclxuICAgICAgICBnb29kc0dyb3VwLmZldGNoKHtzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB2YXIgZ29vZHNHcm91cFZpZXcgPSBuZXcgYXBwLmFsbEdvb2RzVmlld3MoeyBjb2xsZWN0aW9uOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAkKFwiLnBhZ2VzLXZpZXdcIikuYXBwZW5kKGdvb2RzR3JvdXBWaWV3LnJlbmRlcigpLmVsKTtcclxuICAgICAgICB9fSk7XHJcblxyXG4gICAgfVxyXG59KTtcclxuIiwidmFyIGdvb2RzUm91dGUgPSBuZXcgYXBwLlJvdXRlcigpO1xyXG5cclxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7cHVzaFN0YXRlOiB0cnVlfSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBcclxuXHJcbn0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==