const $ = jQuery.noConflict();

$(document).ready(function ($) {
  "use strict";

  /************************************
   * Responsive Menu
   ************************************/
  const menuClick = $("a.elemadded"),
    navbarVertical = $(".menu-box");

  menuClick.on("click", function (e) {
    e.preventDefault();

    if (navbarVertical.hasClass("active")) {
      navbarVertical.slideUp(300).removeClass("active");
    } else {
      navbarVertical.slideDown(300).addClass("active");
    }
  });

  $(".trigger").on("click", function () {
    $(".search-bar").animate({ width: "toggle" }, 500);
  });

  $(window).load(function () {
    // Ensures that the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // Fades out that covers the site
    $("body").delay(350).css({ overflow: "visible" });
  });

  try {
    $(".html-style").tooltip(options);
  } catch (err) {}

  const $searchbar = $(".search-input");
  const $searchtrigger = $("#trigger");

  $searchtrigger.on("click", function () {
    $searchbar.slideToggle(300);
  });

  /************************************
   * Mobile Menu
   ************************************/

  // Create the dropdown base
  $("<select />").appendTo("#nav");

  $("<option />", {
    selected: "selected",
    value: "",
    text: "Main Menu",
  }).appendTo("#nav select");

  // Populate dropdown with menu items
  $(".sf-menu a").each(function () {
    const el = $(this);
    $("<option />", {
      value: el.attr("href"),
      text: el.text(),
    }).appendTo("#nav select");
  });

  $("#nav select").change(function () {
    window.location = $(this).find("option:selected").val();
  });

  /************************************
   * Carousels
   ************************************/

  //  Responsive layout, resizing the items
  try {
    $("#foo1").carouFredSel({
      responsive: true,
      width: "100%",
      scroll: 1,
      auto: false,
      prev: "#prev1",
      next: "#next1",
      items: {
        width: 300,
        height: 430,
        visible: {
          min: 1,
          max: 4,
        },
      },
    });
  } catch (err) {}

  //  Responsive layout, resizing the items
  try {
    $("#foo2").carouFredSel({
      responsive: true,
      width: "100%",
      scroll: 1,
      auto: false,
      prev: "#prev2",
      next: "#next2",
      items: {
        width: 300,
        height: 430,
        visible: {
          min: 1,
          max: 4,
        },
      },
    });
  } catch (err) {}

  /************************************
   * Quotes
   ************************************/
  try {
    $(".bxslider").bxSlider({
      mode: "horizontal",
      slideMargin: 0,
      auto: true,
    });
  } catch (err) {}

  /************************************
   * Tabs (blog.html)
   ************************************/

  $(".tab-links li a").on("click", function (e) {
    e.preventDefault();
    if (!$(this).parent("li").hasClass("active")) {
      const link = $(this).attr("href");

      $(this).parents("ul").children("li").removeClass("active");
      $(this).parent().addClass("active");

      $(".tabs-widget > div").hide();

      $(link).fadeIn();
    }
  });
  /****************************************
   * Flexslider Settings
   ****************************************/

  try {
    const SliderPost = $(".flexslider");

    SliderPost.flexslider({
      animation: "swing",
      slideshowSpeed: 4000,
    });
  } catch (err) {}

  /******************************************
   * Slider Animation Settings (about.html)
   ******************************************/

  try {
    const slider = $(".chart-percent");
    slider.appear(function () {
      const animateElement = $(".meter > span");
      animateElement.each(function () {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate(
            {
              width: $(this).data("origWidth"),
            },
            1200
          );
      });
    });
  } catch (err) {}

  /******************************************
   * To Top of Page settings
   ******************************************/

  $('a[href="#top"]').on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /******************************************
   * Login Window
   ******************************************/

  $(document).ready(function () {
    $("a.login-window").on("click", function () {
      // Getting the variable's value from a link
      const loginBox = $(this).attr("href");

      // Fades in the login box
      $(loginBox).fadeIn(300);

      // Set the center alignment padding + border
      const popMargTop = ($(loginBox).height() + 24) / 2;
      const popMargLeft = ($(loginBox).width() + 24) / 2;

      $(loginBox).css({
        "margin-top": -popMargTop,
        "margin-left": -popMargLeft,
      });

      // Adds the mask to the body
      $("body").append('<div id="mask"></div>');
      $("#mask").fadeIn(300);

      return false;
    });

    // When clicking on the button close or the mask layer the popup closed
    $("a.close, #mask").on("click", function () {
      $("#mask , .login-popup").fadeOut(300, function () {
        $("#mask").remove();
      });
      return false;
    });
  });

  // Adds the 'inactive' class to each accordian header (checkout.html)
  $(".accordion-header").toggleClass("inactive-header");

  // Opens the first Accordion section upon page loading (checkout.html)
  $(".accordion-header")
    .first()
    .toggleClass("active-header")
    .toggleClass("inactive-header");
  $(".accordion-content").first().slideDown().toggleClass("open-content");

  // Accordion settings (checkout.html)
  $(".accordion-header").on("click", function () {
    if ($(this).is(".inactive-header")) {
      $(".active-header")
        .toggleClass("active-header")
        .toggleClass("inactive-header")
        .next()
        .slideToggle()
        .toggleClass("open-content");
      $(this).toggleClass("active-header").toggleClass("inactive-header");
      $(this).next().slideToggle().toggleClass("open-content");
    } else {
      $(this).toggleClass("active-header").toggleClass("inactive-header");
      $(this).next().slideToggle().toggleClass("open-content");
    }
  });

  return false;
});
