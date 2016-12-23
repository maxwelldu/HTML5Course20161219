/**
 * Created by sks on 2016/12/23.
 */

(function(){
    /**
     * 步骤：
     * 获取元素
     *
     * 添加右击事件
     * 阻止默认事件行为
     * 让菜单显示
     * 设置菜单的位置
     *
     * 给页面添加点击事件
     * 让菜单隐藏
     *
     * 知识点：
     * querySelector 查询元素
     * contextmenu 右击事件名
     * style.display 改变显示隐藏
     * event.preventDefault() 阻止事件默认行为
     * event.pageX
     * event.pageY
      */
    var div = document.querySelector("#div");
    var ul = document.querySelector("ul");

    div.addEventListener("contextmenu", function(event){
        ul.style.display = "block";
        event.preventDefault();
        ul.style.left = event.pageX + "px";
        ul.style.top = event.pageY + "px";
        console.log("event.pageX = " + event.pageX);
        console.log("event.pageY = " + event.pageY);
        console.log("event.clientX = " + event.clientX);
        console.log("event.clientY = " + event.clientY);
    })

    div.addEventListener("mouseout", function () {
        ul.style.display = "none";
    });
})()
