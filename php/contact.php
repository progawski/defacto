<?php
        $from = "defacto@progawski.pl";
        $to = "defacto@progawski.pl";

        $name = $_POST['name'];
        $email = $_POST['email'];
        $content = $_POST['content'];

        $subject = "Formularz kontaktowy (wysłane przez: ".$name.")";

        $nameEmpty = false;
        $emailEmpty = false;
        $contentEmpty = false;
        $emailInvalid = false;

        if(empty($name)){
                $nameEmpty = true;  
        }
        if(empty($email)){
                $emailEmpty = true;    
        }
        if(empty($content)){
                $contentEmpty = true;    
        }

        // Remove all illegal characters from email

        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        // Validate e-mail
        if (!(filter_var($email, FILTER_VALIDATE_EMAIL))) {
               $emailInvalid = true;
        }

        // $message = "Contact name: $name\r\nContact Email: $email\r\nContact Message: $content";
        $message ='
        <html>
        <head>
        <title>Formularz kontaktowy</title>
        </head>
        <body>
        <p><b>Imię i nazwisko: </b>'.$name.'</p>
        <p><b>E-mail: </b>'.$email.'</p>
        <p><b>Wiadomość: </b></p>
        <div>'.$content.'</div>
        </body>
        </html>
        ';

        //email address settings
        $headers = "From: ".$from."\r\n";
        $headers .= "Reply-To: ".$from."\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-2\r\n";
        
        if(!($nameEmpty || $emailEmpty || $contentEmpty || $emailInvalid)){
                mb_send_mail($to, $subject, $message, $headers, "-f".$from);
        } 

        $return_arr[] = array(
                "nameEmpty" => $nameEmpty,
                "emailEmpty" => $emailEmpty,
                "contentEmpty" => $contentEmpty,
                "emailInvalid" => $emailInvalid
        );
        echo json_encode($return_arr);
?>
