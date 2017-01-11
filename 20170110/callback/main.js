/**
 * Created by sks on 2017/1/10.
 */

/**
 * 顺序执行
 * 循环结构
 * 选择结构
 *
 * 我现在出发，到了通知你
 * 这是一个异步的流程，“我出发”这个过程中（函数执行）
 * “你”可以去做任何事，“到了”（函数执行完毕）
 * “通知你”（回调）进行之后的流程：
 */
(function () {
   //正常执行的一个函数, 我们希望在函数执行
    //完之后通过调用传进来的函数通知到调用方
    /*
    // 基本格式
   function doSomething(cb) {
      console.log('do something');
      //函数执行完成，通知
       cb();
   }
   function callback() {
      console.log("我是回调函数，事情已搞定");
   }
   doSomething(callback);
   */

    /*
    //强化了函数，防止出错, 尝试传递的是调用函数
    function doSomething(cb) {
        console.log('do something');
        if (typeof(cb) === "function") {
            cb();
        }
    }
    function callback() {
        console.log("我是回调函数，事情已搞定");
    }
    // var c = callback();
    // console.log("c = " + c);
    doSomething(callback());
    */

    /*
    //通过匿名函数的方式实现回调
    //传递参数
    function doSomething(message, cb) {
        console.log(message);
        if (typeof(cb) === "function") {
            cb();
        }
    }

    doSomething("Hello 3c", function() {
        console.log("和jquery的callbak形式一样");
    });
    */

    /*
    //使用call方法
    function Thing(name) {
        this.name = name;
    }
    Thing.prototype.doSomething = function(callback) {
        //调用我们的回调，但是使用的是我们自己实例
        callback.call(this);
    }

    function foo() {
        console.log(this.name);
    }
    var t = new Thing("小旭");
    t.doSomething(foo);
    */

     // /* call调用，再加上参数
    function Thing(name) {
        this.name = name;
    }
    Thing.prototype.doSomething = function(callback, sayHi) {
        //调用我们的回调，但是使用的是我们自己实例
        callback.call(this, sayHi);
    };
    function foo(hi) {
        console.log(hi + this.name);
    }
    var t = new Thing("小旭");
    t.doSomething(foo, "Hi ");
    // */
})();