var app = app || {};

app.singleGood = Backbone.Model.extend({
    defaults:{
        pagetitle: "undefined",
        price: 0,
        image: "/img/no_photo.png",
        count: 1
    }
});
