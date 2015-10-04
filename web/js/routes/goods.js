var app = app || {};

app.Router = Backbone.Router.extend({

    routes: {
        '*goods(/:page)': 'goods'
    },
    goods: function(url, page){
        var page = parseInt(page) || '1';
        var goodsGroup = new app.GoodsCollections();

        goodsGroup.url ="/api/goods?page="+page;
        goodsGroup.fetch({success:function(collection, response, options){
            var goodsGroupView = new app.allGoodsViews({ collection: collection }),
                paginCount = options.xhr.getResponseHeader('X-Pagination-Page-Count'),
                currentPage = options.xhr.getResponseHeader('X-Pagination-Current-Page'),
                pagination = '<div class="pagination">',
                path = window.location.pathname,
                active = '';
            for(var i = 1; i <= paginCount; i++)
            {
                active = (currentPage == i) ? 'class="active"' : '';
                pagination += '<a '+active+'href="/pages/index/goods/'+i+'"><span>'+i+'</span></a>';
            }
            pagination += '</div>';
            $(".goods").append(goodsGroupView.render().el)
                .before(pagination)
                    .after(pagination);
        }});
    }

});
