function addParamUrl(e,a){var n=window.location.href,o=new RegExp("[?|&]"+e+"=[0-9a-zA-Z_+-|.,;]*");if(o.test(n)){var o=new RegExp("[?&]"+e+"=([^&#]*)"),t=o.exec(n)[0].charAt(0);n=n.replace(o,t+e+"="+a)}else{var i=e+"="+a;if(n.indexOf("?")||(n+="?"),n.indexOf("#")>-1){var l=n.split("#");n=l[0]+"&"+i+(l[1]?"#"+l[1]:"")}else n+="&"+i}window.history.pushState(null,document.title,n),location.href=n}var app=app||{};app.singleGood=Backbone.Model.extend({defaults:{title:"undefined",price:0,img:"#",count:1}});var app=app||{};app.allGoodsViews=Backbone.View.extend({tagName:"ul",className:"row list-inline",index:0,render:function(){return this.collection.each(this.addGood,this),this},addGood:function(e){var a=new app.singleGoodView({model:e});this.collection.indexOf(e)+1;this.index<6?this.index++:this.index=1,a.$el.attr("data-wow-delay",.2*this.index+"s"),this.$el.append(a.render().el)},events:{".pagin click":"pagin"},pagin:function(){console.log("ad")}});var app=app||{};app.singleGoodView=Backbone.View.extend({tagName:"li",className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 good wow animate zoomIn",template:_.template($("#Good").html()||""),render:function(){var e=this.template(this.model.toJSON());return this.$el.html(e),this},events:{"change .buy + input":function(e){this.model.set("count",$(e.target).val())}}});var app=app||{};app.GoodsCollections=Backbone.Collection.extend({model:app.singleGood});var app=app||{};if(app.Router=Backbone.Router.extend({routes:{},initialize:function(){var e=$.url().param("pagin")||1,a=$.url().param("category")||0,n=new app.GoodsCollections;n.url="/api/goods?page="+e,n.fetch({success:function(e,n,o){for(var t=new app.allGoodsViews({collection:e}),i=o.xhr.getResponseHeader("X-Pagination-Page-Count"),l=o.xhr.getResponseHeader("X-Pagination-Current-Page"),p='<div class="pagination">',s="",d=1;i>=d;d++)s=l==d?'class="pagin active"':'class="pagin"',p+="<a "+s+'href="?pagin='+d+"&category="+a+'"><span>'+d+"</span></a>";p+="</div>",$(".goods").append(t.render().el).before(p).after(p)}})}}),$(".goods").length){var goodsRoute=new app.Router;Backbone.history.start({pushState:!0})}$(function(){(new WOW).init()}());