<?php
/**
 * Created by PhpStorm.
 * User: sks
 * Date: 2017/1/19
 * Time: 9:22
 */
//接收传过来的参数，然后进行校验，
//如果可用返回y, 不可用返回n

$username = $_GET['username'];

if ($username == "maxwell") {
    echo "n";
} else {
    echo "y";
}