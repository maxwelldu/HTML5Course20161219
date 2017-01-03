/**
 * Created by sks on 2017/1/3.
 */

/**
 * 实现吸顶效果
 * 思路：
 * 监听窗口滚动事件
 *
 * 滚动的时候判断文档离窗口顶部的距离
 * 比如在大于0的时候给导航栏添加一个样式，这个样式的
 * 定位是fixed，如果文档距顶部距离小于等于0则取消这个
 * 样式
 */
(function () {
    $(window).scroll(function () {
        console.log(1);
        var top = $(document).scrollTop();
        console.log(top);
    });
})()