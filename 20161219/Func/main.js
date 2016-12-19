/**
 * Created by sks on 2016/12/19.
 */

function add(a, b) {
    console.log(arguments);
    return a + b;
}
var c = add(3, 5);
console.log(c);

function addNumber() {
    console.log(arguments);
    console.log(typeof arguments);
    var result = 0;
    for(var i=0; i< arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
var all = addNumber(1, 2, 5, 10, 20);
console.log("result:" + all);