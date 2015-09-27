var app = app || {};

app.singleGood = Backbone.Model.extend({
    defaults:{
        title: "undefined",
        price: 0,
        img: "#"
    }
});
