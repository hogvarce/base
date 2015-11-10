var app = app || {};


app.order = Backbone.View.extend({
    template: _.template( $( "#order-list-template" ).html() || '' ),
    el: '.order-list',
    model: {
        'basket': JSON.parse(localStorage.getItem('basket') || '[]')
    },
    render: function(){
        this.$el.html( this.template( this.model ) );

            var name  = $('#customers-customer_name'),
                phone = $('#customers-customer_phone'),
                email = $('#customers-customer_email');

            var customer = JSON.parse(localStorage.getItem('customer'));
            
                name.val(customer.name);
                phone.val(customer.phone);
                email.val(customer.email);

        return this;
    }
});
