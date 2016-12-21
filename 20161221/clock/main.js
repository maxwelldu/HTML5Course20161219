/**
 * Created by sks on 2016/12/21.
 */
/**
 * Created by sks on 2016/12/20.
 */
(function(){

    function formatDate(num) {
        return num < 10 ? "0" + num : num;
    }

    function showDate() {
        var date = new Date();
        document.body.innerText = date.getFullYear() +
            "-" + formatDate(date.getMonth()+1) +
            "-" + formatDate(date.getDate()) +
            " " + formatDate(date.getHours()) +
            ":" + formatDate(date.getMinutes()) +
            ":" + formatDate(date.getSeconds());
    }
    showDate();
    setInterval(showDate, 1000);
})()
