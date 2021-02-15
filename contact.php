<?php
 if($_POST) {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $content = trim($_POST['content']);
    //email address settings
    $my_address = "webdeveloper@progawski.pl";
    $headers = "From: ".$email;
    $message = "Contact name: $name\nContact Email: $email\nContact Message: $content";
    $to = $my_address;
    if ( $name == "")
    {
        echo 'Name field is required';
        $result = "Name field is required"; 
    }
    else if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/", $email))
    {
        echo 'Enter a valid email address';
        $result = "Enter a valid email address"; 
    }
        else if ( strlen($content) < 10 )
    {
        echo 'Write more than 10 characters';
        $result = "Write more than 10 characters"; 
    }
    else
    {
        mail($to, 'Subject', $message, $headers);
        echo "Your mail has been sent succesfully!";
    }
}
?>