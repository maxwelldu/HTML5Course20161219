/**
 * Created by sks on 2016/12/19.
 */

(function(){
    //键值对  JSON
    // var obj = {name: "ucai", age:10};
    var obj = {};
    obj.name = "范冰冰";
    obj.age = 29;
    obj.weight = 70;

    //删除对象成员
    delete obj.name;

    console.log(obj);

    var key = "name";
    obj.name = "潘金莲";        // 使用点的方式去访问的话，
    // obj.key = "a";
    console.log(obj["name"]);  //访问的键可以使用中括号的方式
    console.log(obj[key]);
    console.log(obj.name);

})();