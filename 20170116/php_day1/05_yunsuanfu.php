<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
    echo 1 + 2 % 6 * 8; //17
    echo "<br />";
    echo 1 . "2" * 4; //18
    echo "<br />";
    echo 1 . "2" + 4; //16
    echo "<br />";
    echo true && !false || false;  //1
    echo "<br />";
    echo 6 == "6";//1
    echo "<br />";

    $a = 10;
    $b = $a++ + ++$a;
    echo $a;
    echo "<br />";
    echo $b;

?>
</body>
</html>