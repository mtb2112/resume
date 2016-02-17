var lnStickyNavigation;

$(document).ready(function() {
    applyHeader();
    applyResize();
    applyNavigation();
    scrollNav();
});

function applyHeader() {
    $('.profile-banner').css({ height: ($(window).height()) + 'px' });
}

function applyResize() {
    $(window).on('resize', function() {
        lnStickyNavigation = $('.scroll-down').offset().top + 20;
        $('.profile-banner').css({ height: ($(window).height()) +'px' });
    });
}

function applyNavigation() {
    applyStickyNavigation();
}

function applyStickyNavigation() {
    lnStickyNavigation = $('.scroll-down').offset().top + 20;

    $(window).on('scroll', function() {
        stickyNavigation();
    });

    stickyNavigation();
}

function stickyNavigation() {
    if($(window).scrollTop() > lnStickyNavigation) {
        $('body').addClass('fixed');
    }
    else {
        $('body').removeClass('fixed');
    }
}

function scrollNav() {
    $('.nav a, .profile-banner a').click(function(){
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 0
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}