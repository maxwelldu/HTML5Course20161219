/**
 * Created by sks on 2016/12/26.
 */

(function () {
  // IE6 "MSIE 6"
    var userAgent = navigator.userAgent;
    alert(userAgent);
    if (userAgent.indexOf("MSIE 5") !== -1 ||
        userAgent.indexOf("MSIE 6") !== -1 ||
        userAgent.indexOf("MSIE 7") !== -1 ||
        userAgent.indexOf("MSIE 8") !== -1) {
        document.body.innerHTML = "<h1 style='color:red'>您的浏览器版本过低，请升级到IE9或者使用其他浏览器</h1>";
    } else {
        document.body.innerHTML = "<h1>显示正常内容</h1>";
    }

})()