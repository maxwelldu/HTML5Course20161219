/**
 * Created by sks on 2016/12/26.
 */

(function () {
  // var string = "Hello 2016 12 26 World 14 41";
  // console.log(string.replace(/o/g, "a"));

    //正则对象.lastIndex //下一次开始查找的位置
    //正则对象.exec() //查找下一个符合条件的字符
  // var p = /o/g;
  // console.log(p.lastIndex);
  // var result = p.exec(string);
  // console.log(result, "下一次的开始位置 " + p.lastIndex);
  // result = p.exec(string);
  // console.log(result, "下一次的开始位置 " + p.lastIndex);
  // result = p.exec(string);
  // console.log(result, "下一次的开始位置 " + p.lastIndex);

    var string = "Hello1 2016 12 261 World 14 41";
    // var p = /\d/g; //\d匹配数字 [0-9]
    // var p = /[ol]/g;//[ol] 匹配字符o，或者l
    // var p = /[a-f]/g; //相当于 [abcdef]
    // var p = /[^ol]/g;
    // var p = /\d+/g; //匹配到多个数字，碰到非数字就结束一次匹配
    // var p = /[a-zA-Z]+\d*/g;//表示小写字符或大写字符任意多个，后面跟上数字0个或多个
    // var p  = /.{2}/g;//.表示除\n之外的任何字符，{}表示量词区间
    //  var p  = /\d{2}/g;//{}表示量词区间
    // var p = /\d{3,}/g;
    var p = /^.*\d*$/g; //^以什么字符开始  $表示以什么字符结束, \w表示a-zA-Z0-9_

    while (true) { //表达式会返回一个布尔值的结果，true|false
      var result = p.exec(string);
      if (result) {//表达式会返回一个布尔值的结果，true|false
        console.log(result);
      } else {
        break;
      }
    }

    var email = "abcdef.com";
    var p = /\w+@\w+\.\w+/g;
    console.log(p.test(email));

    var mobile = "18810481912";
    var p = /^1[34578]\d{9}$/g;
    console.log(p.test(mobile));

    var mobile = "fdkjlsalkfds18810481912fdjlksa18518281828abcd18612839283";
    var p = /(1[34578]\d{9}).*?(1[34578]\d{9})/g;
    console.log(p.exec(mobile));

})()
