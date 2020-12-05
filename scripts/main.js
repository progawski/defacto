$(document).ready(function(){

    // Hamburger effect and menu slider

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active"); 
        $("#menu").slideToggle();
    });

    $(window).resize(function() {
        if($(window).width() >= 768) {
            $("#menu").css("display", "");
            $hamburger.removeClass("is-active"); 
        }
    });
    
});



