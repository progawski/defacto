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
        var position = $($(this).attr("href")).offset().top; 
        $("body, html").animate({scrollTop: position}, 1000, 'swing');
    });

    // Visibility of auto-scrolling icon

    $(window).scroll(function() {
        console.log($(window).scrollTop() + '>' + $(window).height());
        if($(window).scrollTop() > $(window).height()){
            $("#top-icon").fadeIn();
        } else {
            $("#top-icon").fadeOut();
        }
    });
    
    //Carousel

    var interval = window.setInterval(rotateCertificates, 5000);
    $('#nextCertificate').on('click', leftCertificate);
    $('#previousCertificate').on('click', rightCertificate);
    
    function rotateCertificates(){
        $('#nextCertificate').off('click');
        $('#previousCertificate').off('click');

        var firstCertificate = $('.carousel').find('.certificate:first');
        var width = firstCertificate.outerWidth();
        
        firstCertificate.animate({marginLeft: -width}, 1000, function(){
            var lastCertificate = $('.carousel').find('.certificate:last');
            lastCertificate.after(firstCertificate);
            firstCertificate.css({marginLeft: 4});
            $('#nextCertificate').on('click', leftCertificate);
            $('#previousCertificate').on('click', rightCertificate);
        });
    }

    function leftCertificate(){
        window.clearInterval(interval);
        $('#nextCertificate').off('click');
        $('#previousCertificate').off('click');

        var firstCertificate = $('.carousel').find('.certificate:first');
        var width = firstCertificate.outerWidth();

        firstCertificate.animate({marginLeft: -width}, 1000, function(){
            var lastCertificate = $('.carousel').find('.certificate:last');
            lastCertificate.after(firstCertificate);
            firstCertificate.css({marginLeft: 4});
            $('#nextCertificate').on('click', leftCertificate);
            $('#previousCertificate').on('click', rightCertificate);
            interval = window.setInterval(rotateCertificates, 5000);
        });
        }

    function rightCertificate(){
        window.clearInterval(interval);
        $('#nextCertificate').off('click');
        $('#previousCertificate').off('click');

        var firstCertificate = $('.carousel').find('.certificate:first');
        var width = firstCertificate.outerWidth();
        var lastCertificate = $('.carousel').find('.certificate:last');

        firstCertificate.before(lastCertificate);
        lastCertificate.css({marginLeft: -width});
        
        lastCertificate.animate({marginLeft: 4}, 1000, function(){
            $('#nextCertificate').on('click', leftCertificate);
            $('#previousCertificate').on('click', rightCertificate);
            interval = window.setInterval(rotateCertificates, 5000);
        });
        }



});



