var lnStickyNavigation;

$(document).ready(function() {
    applyHeader();
    applyResize();
    applyMobileNavCollapse();
    applyNavigation();
    scrollNav();
    calculateAge(new Date(1981,6,16), new Date());
});

function calculateAge(date1, date2) {
  var diff = (date2.getTime() - date1.getTime()) / 1000;
  var age

  diff /= (60 * 60 * 24);

  age = Math.abs(Math.round(diff/365.25));

  $('.age').html(age)
 }

function applyHeader() {
    $('.profile-banner').css({ height: ($(window).height()) + 'px' });
}

function applyResize() {
    $(window).on('resize', function() {
        lnStickyNavigation = $('.scroll-down').offset().top + 20;
        $('.profile-banner').css({ height: ($(window).height()) +'px' });
    });
}

function applyMobileNavCollapse() {
    $('.navbar li a').click(function(event) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
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