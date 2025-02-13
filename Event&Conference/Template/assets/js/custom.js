/*----------

Theme Name: imEvent - Responsive HTML5 Template
Theme Version: 1.0

----------*/

/*====================
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader JS
3.Toogle Menu Mobile JS
4.Speaker JS
5.Sponsor JS
6.Blog JS
7.Sticky Header JS
8.Scrool To Top JS
9.Wow Animation JS
====================*/

$(document).ready(function() {

    // Whole Script Strict Mode Syntax
    "use strict";

    // Loader JS Start
    $('#loader').fadeOut();
    // Loader JS End

    // Toogle Menu Mobile JS Start
    $(".menu-toggle").click(function() {
        $(".main-navigation").toggleClass("toggled");
    });
    // Toogle Menu Mobile JS End

    // Speaker Slider JS Start
    $('.speakers-slider-wp').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
                    dots: false
                }
            }
        ]
    });
    // Speaker Slider JS End

    // Sponsor Slider JS Start
    $('.sponsors-slider-wp').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
                    dots: false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
                    dots: false
                }
            }
        ]
    });
    // Sponsor Slider JS End

    // BLog Slider JS Start
    $('.blog-slider-wp').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
                    dots: false
                }
            }
        ]
    });
    // BLog Slider JS End

})

// Sticky Header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $('.site-header').addClass('sticky-head');
        $('.scrolltotop').css({ "display": "block" });
    } else {
        $('.site-header').removeClass('sticky-head');
        $('.scrolltotop').css({ "display": "none" });
    }
});

// Scroll To Top Start
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#scrollToTop').fadeIn();
    } else {
        jQuery('#scrollToTop').fadeOut();
    }
});
jQuery(".menu-menu-1-container li a").click(function() {
    jQuery(".main-navigation").removeClass("toggled");
});
// Scroll To Top End

// Wow Animation JS Start
new WOW().init();
wow = new WOW({
    mobile: true
})
wow.init();
// Wow Animation JS End