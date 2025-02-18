$( document ).ready(function() { 
    let isMenuActive = false;

    $(".menu-container").click(function() {
        console.log($("#menuCheckbox").prop("checked"));
        if($("#menuCheckbox").prop("checked") == true) {
            $("#menu").animate({ left: "-=100px" }, "slow");
        } else {
            $("#menu").animate({ left: "+=100px" }, "slow");
        }
    })

    //setting the height of the gradient overlay
    const heightOfVideo = $("#content-video").height();
    $(".content-gif-overlay").height(heightOfVideo);

    //setting the height of the unfocused div for when the mobile menu is active
    $("#unfocused-div").height($(window).height);

    //placing the mobile menu off the screen
    const widthOfMenu = $("#mobile-menu-container").width();
    $("#mobile-menu-container").css({
        "top": "0px",  
        "right": -(widthOfMenu+100)  
      });


    $(window).resize(function() {
        // console.log("Window resized to: " + $(window).width() + "x" + $(window).height());
        const heightOfVideo = $("#content-video").height();
        $(".content-gif-overlay").height(heightOfVideo);
    });

    $("#menu-container").click(function() {
        const widthOfMenu = $("#mobile-menu-container").width();

        if(isMenuActive) {
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

    //main nav buttons
    $("#content-programs-btn").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-3').offset().top - 100
        }, 1000);
    })

    $("#content-contactme-btn").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-4').offset().top - 100
        }, 1000);
    })

    $("#nav-button-home").click(function() {
        $('html, body').animate({
            scrollTop: $('#main').offset().top
        }, 1000);
    })

    $("#nav-button-programs").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-3').offset().top - 100
        }, 1000);
    })

    $("#nav-button-aboutme").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-2').offset().top - 100
        }, 1000);
    })

    $("#nav-button-challenges").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-5').offset().top - 100
        }, 1000);
    })

    $("#nav-button-contactme").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-4').offset().top
        }, 1000);
    })
    //

    //mobile nav buttons
    $("#mobile-menu-home").click(function() {
        $('html, body').animate({
            scrollTop: $('#main').offset().top
        }, 1000);
        hideMobileMenu();
    })

    $("#mobile-menu-programs").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-3').offset().top
        }, 1000);
        hideMobileMenu();
    })

    $("#mobile-menu-aboutme").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-2').offset().top
        }, 1000);
        hideMobileMenu();
    })

    $("#mobile-menu-challenges").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-5').offset().top
        }, 1000);
        hideMobileMenu();
    })

    $("#mobile-menu-contactme").click(function() {
        $('html, body').animate({
            scrollTop: $('.content-box-4').offset().top
        }, 1000);
        hideMobileMenu();
    })
    //

    function hideMobileMenu() {
        $("#mobile-menu-container").animate({ right: -200 }, "slow");
        // $("#mobile-menu-container").css("display", "none");
        $("#unfocused-div").css("display", "none");
        $(".menu-bar").css("background-color", "gainsboro");
        isMenuActive = false;
    }
});