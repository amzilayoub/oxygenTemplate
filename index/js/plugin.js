/*global alert: false, console: false, jQuery: false*/
/*jslint browser: true*/
/*global $, jQuery, mixitup, alert*/

$(window).on('load', function () {
    'use strict';
    $('.loading .sk-folding-cube').fadeOut(2000, function () {
        $('.loading').fadeOut(1000, function () {
            $('.loading').remove();
        });
    });
    $("html").niceScroll({
        cursorcolor: '#95a5a6',
        cursorborderradius: 0,
        cursorwidth: '10px',
        cursorminheight: 100,
        scrollspeed: 60,
        mousescrollstep: 80
    });
});