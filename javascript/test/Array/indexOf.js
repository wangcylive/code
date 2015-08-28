/**
 * Created by silent on 2014/11/23.
 */
(function() {
    var a = ["wcy", "cd", "ymy", "wc"];
    console.log(a.indexOf("cd"));

    console.log(arrayIndexOf(a, "ymy"));
}());

function arrayIndexOf(array, value) {
    if(Array.prototype.indexOf) {
        arrayIndexOf = function(array, value) {
            return array.indexOf(value);
        }
    } else {
        arrayIndexOf = function(array, value) {
            var j = array.length;
            for(var i = 0; i < j; i++) {
                if(array[i] === value) {
                    return i;
                }
            }
            return -1;
        }
    }

    return arrayIndexOf(array, value);
}