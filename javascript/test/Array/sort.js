/**
 * Created by silent on 2014/11/22.
 */
(function() {
    var a = [5, 10, -3, 4.22, 50, 100, null];
    a.sort(function(a, b) {
        if(a > b) {
            return 5.55;
        } else if(a < b) {
            return -10.33;
        } else {
            return 0;
        }
    });
    console.log(a);

    var b = [{num: 10}, {num: 5}, {num: 30}];
    b.sort(function(a, b) {
        var aNum = a.num,
            bNum = b.num;
        if(aNum > bNum) {
            return 1;
        } else if(aNum < bNum) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(b);

    var c = [55, 32, 80, 100, 90];
    c.sort(function(a, b) {
        return a - b;
    });
    console.log(c);
}());