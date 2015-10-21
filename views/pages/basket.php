<div class="pages-view">
</div>
<script type="text/template" id="basket-list">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Изображение</th>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Общая цена</th>
                    </tr>
                </thead>
                <tbody>
                <% _.each(basket, function(item, e){ %>
                    <tr>
                        <th scope="row"><%= ++e %></th>
                        <td><img src="/<%= item.image %>" width="100" alt="<%= item.pagetitle %>" /></td>
                        <td><%= item.pagetitle %></td>
                        <td>
                            <input  value="<%= item.count %>" class="counter" step="<%=  item.count %>" />
                            <span class="quantity-controls">
                                <i class="fa fa-plus quantity-controls quantity-plus"></i>
                                <i class="fa fa-minus quantity-controls quantity-minus"></i>
                            </span>
                        </td>
                        <td><%= item.price %></td>
                        <td><%= item.count * item.price %></td>
                    </tr>
                <% }); %>
                <tr><th colspan="5">Итого: </th><th></th></tr>
                </tbody>
            </table>
</script>
<script type="text/javascript">
    window.onload = function(){
        var template = _.template(
              $( "#basket-list" ).html()
          );
         var templateData = {
             basket: JSON.parse(localStorage.getItem('basket') || '[]')
         };
         console.log(templateData);
            $('.pages-view').html( template( templateData ) );
    };
</script>
