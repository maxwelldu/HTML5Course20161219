<?php
/**
 * Created by PhpStorm.
 * User: sks
 * Date: 2017/1/20
 * Time: 10:52
 */

header("Content-Type: text/json; charset=gb2312");
$mobile = $_GET['mobile'];
$content = file_get_contents("http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=" . $mobile);
print_r($content);