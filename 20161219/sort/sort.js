/**
 * Created by sks on 2016/12/19.
 */
(function(){
    var a = 0;
    function sort(numbers) {
        for (var i = 0; i < numbers.length; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] > numbers[i]) {
                    numbers[i] = numbers[i] + numbers[j];
                    numbers[j] = numbers[i] - numbers[j];
                    numbers[i] = numbers[i] - numbers[j];
                }
            }
        }
    }

    //把sort函数公开到顶级作用域
    window.sort = sort;

})()