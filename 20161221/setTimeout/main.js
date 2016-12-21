/**
 * Created by sks on 2016/12/21.
 */
(function(){
    // window.setTimeout()
    //开启一个定时器，并且在3秒钟之后执行
    var timeoutID = setTimeout(function(){
        console.log("Hi JS");
    }, 3000);

    // console.log(timeoutID);
    // 清除定时器
    // clearTimeout(timeoutID);

    var index = 0;
    var timerID = setInterval(function(){
        console.log("Hello " + index);
        index++;

        if (index >= 10) {
            clearInterval(timerID);
        }
    }, 1000);
    console.log(timerID);

})()