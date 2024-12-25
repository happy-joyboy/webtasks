<html>
  <head>
    <title>Testing</title>
  </head>
  <body>
    <h1>Testing</h1>

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