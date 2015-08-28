/**
 * Created by Wangcy on 2014/11/21.
 */
define(["getHrefParam"], function(a) {
    var para = a,
        arr = [];

    for(var x in para) {
        arr.push(x, para[x]);
    }

    return arr;
});