/*-----------------------------------------------------------------------------------

    Template Name: Hooves

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]

      01. mobile-nav
      02. search-box-outer 
      03. countTo
      04. accordion-item
      05. scrollTop
      06. #desktop-menu
      07. quality-horse-swiper
      08. hs-quotes-swiper
      09. hs-client-img-list-two
      10. gallery-ul li
      11. li-pd-imgs

-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
/*-- 01. mobile-nav ---------------*/
  jQuery('.mobile-nav .menu-item-has-children').on('click', function(e) {
      if ( jQuery( this ).hasClass('active') ) {
            jQuery(this).removeClass('active');
          } else {
            jQuery( '.mobile-nav .menu-item-has-children' ).removeClass('active');
            jQuery(this).addClass('active');
          }
        }); 
        jQuery('#nav-icon4').click(function($){
            jQuery('#mobile-nav').toggleClass('open');
        });
        jQuery('#res-cross').click(function($){
           jQuery('#mobile-nav').removeClass('open');
        });
          jQuery('.bar-menu').click(function($){
            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();
        });
        jQuery('#res-cross').click(function($){
           jQuery('#mobile-nav').removeClass('open');
        });
  });
/*-- 02. search-box-outer ---------------*/ 
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
/*-- 03. countTo ---------------*/  
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }

  jQuery(function($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
      formatter: function(value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      }
    });

    /* start all the timers */
    $(".timer").each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  }); 
/*-- 04. accordion-item ---------------*/ 

  $('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
  });
 
/*-- 05. scrollTop ---------------*/
  function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }

  function animate(element) {
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }

  }
/*-- 06. #desktop-menu ---------------*/ 

  $('#desktop-menu').click(function(){
          $(this).toggleClass('open');
          $('.desktop-menu').toggleClass('open');
      });
   
  $(function() {
    $(window).scroll(function() {
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
   let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#9b865e ${scrollValue}%, #fff ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  // end
 
/*-- 07. quality-horse-swiper ---------------*/
    if (typeof Swiper !== 'undefined') {
      var swiper = new Swiper(".quality-horse-swiper", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: true, 
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
    });
    var swiper = new Swiper(".every-time-swiper", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: true,
      spaceBetween: 30, 
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
    }); 

/*-- 08. hs-quotes-swiper ---------------*/      
      var swiper = new Swiper(".hs-quotes-swiper", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: true, 
      autoplay: {
        delay: 3000,
      }, 
      navigation: {
        nextEl: ".custom-two-next",
        prevEl: ".custom-two-prev",
      },
    });
/*-- 09. hs-client-img-list-two----------------*/      
      var swiper = new Swiper(".hs-client-img-list-two", { 
      loop: true,
      speed:1000,
      freeMode: true, 
      autoplay: {
        delay: 3000,
      }, 
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      });
 
  }

/*-- 10. gallery-ul li ---------------*/  
 $(".gallery-ul li").hover(function(){
      $(".gallery-ul li").removeClass("active");
      $(this).addClass("active");
    });

/*-- 11. li-pd-imgs ---------------*/
    $('.li-pd-imgs').on('click', function() {

      var img_src = "";

      $('.li-pd-imgs.nav-active').removeClass('nav-active');

      $(this).addClass('nav-active');

      img_src = $(this).find('img').attr('src');

      $('.pd-main-img').children('img').attr('src', img_src);

    });
    
 
 $(".quote-btn").click(function() {
  $(".contact-popup").fadeIn(500);
    });
  $(".close-popup").click(function() {
  $(".contact-popup").fadeOut(500);
});
