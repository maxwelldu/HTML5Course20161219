/**
 * Created by sks on 2016/12/21.
 */
(function(){
    var trs = document.querySelectorAll("tr");
    console.log(trs);
    trs[0].style.backgroundColor = "red";
    for(var i=1; i<trs.length; i++) {
        trs[i].style.backgroundColor = i % 2 == 0 ? "green" : "blue";
    }
})()