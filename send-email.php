<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user inputs
    $firstname = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    $lastname = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format';
        exit;
    }

    // Set the recipient email address
    $to = 'kpreece@kimberlypreece.tech';

    // Set the email subject
    $email_subject = 'New Form Submission';

    // Build the email content
    $message = "Name: $firstname $lastname\n";
    $message .= "Email: $email\n";
    $message .= "Subject:\n$subject";

    // Set the email headers
    $headers = "From: $firstname $lastname <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $email_subject, $message, $headers)) {
        // Redirect to success page
        header('Location: success.html');
        exit;
    } else {
        // Display an error message
        echo 'An error occurred. Please try again later.';
        exit;
    }
}
?>




