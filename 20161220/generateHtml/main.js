/**
 * Created by sks on 2016/12/20.
 */

(function(){
    //获取按钮元素
    var btn = document.getElementById("btn");
    //第一步点击按钮触发事件
    btn.onclick = function() {
        //第二步是创建出div元素, 参数是标签名称
        var div = document.createElement("div");
        //第三步给修改div元素的内容
        div.innerHTML = "<p><span>Hello</span></p>";

        //第四步将div元素追加到页面末尾
        //document.body 可以替换为任意元素
        console.log(document.body);
        var body = document.body;
        body.appendChild(div);
        // document.body.appendChild(div);
    }

    //属性，咱们可以获取属性的值，以及设置属性的值（能不能设置属性的值取决于这个属性是否是只读）
    console.log(document.charset);//获取属性的值
    document.bgColor = "skyblue";//给属性设置值

    //方法
    var e = document.querySelector(".container");
    console.log(e);
    e.innerHTML = "Hello world";

    var es = document.querySelectorAll("div");
    console.log(es);
    for(var i=0; i<es.length; i++) {
        es[i].innerHTML = "Hello world";
        es[i].onclick = function() {
            //this表示点击事件的对象，就是div这个元素
            // document.body.removeChild(this);
            console.log(document.querySelector("#container"));
            var container = document.querySelector("#container");
            container.removeChild(this);
        }
    }

    console.log(document.querySelector("div"));
    console.log(document);
    console.log(document.body);




})()