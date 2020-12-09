(function() {
  'use strict';
  $(document).ready(function() {
    const timelineAnimate;
    timelineAnimate = function(elem) {
      return $(".timeline.animated .timeline-row").each(function(i) {
        const bottom_of_object, bottom_of_window;
        bottom_of_object = $(this).position().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          return $(this).addClass("active");
        }
      });
    };
    timelineAnimate();
    return $(window).scroll(function() {
      return timelineAnimate();
    });
  });

}).call(this);
