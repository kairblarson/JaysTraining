$(document).ready(function () {
  let isMenuActive = false;
  let onMerchPage = false;

  $(".menu-container").click(function () {
    console.log($("#menuCheckbox").prop("checked"));
    if ($("#menuCheckbox").prop("checked") == true) {
      $("#menu").animate({ left: "-=100px" }, "slow");
    } else {
      $("#menu").animate({ left: "+=100px" }, "slow");
    }
  });

  //setting the height of the gradient overlay
  const heightOfVideo = $("#content-video").height();
  $(".content-gif-overlay").height(heightOfVideo);

  //setting the height of the unfocused div for when the mobile menu is active
  $("#unfocused-div").height($(window).height);

  //placing the mobile menu off the screen
  const widthOfMenu = $("#mobile-menu-container").width();
  $("#mobile-menu-container").css({
    top: "0px",
    right: -(widthOfMenu + 100),
  });

  $(window).resize(function () {
    // console.log("Window resized to: " + $(window).width() + "x" + $(window).height());
    const heightOfVideo = $("#content-video").height();
    $(".content-gif-overlay").height(heightOfVideo);
  });

  $("#menu-container").click(function () {
    const widthOfMenu = $("#mobile-menu-container").width();

    if (isMenuActive) {
      $("#mobile-menu-container").animate({ right: -200 }, "slow");
      // $("#mobile-menu-container").css("display", "none");
      $("#unfocused-div").css("display", "none");
      $(".menu-bar").css("background-color", "gainsboro");
      isMenuActive = false;
    } else {
      $("#mobile-menu-container").animate({ right: "0px" }, "slow");
      $("#mobile-menu-container").css("display", "flex");
      $("#unfocused-div").css("display", "block");
      isMenuActive = true;
      $(".menu-bar").css("background-color", "black");
    }
  });

  $("#content-programs-btn").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=programs";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-3").offset().top - 100,
      },
      1000
    );
  });

  $("#content-contactme-btn").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=contactme";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-4").offset().top - 100,
      },
      1000
    );
  });

  //main nav buttons
  $("#nav-button-home").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=home";
    }
    $("html, body").animate(
      {
        scrollTop: $("#main").offset().top,
      },
      1000
    );
  });

  $("#nav-button-programs").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=programs";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-3").offset().top - 100,
      },
      1000
    );
  });

  $("#nav-button-aboutme").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=aboutme";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-2").offset().top - 100,
      },
      1000
    );
  });

  $("#nav-button-challenges").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=challenges";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-5").offset().top - 100,
      },
      1000
    );
  });

  $("#nav-button-contactme").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=contactme";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-4").offset().top,
      },
      1000
    );
  });

  $("#nav-button-merchandise").click(function () {
    window.location.href = "merchandise.html";
  });
  //

  //mobile nav buttons
  $("#mobile-menu-home").click(function () {
    if (checkIfOnMerchPage() == true) {
        window.location.href = "index.html?scrollTo=home";
      }
    $("html, body").animate(
      {
        scrollTop: $("#main").offset().top,
      },
      1000
    );
    hideMobileMenu();
  });

  $("#mobile-menu-programs").click(function () {
    if (checkIfOnMerchPage() == true) {
        window.location.href = "index.html?scrollTo=programs";
      }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-3").offset().top - 100,
      },
      1000
    );
    hideMobileMenu();
  });

  $("#mobile-menu-aboutme").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=aboutme";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-2").offset().top - 100,
      },
      1000
    );
    hideMobileMenu();
  });

  $("#mobile-menu-challenges").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=challenges";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-5").offset().top - 100,
      },
      1000
    );
    hideMobileMenu();
  });

  $("#mobile-menu-contactme").click(function () {
    if (checkIfOnMerchPage() == true) {
      window.location.href = "index.html?scrollTo=contactme";
    }
    $("html, body").animate(
      {
        scrollTop: $(".content-box-4").offset().top - 100,
      },
      1000
    );
    hideMobileMenu();
  });

  $("#mobile-menu-merchandise").click(function () {
    window.location.href = "merchandise.html";
    hideMobileMenu();
  });
  //

  function hideMobileMenu() {
    $("#mobile-menu-container").animate({ right: -200 }, "slow");
    // $("#mobile-menu-container").css("display", "none");
    $("#unfocused-div").css("display", "none");
    $(".menu-bar").css("background-color", "gainsboro");
    isMenuActive = false;
  }

  function checkIfOnMerchPage() {
    if (window.location.pathname == "/merchandise.html") {
      return true;
    } else {
      return false;
    }
  }

  scrollToSection();
  function scrollToSection() {
    if (window.location.search.includes("=")) {
      switch (window.location.search.substring(10, window.location.search.length)) {
        case "home":
          {
            $("html, body").animate(
              {
                scrollTop: $("#main").offset().top,
              },
              1000
            );
          }
          break;
        case "aboutme":
          {
            $("html, body").animate(
              {
                scrollTop: $(".content-box-2").offset().top - 100,
              },
              1000
            );
          }
          break;
        case "challenges":
          {
            $("html, body").animate(
              {
                scrollTop: $(".content-box-5").offset().top - 100,
              },
              1000
            );
          }
          break;
        case "programs":
          {
            $("html, body").animate(
              {
                scrollTop: $(".content-box-3").offset().top - 100,
              },
              1000
            );
          }
          break;
        case "contactme":
          {
            $("html, body").animate(
              {
                scrollTop: $(".content-box-4").offset().top - 100,
              },
              1000
            );
          }
          break;
      }
    }
  }
});
//so the issue now is that we have to redirect to the main page when on the merch page if we want the nav buttons to work so we have 2 options
//1. stay on the same page but inject the merchandise.html data into the main div when that is clicked and then switch back to the regular content when we click the nav button => we are NOT going this route because...
//we would have to put all the index data into another file
//2. use query parameters so it redirects and will scroll to wherever the query parameter says => lets go this route, this should make it easier actually
