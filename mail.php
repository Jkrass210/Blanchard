<?php
//подключаем файлы
//require 'phpmailer/PHPMailer';
//require 'phpmailer/SMTP';
//require 'phpmailer/Exception';

$title = "Тема письма";

$c = true;
//формирование письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value )  {
  if ( $value !="" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b> $key</b><td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value<td>
    </tr>
    ";
  }
}

$body = "<table style='widh: 100%;'>$body</table>";

//настрйка PhPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth  = true;

  //настройки почты
  $mail->Host        = 'smtp.gmail.com'; //SMTP сервера вашей почты
  $mail->Username    = 'jkrass210@gmail.com'; //логин почты
  $mail->Password    = 'egpsskgajkdxzpcv'; //Пароль на почте
  $mail->SMTPSecute  = 'ssl';
  $mail->Port        = 465;

  $mail->setFrom('jkrass210@gmail.com', 'Заявка с вашего сайта'); //адрес почты отправлителя

  $mail->addAddress('jkrass210@gmail.com');//поолучатель
  $mail->addAddress('zoo_cry@mail.ru');//поолучатель


  //отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
} catch (Exception $e) {
  $status = "Cooбщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


