<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

if (isset($_POST['send'])){
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'taynara.aa.professional@gmail.com';                     //SMTP username
        $mail->Password   = 'vhegxnqbhnikwvzo';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('taynara.aa.professional@gmail.com', 'Taynara');
        $mail->addAddress('taynara.aa.professional@gmail.com', 'Taynara');     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        $mail->addReplyTo('taynara.aa.professional@gmail.com', 'Information');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = "Menssagem via Site - Portifólio Taynara";

        $body = "Segue as informações abaixo: <br>
                Nome: ". $_POST['name']."<br>
                Email: ".$_POST['email']."<br>
                Mensagem: ".$_POST['message'];
        $mail->Body = $body;

        $mail->send();
        $_SESSION['message'] = [
            'type' => 'success',
            'text' => 'Sua mensagem foi enviada com sucesso! Obrigada por entrar em contato.'
        ];
    } catch (Exception $e) {
        $_SESSION['message'] = [
            'type' => 'error',
            'text' => "Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde."
        ];
    }
    header('Location: index.php#contact');
    exit;
} else {
    $_SESSION['message'] = [
        'type' => 'error',
        'text' => 'Requisição inválida.'
    ];
    header('Location: index.php#contact');
    exit;
}
?>
