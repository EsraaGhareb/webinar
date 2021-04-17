function initiateAnimation() {
  AOS.init({
    easing: "ease-in-out-sine",
    duration: 800,
  });
}
// Preloader
$(window).on("load", function () {
  $(".loading").fadeOut(2000);
});
// Sticky Menu
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $(".nav-container ").addClass("sticky-menu").animate({
        top: 0,
      },
      4000
    );
  } else {
    $(".nav-container ").removeClass("sticky-menu").animate({
        top: 0,
      },
      4000
    );
  }
});


let rtl = !1;
if ($("body").css("direction") == "rtl") {
  rtl = !0;
}
(function ($) {

  "use strict";
  initiateAnimation();
  $(".navbar-toggler").on("click", function () {
    $(".menu").toggleClass("closed");
    $(".aside-items").toggleClass("side-open");
    $(".menu-text").toggleClass("hide");

    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }

    $("aside").toggleClass("aside-active");

    $("aside .menu").toggleClass("menu-active");
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('.why-iwebinar-slider, .team-slider').owlCarousel({
    dots: true,
    nav: false,
    rtl: rtl,

    slideBy: 1,
    items: 4,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      575: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      992: {
        items: 4,
        nav: false,
      }
    }
  });
  $(".sponsers-slider").owlCarousel({
    items: 5,
    autoplay: !0,
    slideBy: 1,
    center: !0,
    autoplayHoverPause: !0,
    mouseDrag: !0, 
    nav: !1,
    dots: !1,
    stagePadding: 10,
    responsiveClass: !0,
    responsive: {
      0: {
        items: 1,
        nav: !1,
        loop: !0
      },
      600: {
        items: 3,
        nav: !1,
        loop: !0
      },
      1000: {
        items: 4,
        nav: !1,
        loop: !0
      },
      1200: {
        items: 5,
        nav: !1,
        loop: !0
      },
    },
  });
  $(function() {
    return $(".modal").on("show.bs.modal", function() {
      var curModal;
      curModal = this;
      $(".modal").each(function() {
        if (this !== curModal) {
          $(this).modal("hide");
        }
      });
    });
  });
  // counter js 
  $('.counter').each(function () {
    let counter = $(this).find(".timer");
    counter.prop('Counter', 0).animate({
      Counter: counter.text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        counter.text(Math.ceil(now));
      }
    });
  });
  // filter-display-shape
  $('.filter-display-shape .btn').on('click', function(){
     
    let cur_btn = $(this);
    if(cur_btn.hasClass('list-display')){
      $('.events-cards').find('.col-lg-6').addClass('col-lg-12').removeClass('col-lg-6');
      $(this).addClass('active');
      $(".column-display").removeClass('active');

    }else if(cur_btn.hasClass('column-display')){
      $('.events-cards').find('.col-lg-12').addClass('col-lg-6').removeClass('col-lg-12');
      $(this).addClass('active');
      $(".list-display").removeClass('active');
    }
  })
})(jQuery);
// profile image preview
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#img-preview').attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}