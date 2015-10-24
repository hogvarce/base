<div class="basket-view">
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
                <% var sum = 0; %>
                <% _.each(basket, function(item, e){ %>
                <%
                    goodSum = Math.round((item.count * item.price)*100)/100;
                    sum += Math.round((goodSum)*100)/100;
                %>
                    <tr>
                        <th scope="row"><%= ++e %></th>
                        <td><img src="/<%= item.image %>" width="100" alt="<%= item.pagetitle %>" /></td>
                        <td><%= item.pagetitle %></td>
                        <td>
                            <input  value="<%= item.count %>" class="counter" step="1" />
                            <span class="quantity-controls">
                                <i class="fa fa-plus quantity-controls quantity-plus"></i>
                                <i class="fa fa-minus quantity-controls quantity-minus"></i>
                            </span>
                        </td>
                        <td><%= item.price %></td>
                        <td><%= goodSum %> <span class="delete">удалить</span></td>
                    </tr>
                <% }); %>
                <tr><th colspan="5">Итого: </th><th><%= sum %><br><%=  declOfNum(Math.round(sum), ["рубль", "рубля", "рублей"]) %></th></tr>
                </tbody>
            </table>
            <div class="makeBuy">
                <a href="/order" class="pull-right">Сделать заказ</a>
            </div>
            <div class="clearfix"></div>
</script>
