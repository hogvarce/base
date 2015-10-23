function addParamUrl(e,t){var a=window.location.href,n=new RegExp("[?|&]"+e+"=[0-9a-zA-Z_+-|.,;]*");if(n.test(a)){var n=new RegExp("[?&]"+e+"=([^&#]*)"),o=n.exec(a)[0].charAt(0);a=a.replace(n,o+e+"="+t)}else{var s=e+"="+t;if(a.indexOf("?")&&(a+="?"),a.indexOf("#")>-1){var i=a.split("#");a=i[0]+"&"+s+(i[1]?"#"+i[1]:"")}else a+="&"+s}window.history.pushState(null,document.title,a),location.href=a}function declOfNum(e,t){return cases=[2,0,1,1,1,2],t[e%100>4&&20>e%100?2:cases[5>e%10?e%10:5]]}var app=app||{};app.Basket=Backbone.Model.extend({defaults:{goodsCount:JSON.parse(localStorage.getItem("basket")||"[]").length,items:[]}});var app=app||{};app.singleGood=Backbone.Model.extend({defaults:{pagetitle:"undefined",price:0,image:"/img/no_photo.png",count:1}});var app=app||{};app.allGoodsViews=Backbone.View.extend({tagName:"ul",className:"row list-inline",render:function(){return this.collection.each(this.addGood,this),setTimeout(function(){$(".goods .row").masonry({itemSelector:".good",columnWidth:230,gutterWidth:25,isAnimated:!0,isResizable:!0})},500),this},addGood:function(e){var t=new app.singleGoodView({model:e}),a=Math.random()*(.8-.1)+.1;t.$el.attr("data-wow-delay",a+"s"),this.$el.append(t.render().el)}});var app=app||{};app.basket=Backbone.View.extend({template:_.template($("#basket-list").html()||""),el:".basket-view",model:{basket:JSON.parse(localStorage.getItem("basket")||"[]")},render:function(){return this.$el.html(this.template(this.model)),this},events:{"change .counter":"changeCount","click .quantity-controls":"changeQuantity","click .makeBuy":"makeBuy"},changeCount:function(e){var t=$(e.target),a=t.parent().parent().index();this.model.basket[a].count=parseInt(t.val())||1,localStorage.setItem("basket",JSON.stringify(this.model.basket)),this.render()},changeQuantity:function(e){e.stopPropagation();var t=$(e.target),a=t.parent().prev(),n=a.parent().parent().index();switch(t.attr("class")){case"fa fa-minus quantity-controls quantity-minus":a.val()>a.attr("step")&&(a.val(parseInt(a.val())-parseInt(a.attr("step"))),this.model.basket[n].count=parseInt(a.val())||1);break;case"fa fa-plus quantity-controls quantity-plus":a.val(parseInt(a.val())+parseInt(a.attr("step"))),this.model.basket[n].count=parseInt(a.val())||1}localStorage.setItem("basket",JSON.stringify(this.model.basket)),this.render()}});var app=app||{};app.basketCounter=Backbone.View.extend({render:function(){$(".cart_num a").text(this.model.get("goodsCount")+" "+declOfNum(this.model.get("goodsCount"),["позиция","позиции","позиций"])),this.listenTo(this.model,"change",this.addBasket)},addBasket:function(){$(".cart_num a").text(this.model.get("goodsCount")+" "+declOfNum(this.model.get("goodsCount"),["позиция","позиции","позиций"]))},clearBasket:function(){localStorage.setItem("basket",""),app.BasketModel.set("goodsCount",0)}});var app=app||{};app.singleGoodView=Backbone.View.extend({tagName:"li",className:"good wow animate zoomIn",template:_.template($("#Good").html()||""),render:function(){var e=this.template(this.model.toJSON());return this.$el.html(e),this},events:{"click img.good-preview":"openFrame","click .buy":"Buy","click .quantity-controls":"changeCount"},changeCount:function(e){e.stopPropagation();var t=$(e.target),a=this.$(".counter");switch(t.attr("class")){case"fa fa-plus quantity-controls quantity-plus":a.val(parseInt(a.val())+parseInt(a.attr("step")));break;case"fa fa-minus quantity-controls quantity-minus":a.val()>a.attr("step")&&a.val(parseInt(a.val())-parseInt(a.attr("step")))}this.model.set("count",a.val())},openFrame:function(){var e=this.$(".description").html();$.fancybox({content:e})},Buy:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("basket")||"[]");t.push(this.model),app.BasketModel.set("goodsCount",t.length),localStorage.setItem("basket",JSON.stringify(t))}});var app=app||{};app.GoodsCollections=Backbone.Collection.extend({model:app.singleGood});var app=app||{};app.basketRouter=Backbone.Router.extend({routes:{basket:"Basket"},Basket:function(){var e=new app.basket;e.render()}});var app=app||{};if(app.Router=Backbone.Router.extend({routes:{},initialize:function(){var e=parseInt($.url().param("pagin"),10)||1,t=parseInt($.url().param("category"),10)||0,a=new app.GoodsCollections;if(0!=t){var n="parent IN (SELECT id FROM goods_category WHERE id='"+t+"')";a.url='/api/goods?filter="'+n+'"&page='+e}else a.url="/api/goods?page="+e;a.fetch({success:function(e,a,n){var o=new app.allGoodsViews({collection:e}),s=n.xhr.getResponseHeader("X-Pagination-Page-Count"),i=n.xhr.getResponseHeader("X-Pagination-Current-Page"),r='<div class="pagination">',p="";if(s>1){for(var l=1;s>=l;l++)p=i==l?'class="pagin active"':'class="pagin"',r+="<a "+p+'href="?pagin='+l+"&category="+t+'"><span>'+l+"</span></a>";r+="</div>",$(".goods").append(o.render().el).before(r).after(r)}else $(".goods").append(o.render().el)}})}}),$(".goods").length)var goodsRoute=new app.Router;if($(".basket-view").length)var basketRoute=new app.basketRouter;app.BasketModel=new app.Basket;var BasketCountView=new app.basketCounter({model:app.BasketModel});BasketCountView.render(),Backbone.history.start({pushState:!0}),$(function(){(new WOW).init(),$(".navigation .nav a").each(function(e){var t=$(this).attr("href");location.pathname==t&&$(this).parent().addClass("active")}),$(".navigation").tmStickUp()}());