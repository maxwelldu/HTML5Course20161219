<?php
$chengji = ["yuwen" => 100, "shuxue" => 99, "yingyu" => 44];
print_r($chengji);
//echo $chengji[0];//报错

foreach($chengji as $k => $v) {
	echo $k . " => " . $v . "\n";
}
?>

<a href="02_get.php?shuzi=8">判断数字是否为偶数</a>
