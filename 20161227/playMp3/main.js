/**
 * Created by sks on 2016/12/26.
 */

(function () {
     var lrcObject = {};
  $.get("Heartbeats.lrc").done(function(data){
      lrcObject = parseLrc(data);
  })

  function parseLrc(lrcString) {
    var lrcObject = {};
      // [00:02.85]Heartbeats
      // 18518382818
      // /1[3578]\d{9}/
    var p = /\[(\d{2}):(\d{2})\.\d{2}\](.+)/g;
    while(true) {
      var result = p.exec(lrcString);
      if (result) {
        console.log(result);
        console.log(result[3]);
        var min = parseInt(result[1]);
        var second = parseInt(result[2]);
        var content = result[3];
        var seconds = min * 60 + second;
        lrcObject[seconds] = content;
      } else {
        break;
      }
    }

    // var line, position;
    // var lines = lrcString.split("\n");
    // for (var i = 0; i < lines.length; i++) {
    //   line = lines[i];
    //   var min = parseInt(line.substr(1, 2));
    //   var second = parseInt(line.substr(4,2));
    //   var seconds = min * 60 + second;
    //   var content = line.substr(10);
    //   lrcObject[seconds] = content;
    // }
    return lrcObject;
  }

  var player = document.querySelector("#player");
  var lrc = document.querySelector("#lrc");
  setInterval(function () {
    if (lrcObject) {
      var content = lrcObject[Math.floor(player.currentTime)];
      if (content) {
        lrc.innerHTML = content;
      }
    }
  }, 1000);

})()
