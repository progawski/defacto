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
            smallCarousel = false;
        }
    });

    $('.certificate-container:first .certificate').addClass('scale-50');
    $('.certificate-container:nth(2) .certificate').addClass('scale-50');
    
    // Smooth auto-scrolling

    $(".nav-link[href^='#']").click(function(e) {
        e.preventDefault(); 
        var id = $(this).attr("href");
        if(id !== '#start'){
            var position = $(id + ' .title').offset().top; 
            $("body, html").animate({scrollTop: position}, 1000, 'swing');
        }
    });

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

    /* Fulscreen modal */

    var modal = $('#modal');
    var modalContent = $('#modal-content');
    var certificate = $('.certificate');
    var closeModal = $('#close-modal')

    certificate.on('click', function(){
        modal.show();
        modal.css('display', 'flex');
        modalContent.attr('src', $(this).attr('src'));
    });

    closeModal.on('click', function(){
        modal.hide();
    })

    $(document).on('keyup', function(e){
        if(e.key === 'Escape'){
            modal.hide();
        }
    })

    /* Get current year */

    $("#current-year").text(new Date().getFullYear());

});



