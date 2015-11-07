requirejs.config({
    baseUrl: 'js/product',
    path: {
            "camera": " camera.min",
    },
    shim: {
        camera: {
            exports: "camera"
        }
    }
});
