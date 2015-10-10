var app = app || {};

app.Router = Backbone.Router.extend({

    routes: {},
    initialize: function(){
        var pagin    = $.url().param('pagin') || 1,
            category = $.url().param('category') || 0;
        var goodsGroup = new app.GoodsCollections();
        if ( category != 0 ) {
            var filterByCategoty = "parent IN (SELECT id FROM goods_category WHERE id='" + category + "')";
            goodsGroup.url ='/api/goods?filter="' + filterByCategoty + '"&page=' + pagin;
            console.log(goodsGroup.url);
        } else {
            goodsGroup.url ="/api/goods?page=" + pagin;
        }
        goodsGroup.fetch({success:function(collection, response, options){
            var goodsGroupView = new app.allGoodsViews({ collection: collection }),
                paginCount = options.xhr.getResponseHeader('X-Pagination-Page-Count'),
                currentPage = options.xhr.getResponseHeader('X-Pagination-Current-Page'),
                pagination = '<div class="pagination">',
                active = '';
            for(var i = 1; i <= paginCount; i++)
            {
                active = (currentPage == i) ? 'class="pagin active"' : 'class="pagin"';
                pagination += '<a '+active+'href="?pagin='+i+'&category='+category+'"><span>'+i+'</span></a>';
            }
            pagination += '</div>';
            $(".goods").append(goodsGroupView.render().el)
                .before(pagination)
                    .after(pagination);
        }});
    }
    // goods: function(page){
    //
    //     var page = parseInt(page) || '1';
    //     var goodsGroup = new app.GoodsCollections();
    //     console.log(page);
    //     goodsGroup.url ="/api/goods?page="+page;
    //     goodsGroup.fetch({success:function(collection, response, options){
    //         var goodsGroupView = new app.allGoodsViews({ collection: collection }),
    //             paginCount = options.xhr.getResponseHeader('X-Pagination-Page-Count'),
    //             currentPage = options.xhr.getResponseHeader('X-Pagination-Current-Page'),
    //             pagination = '<div class="pagination">',
    //             active = '';
    //         for(var i = 1; i <= paginCount; i++)
    //         {
    //             active = (currentPage == i) ? 'class="active"' : '';
    //             pagination += '<a '+active+'href="/pages/goods/'+i+'"><span>'+i+'</span></a>';
    //         }
    //         pagination += '</div>';
    //         $(".goods").append(goodsGroupView.render().el)
    //             .before(pagination)
    //                 .after(pagination);
    //     }});
    // }

});
