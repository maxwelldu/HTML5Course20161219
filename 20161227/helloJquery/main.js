/**
 * Created by sks on 2016/12/27.
 */
(function () {
  // var div = document.querySelector("#div");
  // console.log(div);
  // div.innerHTML = "Hello";
  //
  // var div = $("#div");//获取元素
  // console.log(div);
  // div.html("Hello world");//设置元素的内容
  //
  // $("#div").html("Hello world");//获取到元素，并且给赋值
  //
  //   var divs = $("div");
  //   divs.html("Hello div");
  //
  //   // divs.css("backgroundColor", "red");
  //   divs.css({backgroundColor: "red"});
  //   console.log($("#div").html());// .html() 获取html里面的内容
  //   // $("#div").html("");
  //   $("#div").empty();
  //
  //   divs.click(function (event) {
  //       $(this).remove();
  //   })

    $("#div").fadeOut("slow");
    // $("#div").innerHTML = "abc";
    $("div")[4].innerHTML = "好剑";
    console.log($("div"));

    var div = document.getElementById("div");
    console.log("js原生对象" + div);
    $(div);
    console.log("jquery对象" + $(div));
})()
