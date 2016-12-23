/**
 * Created by sks on 2016/12/23.
 */
(function () {
    //当#后面的内容发生变化的时候会触发这个事件
    window.onhashchange = function() {
        changePage();
    }
    changePage();

    function changePage() {
        console.log(location.hash); //#type=text&name=abc
        var hash = location.hash.substr(1);//type=text&name=abc
        var strings = hash.split("&");//数组 type=text   name=abc
        var hashObj = {};
        for (var i = 0; i < strings.length; i++) {
            var item = strings[i];//i=0 type=text i=1 name=abc
            var items = item.split("=");// items[0] = type items[1] = text
            var key = items[0];
            hashObj[key] = items[1]; //{type:"text", name:"abc"}
        }
        console.log(hashObj);

        switch (hashObj.type) {
            case "text":
                document.querySelector("#container").innerHTML = "<h1>Hello world</h1>";
                break;
            case "image":
                document.querySelector("#container").innerHTML = "<img src='http://songb2b.oss-cn-shanghai.aliyuncs.com/images/filco.jpg' />";
                break;
        }
    }
})()
