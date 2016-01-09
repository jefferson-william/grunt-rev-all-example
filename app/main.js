require.config({
    map: {
        '*': {
            css: '/bower_components/require-css/css.js'
        }
    },
    paths: {
        'main': '/scripts/main',
        'jquery': '/bower_components/jquery/jquery'
    }
});

define([
    'jquery',
    'main'
], function(jquery, main) {
    'use strict';

    $('body').html('Hello!');
});
