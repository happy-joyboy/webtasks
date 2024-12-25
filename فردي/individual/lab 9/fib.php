<html>
  <head>
    <title>Fibonacci page</title>
  </head>
  <body>
    <?php
      function fib($i) {
        if ($i <= 1) return 1;
        return fib($i - 1) + fib($i - 2);
      }

      echo fib(5);
    ?>
  </body>
</html>