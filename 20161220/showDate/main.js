/**
 * Created by sks on 2016/12/20.
 */
(function(){
    /**
     * 在页面里面显示当前的时间，2016-12-20 11:15:08
     * document.body.innerText
     */

    /**
     * 格式化日期
     *
     * Example：
     * formatDate(5)
     * 输出 05
     *
     * @param num {Number} 需要处理的数字
     * @returns {string}
     */
    function formatDate(num) {
        // if (num < 10) {
        //     return "0" + num;
        // } else {
        //     return num;
        // }

        // if (num < 10) {
        //     return "0" + num;
        // }
        // return num;

        return num < 10 ? "0" + num : num;
    }
    var date = new Date();

    document.body.innerText = date.getFullYear() +
            "-" + formatDate(date.getMonth()+1) +
            "-" + formatDate(date.getDate()) +
            " " + formatDate(date.getHours()) +
            ":" + formatDate(date.getMinutes()) +
            ":" + formatDate(date.getSeconds());
})()
