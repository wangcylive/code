/**
 * Created by Wangcy on 2014/11/21.
 */
define(function(require) {

    var para = require("./get-href-param"),
        arr = [];

    for(var x in para) {
        arr.push(x, para[x]);
    }

    return arr;
});