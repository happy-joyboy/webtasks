<!DOCTYPE html> 
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body > 
<?php
$t = date("a"); 
echo "<p>The hour (of the server) is " . $t; 
echo ", and will give the following message:</p>"; 
if ($t < "12") {
echo "Have a good morning!"; } 
elseif ($t < "20") {
echo "Have a good day!"; } 
else {
echo "Have a good night!"; }
?>
</body> 
</html>