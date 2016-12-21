/**
 * Created by sks on 2016/12/20.
 */
(function(){
    console.log(document);
    //获取元素
    var btn = document.getElementById("btn");
    console.log(btn);
    console.log(typeof btn);
    //修改元素的内容
    btn.innerHTML = "click me";

    // function btnClick(){
    //      alert("Hello");
    // }
    // btn.onclick = btnClick;
    //给按钮元素添加点击事件，事件的内容咱们用匿名函数
    btn.onclick = function(){
        alert("我被点名了");
    }

})()