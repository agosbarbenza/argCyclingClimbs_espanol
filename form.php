<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Datos para el correo
$destinatario = "ciclismorena@gmail.com";
$asunto = "Mail desde Ciclismorena";

$carta = "From: $name \n";
$carta .= "E-mail: $email \n";
$carta .= "Message: $message \n";

mail($destinatario, $asunto, $carta);
header('Location:mensajeDeEnvio.html');

?>