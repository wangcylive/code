/**
 * Created by silent on 2014/11/23.
 */
function isArray(arg) {
    if(typeof Array.isArray === "function") {
        isArray = function(arg) {
            return Array.isArray(arg);
        }
    } else {
        isArray = function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        }
    }

    return isArray(arg);
}

(function() {
    var a = [],
        b = function() {},
        c = /\w/;

    console.log(isArray(a));
    console.log(isArray(b));
    console.log(isArray(c));
}());