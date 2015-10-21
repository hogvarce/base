<div class="pages-view">
</div>
<script type="text/template" id="basket-list">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
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
                        <td><%= item.goodTitle %></td>
                        <td><%= item.goodCount %></td>
                        <td><%= item.goodPrice %></td>
                        <td><%= item.goodCount * item.goodPrice %></td>
                    </tr>
                <% }); %>
                <tr><th colspan="4">Итого: </th><th></th></tr>
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
