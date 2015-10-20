<div class="pages-view">
</div>
<script type="text/template" id="basket-list">
            <ul>
                <% _.each(basket, function(item, e){ %>

                    <li><%= item.goodTitle %> - <%= item.goodCount %> = <%= item.goodCount * item.goodPrice %></li>

                <% }); %>
            </ul>
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
