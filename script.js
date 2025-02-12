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

    const heightOfVideo = $("#content-video").height();
    $(".content-gif-overlay").height(heightOfVideo);
    $("#unfocused-div").height(heightOfVideo);
    const widthOfMenu = $("#mobile-menu-container").width();
    $("#mobile-menu-container").css({
        "top": "0px",  
        "right": -(widthOfMenu+100)  
      });

    $(window).resize(function() {
        // console.log("Window resized to: " + $(window).width() + "x" + $(window).height());
        $(".content-gif-overlay").height($(window).height());
    });

    $("#menu-container").click(function() {
        const widthOfMenu = $("#mobile-menu-container").width();

        if(isMenuActive) {
            console.log("HERE 1")
            $("#mobile-menu-container").animate({ right: -200 }, "slow");
            // $("#mobile-menu-container").css("display", "none");
            $("unfocused-div").css("display", "none");
            isMenuActive = false;
        } else {
            console.log("HERE 2")
            $("#mobile-menu-container").animate({ right: "0px" }, "slow");
            $("#mobile-menu-container").css("display", "flex");
            $("unfocused-div").css("display", "block");
            isMenuActive = true;
        }
    });
});