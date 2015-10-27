var app = app || {};

app.goodsRoute = Backbone.Router.extend({
    routes: {},
    render: function(){
        var pagin    = parseInt($.url().param('pagin'), 10) || 1,
            category = parseInt($.url().param('category'), 10) || 0;
        var goodsGroup = new app.GoodsCollections();
        if ( category != 0 ) {
            var filterByCategoty = "parent IN (SELECT id FROM goods_category WHERE id='" + category + "')";
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
                    pagination += '<a '+active+'href="?pagin='+i+'&category='+category+'"><span>'+i+'</span></a>';
                }
                pagination += '</div>';
                $('.goods').append(goodsGroupView.render().el)
                    .before(pagination)
                        .after(pagination);
            }else{
                $('.goods').append(goodsGroupView.render().el);
            }
            $('.goods .row, .newGoods .row').masonry({
                itemSelector : '.good',
                columnWidth: 230,
                gutterWidth: 25,
                isAnimated: true,
                isResizable: true
              });
        }});
    },
    newRender: function(){
        var goodsGroup = new app.GoodsCollections();
        goodsGroup.url ='/api/goods?filter="new=1"&pageSize=30';
        goodsGroup.fetch({success:function(collection, response, options){
            var goodsGroupView = new app.allGoodsViews({ collection: collection });
            $('.newGoods').append(goodsGroupView.render().el);
            $('.newGoods .row').owlCarousel({
                items: 4,
                nav: true,
                mouseDrag: true,
                touchDrag: true
            });
        }});
    }
});
