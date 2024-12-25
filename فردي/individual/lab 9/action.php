<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <form method="post" action="action.php">
        Name: <input type="text" name="name"><br>
        Email: <input type="email" name="email"><br>
        Message: <textarea name="message"></textarea><br>
        <input type="submit" value="Submit">
    </form>

    <?php
    var_dump($_REQUEST);
    if (isset($_SERVER['REQUEST_METHOD'])) {
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $name = htmlspecialchars($_POST['name']);
          $email = htmlspecialchars($_POST['email']);
          $message = htmlspecialchars($_POST['message']);

          echo "<h2>Submitted Information:</h2>";
          echo "Name: $name<br>";
          echo "Email: $email<br>";
          echo "Message: $message<br>";
      }
    } else {
      echo "Please enter a message";
    }
    ?>
</body>
</html>
