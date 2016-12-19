/**
 * Created by sks on 2016/12/19.
 */

LABEL:
for (var i = 0; i < 10; i++) {
    for (var j  = 0; j < 10; j++) {
        console.log(i, j);
        if (j == 5) {
            break LABEL;
        }
    }
}