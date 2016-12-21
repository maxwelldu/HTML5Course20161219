/**
 * Created by sks on 2016/12/21.
 */

(function(){
    var width = 1;
    var bar = document.querySelector(".bar");
    var txt = document.querySelector(".txt");

    function syncWidth(){
        var cssvalue = width + "%";
        bar.style.width = cssvalue;
        txt.innerHTML = cssvalue;
    }

    var timerID = setInterval(function(){
        syncWidth();
        width++;
        // if (width > 100) {
        //     clearInterval(timerID);
        // }
        width > 100 && clearInterval(timerID);
    },50);
})()