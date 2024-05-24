 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about-me').offset().top }, 'slow');
      return false;
    });
  });
