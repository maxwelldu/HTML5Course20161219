<?php
/**
 * Created by PhpStorm.
 * User: sks
 * Date: 2017/1/17
 * Time: 11:06
 */

print_r($_GET);
/*
$name = $_GET['name'];
$age = $_GET['age'];
*/

/**
 * GET传参，参数名为 shuzi
 * php程序接受这个参数，并判断这个数是否是偶数，并输出
 */
$shuzi = $_GET['shuzi'];
if ($shuzi % 2 === 0) {
    echo $shuzi . " 是偶数";
} else {
    echo $shuzi . " 是奇数";
}
echo $shuzi % 2 === 0 ? "{$shuzi}是偶数" : "{$shuzi}是奇数";
?>





