/**
 * Created by silent on 2014/11/23.
 */
(function() {
    var a = [1, 2, 3];
    var b = a.concat(4, [5, 6, 7]);
    console.log(b);

    a.push(4, [5, 6, 7]);
    console.log(a);
}());