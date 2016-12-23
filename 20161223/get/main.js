/**
 * Created by sks on 2016/12/23.
 */

(function () {
   var search = decodeURI( location.search);
   search = search.substr(1);
   var searchs = search.split("&");
   var searchObj = {};
   for(var i=0; i<searchs.length; i++) {
       var kv = searchs[i].split("=");
       searchObj[kv[0]] = kv[1];
   }

   var container = document.getElementById("container");
   console.log(searchObj.username);
   if (searchObj.username == "小宋") {
        container.src = "1.png";
   } else if(searchObj.username == "qi") {
        container.src = "2.png";
   }
})()
