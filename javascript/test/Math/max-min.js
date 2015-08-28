/**
 * Created by silent on 2014/12/3.
 */
(function() {
    var a = [10, 20, -30, 505.533, 40, -100];

    console.log(Math.max(1, 3, 3, 5));
    console.log(Math.min(-10, -30, 55, 7878));

    console.log(Math.min.apply(Math, a));

    console.log(Math.max.apply(Math, a));
}());