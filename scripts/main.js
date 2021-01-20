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

    // $("#top-icon").css("visibility", "0");

    // $(window).scroll(function() {
    //     if($(window).scrollTop() > $(window).height()){
    //         $("#top-icon").css({
    //             opacity : 0.7,
    //             transition : "opacity 0.3s ease-in-out"
    //         });
    //     } else {
    //         $("#top-icon").css({
    //             opacity : 0,
    //             transition : "opacity 0.3s ease-in-out"
    //         });
    //     }
    // });
    
    //Carousel

    //var interval = window.setInterval(rotateCertificates, 5000);

    var numCertificates = $('.certificate').length;
    var currentCertificate = 1;

    console.log(numCertificates);

    $('#certificates-counter').text(currentCertificate + '/' + numCertificates);


    $('.certificate').slice(3).hide(); //Show only 3 certificates

    $('#btn-left').on('click', function(){
        currentCertificate--;
        if(currentCertificate < 1){
            currentCertificate = numCertificates;
        }
        $('#certificates-counter').text(currentCertificate + '/' + numCertificates);
    })
    $('#btn-right').on('click', function(){
        currentCertificate++;
        if(currentCertificate > numCertificates){
            currentCertificate = 1;
        }
        $('#certificates-counter').text(currentCertificate + '/' + numCertificates);
    })

    // $('.certificate').eq(2).each(function(){

    // })

    // var interval = window.setInterval(rotateCertificates, 5000);
    // $('#nextCertificate').on('click', leftCertificate);
    // $('#previousCertificate').on('click', rightCertificate);
    
    // function rotateCertificates(){
    //     $('#nextCertificate').off('click');
    //     $('#previousCertificate').off('click');

    //     var firstCertificate = $('.carousel').find('.certificate:first');
    //     var width = firstCertificate.outerWidth();
        
    //     firstCertificate.animate({marginLeft: -width}, 1000, function(){
    //         var lastCertificate = $('.carousel').find('.certificate:last');
    //         lastCertificate.after(firstCertificate);
    //         firstCertificate.css({marginLeft: 4});
    //         $('#nextCertificate').on('click', leftCertificate);
    //         $('#previousCertificate').on('click', rightCertificate);
    //     });
    // }

    // function leftCertificate(){
    //     window.clearInterval(interval);
    //     $('#nextCertificate').off('click');
    //     $('#previousCertificate').off('click');

    //     var firstCertificate = $('.carousel').find('.certificate:first');
    //     var width = firstCertificate.outerWidth();

    //     firstCertificate.animate({marginLeft: -width}, 1000, function(){
    //         var lastCertificate = $('.carousel').find('.certificate:last');
    //         lastCertificate.after(firstCertificate);
    //         firstCertificate.css({marginLeft: 4});
    //         $('#nextCertificate').on('click', leftCertificate);
    //         $('#previousCertificate').on('click', rightCertificate);
    //         interval = window.setInterval(rotateCertificates, 5000);
    //     });
    //     }

    // function rightCertificate(){
    //     window.clearInterval(interval);
    //     $('#nextCertificate').off('click');
    //     $('#previousCertificate').off('click');

    //     var firstCertificate = $('.carousel').find('.certificate:first');
    //     var width = firstCertificate.outerWidth();
    //     var lastCertificate = $('.carousel').find('.certificate:last');

    //     firstCertificate.before(lastCertificate);
    //     lastCertificate.css({marginLeft: -width});
        
    //     lastCertificate.animate({marginLeft: 4}, 1000, function(){
    //         $('#nextCertificate').on('click', leftCertificate);
    //         $('#previousCertificate').on('click', rightCertificate);
    //         interval = window.setInterval(rotateCertificates, 5000);
    //     });
    //     }



});



