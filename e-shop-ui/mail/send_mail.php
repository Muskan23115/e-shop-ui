<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "muskansharma23115@gmail.com"; 
  $subject = "New Query from E-Shop";

  $name = strip_tags($_POST["name"]);
  $email = strip_tags($_POST["email"]);
  $message = strip_tags($_POST["message"]);

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>
