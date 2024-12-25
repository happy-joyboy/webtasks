<!DOCTYPE html>
<html>
<body>
<?php 
$x = 13;
$y = 27;
function myTest() {
global $x, $y;
$y = $x + $y;
}
myTest(); 
echo $y;
?>
</body>
</html>