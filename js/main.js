(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();

      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();

  var onePageClick = function () {
    $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, "href");

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        500,
        function () {
          // window.location.hash = href;
        }
      );
    });
  };

  onePageClick();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            // console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // magnific popup
})(jQuery);

$(function () {
  $(".progress").each(function () {
    var value = $(this).attr("data-value");
    var left = $(this).find(".progress-left .progress-bar");
    var right = $(this).find(".progress-right .progress-bar");

    if (value > 0) {
      if (value <= 50) {
        right.css("transform", "rotate(" + percentageToDegrees(value) + "deg)");
      } else {
        right.css("transform", "rotate(180deg)");
        left.css(
          "transform",
          "rotate(" + percentageToDegrees(value - 50) + "deg)"
        );
      }
    }
  });

  function percentageToDegrees(percentage) {
    return (percentage / 100) * 360;
  }
});

// resume download and view
const resume = document.querySelectorAll(".resume-btn-bar");
resume.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("./images/Akshay-Chavan-Resume.pdf", "_blank");
  });
});

// github calender
GitHubCalendar(".react-activity-calendar", "akshaychavan010101", {
  responsive: true,
});

const calendar = document.querySelector(".react-activity-calendar");
calendar.style.backgroundColor = "black";
calendar.style.borderRadius = "10px";
calendar.style.padding = "1rem";
calendar.style.marginTop = "1rem";

// contact form

const submit_btn = document.getElementById("submit-btn");
async function sendMsgfun(event) {
  event.preventDefault();

  const form = new FormData(event.target);
  const data = Object.fromEntries(form.entries());

  submit_btn.value = "Sending...";
  try {
    const promise = await fetch(
      "https://eager-red-gaiters.cyclic.app/sendmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await promise.json();
    submit_btn.value = "Send Message";

    if (res.msg == "Mail Sent Successfully") {
      swal("Message sent successfully", "", "success");
      document.querySelector(".contact-form").reset();
    } else {
      swal("Something went wrong", "", "error");
    }
  } catch (error) {
    console.log(error);
    submit_btn.value = "Send Message";
    swal("Something went wrong", "", "error");
  }
}

const scrollLittle = document.querySelectorAll(".down_btn");

scrollLittle.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "#about-section";
  });
});
