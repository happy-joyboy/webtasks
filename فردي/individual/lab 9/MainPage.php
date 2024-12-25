<html>
  <head>
    <title>Main page</title>
  </head>
  <body>
    <?php
    $IsLoggedIn = false; // Change this to false to test the other condition
    $UserName = "John";

    echo "<div style='text-align: center; margin-top: 30%;'>";
    if ($IsLoggedIn) {
        echo "Hello, $UserName";
    } else {
        echo "Hello Stranger";
    }
    echo "</div>";
    ?>
  </body>
</html>