/**
 * Created by sks on 2016/12/22.
 */

/*
一、思路
需要实现点击某个元素，然后将表格重新排序
思路1：我们将单元格里面的数据进行替换
思路2：我们将行进行重新排序
思路3：根据数据重新绘制表格，把之前的表格删除，插入新表格

二、可能用到的属性和方法
document.getElementById 根据元素ID获取元素
document.createElement 创建元素
el.innerHTML 给元素赋值
parentEl.appendChild(cihldEl) 在父元素里面追加子元素
parentEl.removeChild(childEl) 在父元素里面移除子元素

数组.length 获取数组的长度
数组[下标] 获取数组中的某一项
对象.属性   获取对象的属性值
使用冒泡排序算法进行排序
数组.reverse() 将数组中的数据进行反转

onclick="函数名" 使用点击事件触发函数

三、实现

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
        {name:"苗焱", score:4},
        {name:"李创琪", score:2},
        {name:"魏巍", score:3},
        {name:"盛燕斌", score:2}
    ];

    var container = document.getElementById("container");
    var currentTable;
    var count = 0;//标记位，当第一次的时候使用排序，以后直接将数组进行反转即可

    function createTable() {
        var table = document.createElement("table");
        //创建表格第一行
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.innerHTML = "名称";
        tr.appendChild(th);

        var th = document.createElement("th");
        var btn = document.createElement("button");
        btn.onclick = scoreButtonClickedHandler;
        btn.innerHTML = "分数";
        th.appendChild(btn);
        tr.appendChild(th);
        table.appendChild(tr);

        //根据数据动态创建表格行
        for (var i=0; i<scoreList.length; i++) {
            var item = scoreList[i];

            var tr = document.createElement("tr");
            var th = document.createElement("td");
            th.innerHTML = item.name;
            tr.appendChild(th);

            var th = document.createElement("td");
            th.innerHTML = item.score;
            tr.appendChild(th);
            table.appendChild(tr);
        }

        container.appendChild(table);
        currentTable = table;
    }

    //处理鼠标点击按钮进行排序
    function scoreButtonClickedHandler() {
        console.log("clicked");
        if (count == 0) {
            var tmp;
            for (var i = 0; i < scoreList.length; i++) {
                for (var j = i + 1; j < scoreList.length; j++) {
                    if (scoreList[i].score > scoreList[j].score) {
                        tmp = scoreList[i];
                        scoreList[i] = scoreList[j];
                        scoreList[j] = tmp;
                    }
                }
            }
        } else {
            scoreList.reverse();
        }
        count ++;

        container.removeChild(currentTable);
        createTable();
    }

    createTable();

})()