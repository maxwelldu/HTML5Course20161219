/**
 * Created by sks on 2016/12/20.
 */
(function(){
    var btn = document.getElementById("btn");
    btn.innerHTML = "click me";

    // function btnClick(){
    //
    // }
    // btn.onclick = btnClick();
    btn.onclick = function(){
        alert("我被点名了");
    }
})()