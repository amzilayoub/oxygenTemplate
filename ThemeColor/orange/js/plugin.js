/*global alert: false, console: false, jQuery: false*/
/*jslint browser: true*/
/*global $, jQuery, mixitup, alert*/

$(function () {

	'use strict';
    $('.navbar ul li a, footer a, header button a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top - $('.navbar').outerHeight()
        }, 1000);
    });
	
	//Sync Links with Section
    $(window).scroll(function () {
		$('header, section').each(function () {
			if ($(this).offset().top - $('.navbar').outerHeight() - 2 <= $(window).scrollTop()) {
				$('.navbar .collapse li a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('activeLi').siblings().removeClass('activeLi');
			}
		});
    });
    var win = $(window),
        winScroll = win.scrollTop(),
        // Mix It Up
        mixer = mixitup('.mixItUp');
    // Navigation Bar Active Link
    $('.navbar .collapse li').click(function () {
        $(this).addClass('activeLi').siblings().removeClass('activeLi');
    });
    // Header Responsive
    $('header').height(win.height());
    win.resize(function () {
        $('header').height(win.height());
    });
    //Slider
    // Mix It Up
    // Slider of Sponsor
    win.scroll(function () {
        if (win.scrollTop() >= 30) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });
    win.scroll(function () {
        if (win.scrollTop() >= $('.about').offset().top - $('.nav').outerHeight() - 200) {
            $('.about .textA').each(function (i) {
                setTimeout(function () {
                    $('.about .textA').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 300 * (i + 1));
            });
        }
    });

    var isAnimateSection = true;
    win.scroll(function () {
        if (win.scrollTop() >= $('.nProject').offset().top - $('.nav').outerHeight() - 200 && isAnimateSection) {
            isAnimateSection = false;
            $('.nProject .partNp p, .nProject .partNp h3').each(function (i) {
                setTimeout(function () {
                    var targetNumber = i + 1,
                        valuePercent = Math.ceil(targetNumber * 20.8);
                    $("#test-circle" + targetNumber).circliful({
                        animationStep: 3,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: valuePercent,
                        foregroundColor: '#f39c12'
                    });
                    $('.nProject .partNp p, .nProject .partNp h3').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 400 * (i + 1));
            });
        }
    });
    win.scroll(function () {
        if (win.scrollTop() >= $('.client').offset().top - $('.nav').outerHeight() - 400) {
            $('.client .partC').each(function (i) {
                setTimeout(function () {
                    $('.client .partC').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 400 * (i + 1));
            });
        }
    });
    win.scroll(function () {
        if (win.scrollTop() >= $('.services').offset().top - $('.nav').outerHeight() - 100) {
            $('.services .partS').each(function (i) {
                setTimeout(function () {
                    $('.services .partS').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 300 * (i + 1));
            });
        }
    });

    win.scroll(function () {
        if (win.scrollTop() >= $('.project').offset().top - $('.nav').outerHeight() - 300) {
            $('.project .partP').each(function (i) {
                setTimeout(function () {
                    $('.project .partP').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 300 * (i + 1));
            });
        }
    });
    win.scroll(function () {
        if (win.scrollTop() >= $('.review').offset().top - $('.nav').outerHeight() - 300) {
            $('.review .textR').each(function (i) {
                setTimeout(function () {
                    $('.review .textR').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 300 * (i + 1));
            });
        }
    });
    win.scroll(function () {
        if (win.scrollTop() >= $('.team').offset().top - $('.nav').outerHeight() - 150) {
            $('.team .partT').each(function (i) {
                setTimeout(function () {
                    $('.team .partT').eq(i).css('opacity', '1').css('transform', 'translateY(0px)');
                }, 300 * (i + 1));
            });
        }
    });
    $('.galerie .row .container-fluid button').click(function () {
        $(this).addClass('thisButton').siblings().removeClass('thisButton');
    });
    // Slider
    $('.sponsorImg').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false
    });
    $('.portfolioSlider').slick({
        autoplay: true,
        vertical: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    $("html").niceScroll({
        cursorcolor: '#f39c12',
        cursorborderradius: 30,
        cursorwidth: '10px',
        cursorminheight: 100,
        scrollspeed: 60,
        mousescrollstep: 80
    });
	
});
// Loading Page
$(window).on('load', function () {
    'use strict';
    $('.loading .sk-folding-cube').fadeOut(2000, function () {
        $('.loading').fadeOut(1000, function () {
            $('.loading').remove();
            $('.boxColor').fadeIn(0);
        });
    });
    $('.boxColor i').click(function () {
        $('.boxColor').toggleClass('showBox');
    });
    $('.boxColor ul li').click(function () {
        $("link[href*='color']").attr('href', $(this).attr("data-color"));
    });
});