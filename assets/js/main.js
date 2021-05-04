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
        items: 2,
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
    rtl: rtl,
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
  $(".testmonials-carousel").owlCarousel({
    items: 1,
    autoplay: !0,
    slideBy: 1,
    rtl: rtl, 
    autoplayHoverPause: !0,
    mouseDrag: !0,
    nav: !1,
    dots: !0,
    stagePadding: 10,
     
  });
  $(function () {
    return $(".modal").on("show.bs.modal", function () {
      var curModal;
      curModal = this; 

      $(".modal").each(function () { 
        if (this !== curModal) {
          $(this).modal("hide"); 
        } 
      });
      if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
      }
    });
  });

  //  Toggle Password btn
  $(".togglePass").click(function () {
   let pass_wrapper = $(this).parents('.password-wrapper');
   $(this).toggleClass('hide');
   $(this).find('i, svg').toggleClass('fa-eye').toggleClass('fa-eye-slash');
   if($(this).hasClass('hide')){
    $(pass_wrapper).find(`.form-control`).attr('type' , 'password'); 
   }else{
    $(pass_wrapper).find(`.form-control`).attr('type' , 'text'); 
   }
  });
  
  //   share-btns 
  $(".share-btns button").click(function () {
    $(this).toggleClass("active"); 
  });
 
  //   search btn
  $(".search-lnk").click(function () {
    $(".search-form").slideToggle(); 
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
  $('.filter-display-shape .btn').on('click', function () {

    let cur_btn = $(this);
    if (cur_btn.hasClass('list-display')) {
      $('.events-cards').find('.col-lg-6').addClass('col-lg-12').removeClass('col-lg-6');
      $(this).addClass('active');
      $(".column-display").removeClass('active');

    } else if (cur_btn.hasClass('column-display')) {
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