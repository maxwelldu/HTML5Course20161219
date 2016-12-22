/**
 * Created by sks on 2016/12/22.
 */

(function(){
    var div = document.getElementById("div");
    //contextmenu 事件是我们鼠标右击事件
    div.addEventListener("contextmenu", function(event) {
        console.log(11);
        event.preventDefault();//阻止事件默认行为
        console.log(event.pageX);
        console.log(event.pageY);
    })
})()