var app = app || {};

app.goodsRoute = Backbone.Router.extend({
    init: function(){
            var router = this;
            requirejs(['purl', 'masonry'], function(url, masonry){

                var pagin    = parseInt($.url().param('pagin'), 10) || 1,
                    category = parseInt($.url().param('category'), 10) || 0;

            var goodsGroup = new app.GoodsCollections();
            if ( category != 0 ) {
                var filterByCategoty = "parent IN (SELECT id FROM dom_goods_category WHERE id='" + category + "')";
                goodsGroup.url ='/api/goods?filter="' + filterByCategoty + '"&page=' + pagin;
            } else {
                goodsGroup.url ="/api/goods?page=" + pagin;
            }
            goodsGroup.fetch({success:function(collection, response, options){
                var goodsGroupView = new app.allGoodsViews({ collection: collection }),
                    paginCount = options.xhr.getResponseHeader('X-Pagination-Page-Count'),
                    currentPage = options.xhr.getResponseHeader('X-Pagination-Current-Page'),
                    pagination = '<div class="pagination">',
                    active = '';
                if( paginCount > 1 ){
                    for(var i = 1; i <= paginCount; i++)
                    {
                        active = (currentPage == i) ? 'class="pagin active"' : 'class="pagin"';
                        pagination += '<a '+active+'href="/goods?pagin='+i+'&category='+category+'"><span>'+i+'</span></a>';
                    }
                    pagination += '</div>';
                    $('.goods').html(goodsGroupView.render().el)
                        .append(pagination)
                            .prepend(pagination);
                }else{
                    $('.goods').html(goodsGroupView.render().el);
                }

                $('.pagin').click(function(){
                    var self = $(this);
                    router.navigate(self.attr('href'));
                });

                $('.goods .row, .newGoods .row').masonry({
                    itemSelector : '.good',
                    columnWidth: 230,
                    gutterWidth: 25,
                    isAnimated: true,
                    isResizable: true
                  });
            }});
            if($('.category').html() == ""){
                var categoryGroup = new app.CategoryCollections();
                categoryGroup.url = "/api/category";
                categoryGroup.fetch({
                    success: function(collection){
                        var categoryViews = new app.categoryViews({ collection: collection });
                        $('.category').html( categoryViews.render().el )
                                        .children('ul')
                                            .prepend( '<li class="all"><a href="/goods">Все товары</a></li>' );
                    }
                });
            }

        });

    },
    newRender: function(){
        var goodsGroup = new app.GoodsCollections();
        goodsGroup.url ='/api/goods?filter="new=1"&pageSize=30';
        goodsGroup.fetch({success:function(collection, response, options){
            var goodsGroupView = new app.allGoodsViews({ collection: collection });
            $('.newGoods').append(goodsGroupView.render().el);
            requirejs(['owl.carousel.min'], function(owlCarousel){
                $('.newGoods .row').owlCarousel({
                    items: 4,
                    nav: true,
                    mouseDrag: true,
                    touchDrag: true
                });
            });
        }});
    }
});
