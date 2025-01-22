<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $message = addslashes($_POST['message']);

    $to = "taynara.aa@outlook.com";
    $subject = "Contato - Portifólio Taynara";
    $body = "Nome: ".$name. "\r\n".
            "Email: ".$email. "\r\n".
            "Mensagem: ".$message;
    $header = "From:thay483@outlook.com"."\r\n".
                "Reply-To:".$email."\r\n".
                "X=Mailer:PHP/".phpversion();
    
    if (mail($to, $subject, $body, $header)) {
        echo("Email enviado com sucesso!");
    } else {
        echo("O email não pode ser enviado.");
    }
}
?>