/**
 * Created by sks on 2016/12/22.
 */

/**
 * 思路：
 * 使用定时器去重复的去切换img标签里面的图片
 * 使用数组存放可以使用的图片列表
 *
 * 方法：
 * 数组定义
 * document.getElementById 获取元素
 * setInterval()  定时器
 * img.src 设置图片的属性
 */
(function(){
    var i = 0;
    var images = ["01.jpg", "02.jpg", "03.jpg"];
    var img = document.getElementById("img");
    setInterval(function(){
        i++;
        /*
        if (i >= images.length) {
            i = 0;
        }
        img.src = images[i];
        */

        img.src = images[i%3];
        console.log(i);
    }, 1000);
})()