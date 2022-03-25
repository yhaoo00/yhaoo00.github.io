<?php
    header("Access-Control-Allow-Origin: *");
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "yinghao0831@gmail.com";
    $txt ="From: ". $name . "<br> Email: " . $email . "<br> Message: " . $message;

    $mail = new PHPMailer(true);

    try {
        $mail -> isSMTP();
        $mail -> Host = 'smtp.mailtrap.io';
        $mail -> SMTPAuth = true;
        $mail -> Username = '86a57a51f4a647';
        $mail -> Password = '48fa514a977786';
        $mail -> Port = 2525;
        $mail -> setFrom($email, 'Sender');
        $mail -> addAddress('yinghao0831@gmail.com', 'Ying Hao');
        $mail -> isHTML(true);
        $mail -> Subject = $subject;
        $mail -> Body = $txt;
        $mail -> send();

        // echo 'Sent';
        header("Location: https://yhaoo00.github.io/");
    }
    catch (Exception $e)
    {
        // echo 'Fail';
    }
?>