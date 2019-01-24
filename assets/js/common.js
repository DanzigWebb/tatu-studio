

$(document).ready(function() {
    $("#my-menu").mmenu({
        extensions: [ 'effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right', 'theme-dark' ],
        navbar: {
            title: '<img src="https://livedemo00.template-help.com/wt_prod-16368/images/logo-181x25.png">'
        },
        "counters": true,
                    "iconbar": {
                    "add": true,
                    "top": [
                        "<a href='/'><i class='fa fa-home'></i></a>",
                    ],
                    "bottom": [
                        "<a href='https://vk.com/id128989093' target='_blank'><i class='fab fa-vk'></i></a>",
                        "<a href='#/'><i class='fas fa-envelope'></i></a>",
                        "<a href='https://api.whatsapp.com/send?phone=79500247418' target='_blank'><i class='fab fa-whatsapp'></i></a>"
                    ],
                    }
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#my-page"
        }
    });
    
    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
        })
    });


$(document).ready(function(){
    $('.gallery-carousel').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });
    $('.staff-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:120,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:1,
                nav:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false
            }
        }
    });
    });
