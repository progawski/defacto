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
    
    // Smooth auto-scrolling

    $("a[href^='#']").click(function(e) {
        e.preventDefault(); 
        if($(this).attr("href") == "#top"){
            $("body, html").animate({scrollTop: 0}, 1000, 'swing');
        } 
        else{
            var position = $($(this).attr("href")).offset().top; 
            $("body, html").animate({scrollTop: position}, 1000, 'swing');
        }   
    });

});



