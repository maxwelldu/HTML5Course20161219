/**
 * Created by sks on 2016/12/26.
 */

(function () {
     var lrcObject = {};
    /**
     * 思路：
     * 1.获取歌词文件
     * 2.解析歌词文件，变成一个对象，对象里面有时间和内容
     * 3.开启定时器，根据播放器的时间显示不同的歌词内容
     *
     * 使用到的知识点：
     * document.querySelector()
     * 字符串.split()
     * 字符串.indexOf()
     * 字符串.substring()
     * 字符串.substr()
     * parseInt()
     * isNaN()
     * Element.innerHTML
     * setInterval()
     * player.currentTime
     * 对象[属性] = 值
     */
  $.get("Heartbeats.lrc").done(function(data){
      lrcObject = parseLrc(data);
  })

  function parseLrc(lrcString) {
    var lrcObject = {};
    var line, position;
    var lines = lrcString.split("\n");
    for (var i = 0; i < lines.length; i++) {
      line = lines[i];
      var min = parseInt(line.substr(1, 2));
      var second = parseInt(line.substr(4,2));
      var seconds = min * 60 + second;
      var content = line.substr(10);
      lrcObject[seconds] = content;
    }
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
