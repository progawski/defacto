
$(document).ready(function(){
    $(".close").click(function(){
        $("#message-success").hide();
    })
    $("#btnSend").on('click touchstart', function(){
        $.ajax({
            url: "./php/contact.php",
            method: "POST",
            dataType: "json",
            data: {
                name: $("#name").val(), 
                email: $("#email").val(), 
                content: $("#content").val()
            },
        }).done(function(data){
            if(data[0].nameEmpty || data[0].emailEmpty || data[0].contentEmpty || data[0].emailInvalid){
                if(data[0].nameEmpty){         
                    $("#name").css({
                        'border': '1px solid #ff0000'
                    });
                } else{
                    $("#name").css({
                        'border' : 'none',
                    });
                }
                if(data[0].emailEmpty){         
                    $("#email").css({
                        'border': '1px solid #ff0000'
                    });
                } else{
                    $("#email").css({
                        'border' : 'none',
                    });
                }
                if(data[0].contentEmpty){         
                    $("#content").css({
                        'border': '1px solid #ff0000'
                    });
                } else{
                    $("#content").css({
                        'border' : 'none'
                    });
                }
                if(data[0].emailInvalid){      
                    $("#email").css({
                        'border': '1px solid #ff0000'
                    });
                }
            } 
            else{
                $("#message-success").fadeIn('slow').delay(2000).fadeOut('slow');
                $("#name").val('');
                $("#email").val('');
                $("#content").val('');
            }       
        }).fail(function(){
            alert("Error!");
        });
    });
});
