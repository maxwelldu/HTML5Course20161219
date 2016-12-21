/**
 * Created by sks on 2016/12/20.
 */

(function(){
        // 根据ID获取到元素
        var div = document.getElementById("first");
        console.log(div);
        // div.innerText = "<b>div</b>";
        div.innerHTML = "<b>div</b>";

        // 根据类名获取元素，second是class属性的名称
    var divs = document.getElementsByClassName("second");
    console.log(divs);
    for(var i = 0; i < divs.length; i++) {
        divs[i].innerText = "hahaha" + i;
    }

    // 根据标签名称获取元素，div是标签名称
    var divs = document.getElementsByTagName("div");
    // get_elements_by_id 无效的，常用的下划线命名，
    // 以及最常用的是驼峰命名
    console.log(divs);
    for(var i = 0; i < divs.length; i++) {
        divs[i].innerText = "heiheihei "+i;
    }

    //修改元素的样式
    var spans = document.getElementsByTagName("span");
    console.log(spans);
    var span = spans[0];//
    console.log(span);
    //css样式里面带中横线的属性，需要把中横线去掉，
    // 将第二个单词的首字母

    span.style.color = "skyblue";
    //css background-color
    span.style.backgroundColor = "gray";
    span.style.fontWeight = 700;

})()