/**
 * Created by silent on 2014/12/3.
 */
(function() {
    var a = 23.3,
        b = -30.6,
        c = "10.0005";

    console.log("***** ceil *****");  // 向上舍入
    console.log(Math.ceil(a));
    console.log(Math.ceil(b));
    console.log(Math.ceil(c));

    console.log("***** floor *****");  // 向下舍入
    console.log(Math.floor(a));
    console.log(Math.floor(b));
    console.log(Math.floor(c));

    console.log("***** round *****");  // 标准四舍五入
    console.log(Math.round(a));
    console.log(Math.round(b));
    console.log(Math.round(c));
}());