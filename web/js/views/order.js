var app = app || {};


app.order = Backbone.View.extend({
    template: _.template( $( "#order-list-template" ).html() || '' ),
    el: '.order-list',
    model: {
        'basket': JSON.parse(localStorage.getItem('basket') || '[]')
    },
    render: function(){
        this.$el.html( this.template( this.model ) );

            var name  = $('#customers-customer_name') || '',
                phone = $('#customers-customer_phone') || '',
                email = $('#customers-customer_email') || '';

            var customer = JSON.parse(localStorage.getItem('customer') || '[]');

                name.val(customer.name);
                phone.val(customer.phone);
                email.val(customer.email);

            $('#selfDelivery').change(function(){
                var sum = parseFloat($('#Sum').text());
                if ( $(this).is(':checked') ) {
                    $('.field-customers-order_address').stop(1,0).slideUp();
                    $('#map').stop(1,0).slideUp();
                    $('#sumDisc').stop(1,0).slideUp();
                    $('#sumDisc strong > span').text(0);
                    sum -= sumDiscount;
                    $('#Sum').text(sum);
                } else {
                    $('.field-customers-order_address').stop(1,0).slideDown();
                    $('#map').stop(1,0).slideDown();
                    $('#sumDisc').stop(1,0).slideDown();
                    $('#sumDisc strong > span').text(sumDiscount);
                    sum += sumDiscount;
                    $('#Sum').text(sum);
                }
            });

        return this;
    }
});
