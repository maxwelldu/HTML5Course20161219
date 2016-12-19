/**
 * Created by sks on 2016/12/19.
 */
(function(){
    var date = new Date();
    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());

    console.log(Date.now());
    //时间应用，比如在上传图片的文件名，下订单的订单号，或者控制缓存文件

})()