var mymap = L.map('map').setView([-3.104891, -60.006464], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker([-3.104891, -60.006464]).addTo(mymap);

$(function() {
  $(document).scroll(function() {
    var $nav = $('.fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.scroll[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#nav',
    offset: 54
  });
})(jQuery);
