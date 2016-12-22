/**
 * Created by sks on 2016/12/22.
 */

(function(){
    var btn = document.getElementById("btn");
    //单击事件
     btn.onclick = function(event) {
         // console.log(event);
         console.log("单击");
         //清除点击事件
         // btn.onclick = null;
     }
     //我们重复绑定onclick事件，
    // 最后绑定的生效,后面绑定的会覆盖之前绑定的
     btn.onclick = function(event) {
         console.log(1);
     }
     //用添加事件监听的方式绑定事件,可以绑定多个事件
    //target表示事件所对应的目标对象
     btn.addEventListener("click", function(event){
         console.log(2);
         console.log(event.target)
     })

    function btnClickHandler (event) {
         console.log(3);
         //事件监听的移除方式
    }
    btn.addEventListener("click", btnClickHandler);

    var remove = document.getElementById("remove");
    remove.addEventListener("click", function(event){
        //移除按钮上的单击事件
        btn.removeEventListener("click", btnClickHandler);
    })

     /*
     //双击事件
    btn.ondblclick = function(event) {
        // console.log("dblclick " + event);
        console.log("双击");
    }
    //鼠标抬起事件
    btn.onmouseup = function() {
        console.log("鼠标抬起");
    }
    //鼠标按下事件
    btn.onmousedown = function() {
         console.log("鼠标按下");
    }
    //鼠标移动事件
    btn.onmousemove = function(event) {
        // console.log(event);
        console.log("鼠标移动");
    }
    //鼠标移出事件
    btn.onmouseout = function(event) {
        console.log("鼠标移出了按钮");
    }
    //鼠标移入事件
    btn.onmouseover = function(event) {
        console.log("鼠标移动到了按钮上");
    }
    */


})()