$(document).ready(function () {
    let isMenuActive = false;

    //need to do some form validation and add a loading modal or something
    $("#contact-form").on("submit", function (event) {
        emailjs.init("5TPwb3kOLF_MWJSG7");

        event.preventDefault();

        emailjs.sendForm("service_xraq8lh", "template_fvfhpkr", this).then(
            function (response) {
                alert("Email has been sent, we will get back to you shortly")
                document.getElementById('contact-form').reset();
            },
            function (error) {
                alert("Email could not be sent, please try again later")
                console.log("FAILED...", error);
            }
        );
    });

    $("#merch-right-arrow").click(function () {
        const selectedImage = $(".selected-image");
        const selectedImageID = Number(selectedImage.attr("id").substring(10, selectedImage.attr("id").length));

        if (selectedImageID >= 3) {
            $("#merch-img-1").addClass("selected-image");
            $("#selected-merch-image").attr("src", $("#merch-img-1").attr("src"));
        } else {
            $(`#merch-img-${selectedImageID + 1}`).addClass("selected-image");
            $("#selected-merch-image").attr("src", $(`#merch-img-${selectedImageID + 1}`).attr("src"));
        }

        selectedImage.removeClass("selected-image");
    });

    $("#merch-left-arrow").click(function () {
        const selectedImage = $(".selected-image");
        const selectedImageID = Number(selectedImage.attr("id").substring(10, selectedImage.attr("id").length));

        if (selectedImageID <= 1) {
            $("#merch-img-3").addClass("selected-image");
            $("#selected-merch-image").attr("src", $("#merch-img-3").attr("src"));
        } else {
            $(`#merch-img-${selectedImageID - 1}`).addClass("selected-image");
            $("#selected-merch-image").attr("src", $(`#merch-img-${selectedImageID - 1}`).attr("src"));
        }

        selectedImage.removeClass("selected-image");
    });

    //merch products
    $("#buy-hat-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/28o3fuctoa0cbTObII`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });

    $("#buy-sweatshirt-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/28o17mcto0pC7Dy6op`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });
    //

    //fitness plans
    $("#foundation-buy-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/test_dR6cPEbL58Wn4Le4gi`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });

    $("#accelerator-buy-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/test_dR65nc16rfkL1z27sv`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });

    $("#elite-buy-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/test_9AQeXM5mHdcDgtW148`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });
    //

    //90 Day Challenge
    $("#three-competitor-enroll-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/7sIeYc0KG8W85vqaEG`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });

    $("#ten-competitor-enroll-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/28o5nC9hcdco5vq4gj`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });

    $("#twenty-competitor-enroll-btn").on("click", function () {
        // Create a new Payment Link with the dynamic price
        const paymentLink = `https://buy.stripe.com/3cs4jy50W6O0f60004`;

        // Redirect to the Payment Link
        window.location.href = paymentLink;
    });
    //

    $(".menu-container").click(function () {
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

    $(".view-hoodie-btn").click(function () {
        window.location.href = "hoodie.html";
    });

    $(".view-cap-btn").click(function () {
        window.location.href = "baseballcap.html";
    });

    $("#menu-container").click(function () {
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

    $("#unfocused-div").click(function () {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
            window.location.href = "index.html?scrollTo=challenges";
        }
        $("html, body").animate(
            {
                scrollTop: $(".content-box-7").offset().top - 100,
            },
            1000
        );
    });

    $("#nav-button-contactme").click(function () {
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
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
        if (checkIfOnIndexPage() == false) {
            window.location.href = "index.html?scrollTo=challenges";
        }
        $("html, body").animate(
            {
                scrollTop: $(".content-box-7").offset().top - 100,
            },
            1000
        );
        hideMobileMenu();
    });

    $("#mobile-menu-contactme").click(function () {
        if (checkIfOnIndexPage() == false) {
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

    //change this to check if NOT on index page so we can redirect to from a specific item as well
    function checkIfOnIndexPage() {
        if (window.location.pathname == "/index.html") {
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
