/**
 * Created by sks on 2016/12/23.
 */

(function(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    //event.eventPhase表示事件阶段对应的数字
    a.addEventListener("click", function (event) {
        console.log("捕获阶段a ", event.eventPhase);
    }, true);
    b.addEventListener("click", function (event) {
        console.log("捕获阶段b ", event.eventPhase);
    }, true);
    c.addEventListener("click", function (event) {
        console.log("目标阶段 c ", event.eventPhase);
    });
    b.addEventListener("click", function (event) {
        console.log("冒泡阶段 b ", event.eventPhase);
    });
    a.addEventListener("click", function (event) {
        console.log("冒泡阶段 a ", event.eventPhase);
    });

})()
