var lnStickyNavigation;

$(document).ready(function() {
    applyHeader();
    applyResize();
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