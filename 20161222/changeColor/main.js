/**
 * Created by sks on 2016/12/22.
 */

(function(){
    var i = 0;
    var colors = ["yellow", "yellowgreen", "greenyellow", "orange"];
    document.getElementById("div").addEventListener("click", function(event){
        if (i >= colors.length) {
            i = 0;
        }
        event.target.style.backgroundColor = colors[i++];
    })
    console.log(document);
})()
