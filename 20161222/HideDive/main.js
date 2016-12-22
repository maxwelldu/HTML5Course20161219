/**
 * Created by sks on 2016/12/22.
 */

/**
 * 思路：
 * 使用定时器，不断的改变div元素的宽高，以及透明度
 *
 * 知识点：
 * onclick = "函数名" 点击事件
 * setInterval() 定时器的使用
 * el.style.样式  修改元素的样式
 * el.clientWidth 获取元素内部宽度
 * el.clientHeight 获取元素内部高度
 *
 * 伪代码：
 * var div = 找到div;
 * var 帧 = 50;
 * div.onclick = function(){
 *      var timerID = setInterval(function(){
 *          修改div的宽
 *          修改div的高
 *          修改div的透明度
 *
 *          if(宽度为零) {
 *              clearInterval(timerID);
 *          }
 *      },1000 / 帧);
 * }
 */
(function(){
     var div = document.getElementById("div");
     var fps = 50;
     var frames = 100;
     div.onclick = function(){
         var alpha = 1;
         var width = div.clientWidth;
         var height = div.clientHeight;
         var speedAlpha = alpha / frames;
         var speedX = width / frames;
         var speedY = height / frames;

          var timerID = setInterval(function(){
                width = width - speedX;
                height = height - speedY;
                alpha = alpha - speedAlpha;

                div.style.width = width + "px";
                div.style.height = height + "px";
                div.style.opacity = alpha;

                if (width <= 0) {
                    clearInterval(timerID);
                    div.style.display = "none";
                }
              },1000 / fps);
         }
})()
