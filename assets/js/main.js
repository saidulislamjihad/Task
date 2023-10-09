// fixed header
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').click(function() {
    $('.nav-items-wrapper').toggleClass('menu-visible');
    $('body').toggleClass('body-overflow');
}); 

//Home slider Js
$('.home-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Testimonial slider Js
$('.testimonial-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});