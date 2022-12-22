<?php 
// Имя.
$firstNameFormData = $_POST['firstName'];
// Телефон.
$phoneFormData = $_POST['phone'];
// Email.
$emailFormData = $_POST['email'];
// Сообщение.
$messageFormData = $_POST['message'];

$domainMail = "help@consolidacia.ru";
$subject = "Заявка с сайта consolidacia.ru"; 
$fullMessage = "<b>Имя:</b> $firstNameFormData </br> <b>Телефон:</b> $phoneFormData </br> <b>Email:</b> $emailFormData </br> <b>Сообщение:</b> $messageFormData </br>";

$headers  = "Content-type: text/html; charset = UTF-8 \r\n"; 
$headers .= "From: $domainMail\r\n"; 
$headers .= "Reply-To: $emailFormData\r\n"; 

mail($domainMail, $subject, $fullMessage, $headers); 
?>
