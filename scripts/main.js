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

    

   

    var numCertificates = $('.certificate').length;
    var currentCertificate = 1;

    console.log(numCertificates);

    $('#certificates-counter').text(currentCertificate + '/' + numCertificates);
    $('.certificate-container:first .certificate').addClass('scale-50');
    $('.certificate-container:nth(2) .certificate').addClass('scale-50');


    $('#btn-left').on('click', rotateLeft);


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


        secondCertificate.fadeTo(500, 0.5);
        thirdCertificate.fadeTo(500, 1);

        firstCertificate.children().removeClass('scale-50 scale-100').addClass('scale-0');
        secondCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');
        thirdCertificate.children().removeClass('scale-0 scale-50').addClass('scale-100');
        lastCertificate.children().removeClass('scale-0 scale-100').addClass('scale-50');

        // firstCertificate.children().animate({
        //     height: '20%'
        // }, {duration: 500, queue: false});
        // secondCertificate.children().animate({
        //     height: '50%'
        // }, {duration: 500, queue: false});
        // lastCertificate.children().animate({
        //     height: '20%',
        // }, {duration: 500, queue: false});
        // thirdCertificate.children().animate({
        //     height: '100%',
        // }, {duration: 500, queue: false});
        firstCertificate.animate({
            marginLeft: -width
        }, {duration: 500, queue: false, complete: function(){
            lastCertificate.after(firstCertificate);
            // firstCertificate.children().css('width', '100%');
            $('#btn-left').on('click', rotateLeft);
            firstCertificate.css({
                marginLeft: '0',
            });
        }});
        
        // secondCertificate.children().animate({
        //     width: '40%'
        // }, {duration: 500, queue: false});
        // thirdCertificate.children().animate({
        //     width: '100%'
        // }, {duration: 500, queue: false, complete: function(){
            
        
            // firstCertificate.children().css({
            //     width: '40%'
            // });
        // }});
        
        

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



