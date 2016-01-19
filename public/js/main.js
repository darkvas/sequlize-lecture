var App = App || {};

require.config({
    path: {
        Backbone: './libs/backbone/backbone',
        Underscore: './libs/underscore/underscore',
        jQuery: './libs/jquery/dist/jquery'
    },
    shim: {
        Backbone: ['Underscore', 'jQuery'],
        app: ['Backbone']
    }
});

require(['app'], function(app) {

});