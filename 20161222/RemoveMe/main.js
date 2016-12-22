/**
 * Created by sks on 2016/12/22.
 */

/**
 * 批量添加10个div,设置内容，追加到页面
 * 给他们绑定事件
 * 当我们点击div时把自己移除
 *
 */
(function(){

    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = "div";
        //给div元素添加id属性
        div.id = "div" + i;
        //给 div元素添加class名称，因为class是关键字，
        // 所以添加class的时候使用 className
        div.className = "text";
        div.addEventListener("click", function(event){
             document.body.removeChild(event.target);
            // document.body.removeChild(this);
        })
        document.body.appendChild(div);
    }

})()