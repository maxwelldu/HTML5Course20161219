<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
    $majiang = array("东", "西", "南", "北", "中");
    print_r($majiang);
    echo "<br />";
    //数组的长度
    echo count($majiang);
?>
    <ul>
        <?php for($i = 0; $i < count($majiang); $i++) {
            echo "<li>{$majiang[$i]}</li>";
//            echo "<li>".$majiang[$i]."</li>";//用点连接也可以
        } ?>
    </ul>
</body>
</html>