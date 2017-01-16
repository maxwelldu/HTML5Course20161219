<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
    $a = 300;
    function fun() {
        global $a;
        echo $a;
    }
    fun();

    //双引号里面可以解析我们的变量，而单引号不可以
    echo "a的值是 {$a} ";
    echo 'a的值是 {$a} ';


?>
</body>
</html>