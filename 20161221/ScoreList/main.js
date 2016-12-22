/**
 * Created by sks on 2016/12/21.
 */
(function(){

    function createElement(tagName, content) {
        var e = document.createElement(tagName);
        if (content) {
            e.innerHTML = content;
        }
        return e;
    }

    var scoreList = [
        {name:"苗焱", score:1},
        {name:"李创琪", score:2},
        {name:"魏巍", score:3},
        {name:"盛燕斌", score:2}
    ];
    //根据这个数组对象，创建出一个表格出来，
    // 并放到id为container的div容器中
    for (var i=0; i<scoreList.length; i++) {
        console.log(scoreList[i]);
        console.log(scoreList[i].name);
    }

    //创建元素，给元素赋值，将元素添加到指定的父元素
    var container = document.querySelector("#container");
    var table = createElement("table");
    table.style.border = "1px solid red";
    for (var i = 0; i < scoreList.length; i++) {
        var tr = createElement("tr");
        var firsttd = createElement("td", scoreList[i].name);
        tr.appendChild(firsttd);

        var secondtd = createElement("td",scoreList[i].score);
        tr.appendChild(secondtd);
        table.appendChild(tr);
    }

    container.appendChild(table);

    //当我们写程序一般会遇到两个问题，
    // 一个是思路，
    //创建一个表格
    //创建一行
    //创建两列
    //把两列都追加到行里面
    //把行放
    // 一个是具体的知识使用


})()