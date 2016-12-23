/**
 * Created by sks on 2016/12/23.
 */

(function(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    // a.addEventListener("click", function(){
    //     console.log("clicked a");
    // })
    // b.addEventListener("click", function(){
    //     console.log("clicked b");
    // })
    // c.addEventListener("click", function(event){
    //     console.log("clicked c 1");
    //     event.stopImmediatePropagation();//阻止事件冒泡,并阻止当前元素同类型事件
    //     // event.stopPropagation();//阻止事件冒泡,阻止当前元素之外的事件
    // })
    // c.addEventListener("click", function(event){
    //     console.log("clicked c 2");
    // })

    c.addEventListener("click", function(){
        console.log("c1");
    })
    c.addEventListener("click", function () {
        console.log("捕获阶段的点击")
    }, true)

    a.addEventListener("click", function(event) {
        console.log("捕获阶段，点击 a");
        event.stopPropagation();//不仅可以阻止冒泡阶段，也可以阻止捕获阶段
    }, true)//第三个参数，传true, 表示捕获阶段

    b.addEventListener("click", function(event){
        console.log("捕获阶段, 点击 b");
    }, true);

})()