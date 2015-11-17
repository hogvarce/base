function initMap(){var e=parseFloat(document.getElementById("map").getAttribute("data-x")),t=parseFloat(document.getElementById("map").getAttribute("data-y"));map=new google.maps.Map(document.getElementById("map"),{center:{lat:e,lng:t},zoom:12}),marker=new google.maps.Marker({map:map,draggable:!1,animation:google.maps.Animation.DROP,position:{lat:e,lng:t}}),marker.addListener("mouseover",function(){marker.setAnimation(google.maps.Animation.BOUNCE)}),marker.addListener("mouseout",function(){marker.setAnimation(null)}),marker.addListener("click",function(){map.setCenter(marker.getPosition()),infowindow.open(map,marker)}),infowindow=new google.maps.InfoWindow({content:"Наш адрес"}),$("#order-form").length&&($("#customers-order_address").change(function(){var e=$(this);getGeo(e.val())}),map.addListener("click",function(e){loc=e.latLng,getLoc(loc)}))}function getGeo(e){$.getJSON("//maps.googleapis.com/maps/api/geocode/json?address="+e,function(e){marker.setPosition(e.results[0].geometry.location),map.setCenter(marker.getPosition())})}function getLoc(e){$.getJSON("//maps.googleapis.com/maps/api/geocode/json?latlng="+e.lat()+","+e.lng()+"&sensor=true",function(t){$("#customers-order_address").val(t.results[0].formatted_address),marker.setPosition(e),map.setCenter(marker.getPosition())})}function addParamUrl(e,t){var a=window.location.href,o=new RegExp("[?|&]"+e+"=[0-9a-zA-Z_+-|.,;]*");if(o.test(a)){var o=new RegExp("[?&]"+e+"=([^&#]*)"),n=o.exec(a)[0].charAt(0);a=a.replace(o,n+e+"="+t)}else{var s=e+"="+t;if(a.indexOf("?")&&(a+="?"),a.indexOf("#")>-1){var r=a.split("#");a=r[0]+"&"+s+(r[1]?"#"+r[1]:"")}else a+="&"+s}window.history.pushState(null,document.title,a),location.href=a}function declOfNum(e,t){return cases=[2,0,1,1,1,2],t[e%100>4&&20>e%100?2:cases[5>e%10?e%10:5]]}var app=app||{};app.Basket=Backbone.Model.extend({defaults:{goodsCount:JSON.parse(localStorage.getItem("basket")||"[]").length,items:[]}});var app=app||{};app.category=Backbone.Model.extend({defaults:{}});var app=app||{};app.singleGood=Backbone.Model.extend({defaults:{pagetitle:"undefined",price:0,image:"/img/no_photo.png",count:1}});var app=app||{};app.allGoodsViews=Backbone.View.extend({tagName:"ul",className:"row list-inline",render:function(){return this.collection.each(this.addGood,this),this},addGood:function(e){var t=new app.singleGoodView({model:e}),a=Math.random()*(.8-.1)+.1;t.$el.attr("data-wow-delay",a+"s"),this.$el.append(t.render().el)}});var app=app||{};app.basket=Backbone.View.extend({template:_.template($("#basket-list").html()||""),el:".basket-view",model:{basket:JSON.parse(localStorage.getItem("basket")||"[]")},render:function(){return this.$el.html(this.template(this.model)),this},events:{"change .counter":"changeCount","click .quantity-controls":"changeQuantity","click .makeBuy":"makeBuy","click .delete":"DeleteGood"},DeleteGood:function(e){var t=$(e.target).parent().parent().index();this.model.basket.splice(t,1)[0],localStorage.setItem("basket",JSON.stringify(this.model.basket)),app.BasketModel.set("goodsCount",app.BasketModel.get("goodsCount")-1),app.BasketCountView.render(),this.render()},changeCount:function(e){var t=$(e.target),a=t.parent().parent().index();this.model.basket[a].count=Math.abs(parseInt(t.val()))||1,localStorage.setItem("basket",JSON.stringify(this.model.basket)),this.render()},changeQuantity:function(e){e.stopPropagation();var t=$(e.target),a=t.parent().prev(),o=a.parent().parent().index();switch(t.attr("class")){case"fa fa-minus quantity-controls quantity-minus":a.val()>a.attr("step")&&(a.val(parseInt(a.val())-parseInt(a.attr("step"))),this.model.basket[o].count=Math.abs(parseInt(a.val()))||1);break;case"fa fa-plus quantity-controls quantity-plus":a.val(parseInt(a.val())+parseInt(a.attr("step"))),this.model.basket[o].count=Math.abs(parseInt(a.val()))||1}localStorage.setItem("basket",JSON.stringify(this.model.basket)),this.render()},makeBuy:function(e){e.preventDefault(),this.model.basket.length&&(window.location=$(e.target).attr("href"))}});var app=app||{};app.basketCounter=Backbone.View.extend({el:".cart_num a",render:function(){return this.$el.html(this.model.get("goodsCount")+" "+declOfNum(this.model.get("goodsCount"),["позиция","позиции","позиций"])+' <span class="delete">очистить</span>'),this.listenTo(this.model,"change",this.addBasket),this},events:{"click .delete":"clearBasket"},clearBasket:function(e){e.preventDefault(),localStorage.setItem("basket",""),window.location.reload()},addBasket:function(){$(".cart_num a").html(this.model.get("goodsCount")+" "+declOfNum(this.model.get("goodsCount"),["позиция","позиции","позиций"])+' <span class="delete">очистить</span>')}});var app=app||{};app.categoryView=Backbone.View.extend({tagName:"li",className:"wow animate bounceInLeft",template:_.template('<a href="/goods?category=<%= id %>"><%= title_category %></a>'),render:function(){var e=this.template(this.model.toJSON());return this.$el.html(e),this}});var app=app||{};app.categoryViews=Backbone.View.extend({tagName:"ul",className:"side-menu list-unstyled",render:function(){return this.collection.each(this.addCategory,this),this},addCategory:function(e){var t=new app.categoryView({model:e}),a=this.collection.indexOf(e)+1;t.$el.attr("data-wow-delay","0."+a+"s"),this.$el.append(t.render().el)}});var app=app||{};app.order=Backbone.View.extend({template:_.template($("#order-list-template").html()||""),el:".order-list",model:{basket:JSON.parse(localStorage.getItem("basket")||"[]")},render:function(){this.$el.html(this.template(this.model));var e=$("#customers-customer_name")||"",t=$("#customers-customer_phone")||"",a=$("#customers-customer_email")||"",o=JSON.parse(localStorage.getItem("customer")||"[]");return e.val(o.name),t.val(o.phone),a.val(o.email),$("#selfDelivery").change(function(){var e=parseFloat($("#Sum").text());$(this).is(":checked")?($(".field-customers-order_address").stop(1,0).slideUp(),$("#map").stop(1,0).slideUp(),$("#sumDisc").stop(1,0).slideUp(),$("#sumDisc strong > span").text(0),e-=sumDiscount,$("#Sum").text(e)):($(".field-customers-order_address").stop(1,0).slideDown(),$("#map").stop(1,0).slideDown(),$("#sumDisc").stop(1,0).slideDown(),$("#sumDisc strong > span").text(sumDiscount),e+=sumDiscount,$("#Sum").text(e))}),this}});var app=app||{};app.singleGoodView=Backbone.View.extend({tagName:"li",className:"good wow animate zoomIn",template:_.template($("#Good").html()||""),render:function(){var e=this.template(this.model.toJSON());return this.$el.html(e),this},events:{"click img.good-preview":"openFrame","click .buy":"Buy","click .quantity-controls":"changeCount","change .counter":"changeQuantity"},changeCount:function(e){e.stopPropagation();var t=$(e.target),a=this.$(".counter");switch(t.attr("class")){case"fa fa-plus quantity-controls quantity-plus":a.val(parseInt(a.val())+parseInt(a.attr("step")));break;case"fa fa-minus quantity-controls quantity-minus":a.val()>a.attr("step")&&a.val(parseInt(a.val())-parseInt(a.attr("step")))}this.model.set("count",Math.abs(parseInt(a.val())))},changeQuantity:function(){var e=this.$(".counter");this.model.set("count",Math.abs(parseInt(e.val())))},openFrame:function(){var e=this.$(".description").html();$.fancybox({beforeLoad:function(){$("html, body").addClass("autoScroll")},afterClose:function(){$("html, body").removeClass("autoScroll")},content:e})},Buy:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("basket")||"[]"),a=this.model.get("id"),o=!0;if(t.length>0)for(item in t)if(t[item].id===a){t[item].count+=this.model.get("count"),o=!1;break}(o||0===t.length)&&t.push(this.model),app.BasketModel.set("goodsCount",t.length),localStorage.setItem("basket",JSON.stringify(t));var n=this.$(".good-preview").clone().appendTo("body"),s=this.$(".good-preview").offset(),r=$(".cart_num").offset();n.css({position:"absolute","z-index":"1001",top:s.top,left:s.left}).animate({top:r.top,left:r.left,width:"0px",height:"0px"},600,function(){this.remove()})}});var app=app||{};app.CategoryCollections=Backbone.Collection.extend({model:app.category});var app=app||{};app.GoodsCollections=Backbone.Collection.extend({model:app.singleGood});var app=app||{};app.basketRouter=Backbone.Router.extend({routes:{basket:"Basket",order:"Order"},Basket:function(){var e=new app.basket;e.render()},Order:function(){var e=new app.order;e.render()}});var app=app||{};if(app.goodsRoute=Backbone.Router.extend({init:function(){var e=this;requirejs(["purl","masonry"],function(t,a){var o=parseInt($.url().param("pagin"),10)||1,n=parseInt($.url().param("category"),10)||0,s=new app.GoodsCollections;if(0!=n){var r="parent IN (SELECT id FROM dom_goods_category WHERE id='"+n+"')";s.url='/api/goods?filter="'+r+'"&page='+o}else s.url="/api/goods?page="+o;if(s.fetch({success:function(t,a,o){var s=new app.allGoodsViews({collection:t}),r=o.xhr.getResponseHeader("X-Pagination-Page-Count"),i=o.xhr.getResponseHeader("X-Pagination-Current-Page"),l='<div class="pagination">',p="";if(r>1){for(var c=1;r>=c;c++)p=i==c?'class="pagin active"':'class="pagin"',l+="<a "+p+'href="/goods?pagin='+c+"&category="+n+'"><span>'+c+"</span></a>";l+="</div>",$(".goods").html(s.render().el).append(l).prepend(l)}else $(".goods").html(s.render().el);$(".pagin").click(function(){var t=$(this);e.navigate(t.attr("href"))}),$(".goods .row, .newGoods .row").masonry({itemSelector:".good",columnWidth:230,gutterWidth:25,isAnimated:!0,isResizable:!0})}}),""==$(".category").html()){var i=new app.CategoryCollections;i.url="/api/category",i.fetch({success:function(e){var t=new app.categoryViews({collection:e});$(".category").html(t.render().el).children("ul").prepend('<li class="all"><a href="/goods">Все товары</a></li>')}})}})},newRender:function(){var e=new app.GoodsCollections;e.url='/api/goods?filter="new=1"&pageSize=30',e.fetch({success:function(e,t,a){var o=new app.allGoodsViews({collection:e});$(".newGoods").append(o.render().el),requirejs(["owl.carousel.min"],function(e){$(".newGoods .row").owlCarousel({items:4,nav:!0,mouseDrag:!0,touchDrag:!0})})}})}}),requirejs.config({baseUrl:"js/product"}),$(".goods").length){var goodsRoute=new app.goodsRoute;goodsRoute.init(),$(document).on("click",".pagin",function(e){e.preventDefault();var t=$(this).attr("href");Backbone.history.navigate(t,{trigger:!0,replace:!0}),goodsRoute.init()}),$(document).on("click",".category li a",function(e){e.preventDefault();var t=$(this).attr("href");Backbone.history.navigate(t,{trigger:!0,replace:!0}),goodsRoute.init()})}if($(".newGoods").length){var goodsRoute=new app.goodsRoute;goodsRoute.newRender()}if($(".basket-view").length||$(".order-view").length)var basketRoute=new app.basketRouter;app.BasketModel=new app.Basket,app.BasketCountView=new app.basketCounter({model:app.BasketModel}),app.BasketCountView.render(),Backbone.history.start({pushState:!0}),requirejs.config({baseUrl:"js/product"}),$(function(){$(".wow").length&&requirejs(["wow.min"],function(){(new WOW).init()}),$(".navigation .nav a").each(function(e){var t=$(this).attr("href");location.pathname==t&&$(this).parent().addClass("active")}),requirejs(["tm-stick-up"],function(e){$(".navigation").tmStickUp()}),$("#map").length&&$.ajax({type:"GET",url:"//maps.google.com/maps/api/js?sensor=false&callback=initMap",dataType:"script",cache:!0}),$(".camera_wrap").length&&requirejs(["camera.min"],function(e){$(".camera_wrap").camera({height:"40%",minHeight:"",pauseOnClick:!1,hover:1,fx:"simpleFade",loader:"none",pagination:1,thumbnails:0,thumbheight:75,thumbwidth:100,time:1e4,transPeriod:1e3,alignment:"center",autoAdvance:1,mobileAutoAdvance:1,portrait:0,barDirection:"leftToRight",imagePath:"/img/",lightbox:"mediaboxck",fullpage:0,mobileimageresolution:"0",navigationHover:!1,navigation:!1,playPause:!1,barPosition:"bottom"})}),$(document).on({click:function(e){if(e.preventDefault(),localStorage.getItem("basket").length){var t={name:$("#customers-customer_name").val(),phone:$("#customers-customer_phone").val(),email:$("#customers-customer_email").val()};localStorage.setItem("customer",JSON.stringify(t));var a=$("#order-form"),o=$(".order-list").parent().html();a.append('\r\n                    <textarea id="customers-order_list" class="form-control" name="Customers[order_list]" style="display:none;">'+o+"</textarea>"),a.submit()}}},".send-order")}());var map,marker,infowindow;