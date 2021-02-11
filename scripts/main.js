$(document).ready(function(){

    
 

    // Hamburger effect and menu slider

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active"); 
        $("#menu").slideToggle();
    });

    var smallCarousel = false;

    $(window).resize(function() {
        if($(window).width() >= 768) {
            $("#menu").css("display", "");
            $hamburger.removeClass("is-active"); 
            smallCarousel = false;
        }
    });

    $('.certificate-container:first .certificate').addClass('scale-50');
    $('.certificate-container:nth(2) .certificate').addClass('scale-50');
    
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

    var numCertificates = $('.certificate').length;
    var currentCertificate = 1;

    $('#certificates-counter').text(currentCertificate + '/' + numCertificates);


    $('#btn-left').on('click', rotateLeft);
    $('#btn-right').on('click', rotateRight);


    function rotateLeft(){
        $('#btn-left').off('click');
        currentCertificate++;
        if(currentCertificate > numCertificates){
            currentCertificate = 1;
        }

        $('#certificates-counter').text(currentCertificate + '/' + numCertificates);

        var firstCertificate = $('#carousel-container').find('.certificate-container:first');
        var secondCertificate = $('#carousel-container').find('.certificate-container:nth(1)');
        var thirdCertificate = $('#carousel-container').find('.certificate-container:nth(2)');
        var lastCertificate = $('#carousel-container').find('.certificate-container:last');
        var width = firstCertificate.outerWidth();

        firstCertificate.children().removeClass('scale-50 scale-100').addClass('scale-0');
        secondCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');
        thirdCertificate.children().removeClass('scale-0 scale-50').addClass('scale-100');
        lastCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');


        firstCertificate.animate({
            marginLeft: -width
        }, {duration: 500, queue: false, complete: function(){
            lastCertificate.after(firstCertificate);
            $('#btn-left').on('click', rotateLeft);
            firstCertificate.css({
                marginLeft: '0',
            });
        }});
        
    }
    function rotateRight(){
        $('#btn-right').off('click');
        currentCertificate--;
        if(currentCertificate < 1){
            currentCertificate = 4;
        }

        $('#certificates-counter').text(currentCertificate + '/' + numCertificates);

      
        var firstCertificate = $('#carousel-container').find('.certificate-container:nth(2)');
        var secondCertificate = $('#carousel-container').find('.certificate-container:nth(1)');
        var thirdCertificate = $('#carousel-container').find('.certificate-container:first');
        var lastCertificate = $('#carousel-container').find('.certificate-container:last');
       
        var width = firstCertificate.outerWidth();

        thirdCertificate.before(lastCertificate);
        lastCertificate.css({marginLeft: -width});

        firstCertificate.children().removeClass('scale-50 scale-100').addClass('scale-0');
        secondCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');
        thirdCertificate.children().removeClass('scale-0 scale-50').addClass('scale-100');
        lastCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');



        lastCertificate.animate({
            
            marginLeft: 0
        }, {duration: 500, queue: false, complete: function(){
           
            $('#btn-right').on('click', rotateRight);
      
            
        }});
        
    }


    // $('#btn-right').on('click', function(){
    //     currentCertificate--;
    //     if(currentCertificate < 1){
    //         currentCertificate = numCertificates;
    //     }


    //     $('#certificates-counter').text(currentCertificate + '/' + numCertificates);

    //     $('.certificate').eq(2).animate({
    //         height: '0px',
    //         width: '0px'
    //     }, 1000, function(){

    //     });
    // })
});



