$( document ).ready(function() { 
    $(".menu-container").click(function() {
        console.log($("#menuCheckbox").prop("checked"));
        if($("#menuCheckbox").prop("checked") == true) {
            $("#menu").animate({ left: "-=100px" }, "slow");
        } else {
            $("#menu").animate({ left: "+=100px" }, "slow");
        }
    })
});