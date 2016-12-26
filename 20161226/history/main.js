/**
 * Created by sks on 2016/12/26.
 */

(function () {
  var btnBack = document.getElementById("btn-back");
  var btnForward = document.getElementById("btn-forward");
  btnBack.addEventListener("click", function () {
    history.back();
  })
  btnForward.addEventListener("click", function () {
      history.forward();
  })
})()
