/**
 * Created by Wangcy on 2014/12/5.
 */
var gradesMap = function(arg) {
    var result = "a",
        map = {
            "-6": [1],
            "-5": [2],
            "-4": [3],
            "-3": [4],
            "1": [5],
            "2": [6],
            "3": [7],
            "4": [8],
            "5": [9],
            "6": [10],
            "7": [11],
            "8": [12],
            "9": [13, 17],
            "10": [14],
            "11": [15],
            "12": [16, 18, 19]
        };
    if(arg.toString().indexOf(",") === -1) {
        for(var x in map) {
            if(map[x].indexOf(Number(arg)) !== -1) {
                result = x;
                break;
            }
        }
    } else {
        var value = [],
            has = false,
            arr = arg.split(","),
            i = 0,
            length = arr.length;
        for(i; i < length; i++) {
            has = false;
            for(var x in map) {
                if(map[x].indexOf(Number(arr[i])) !== -1) {
                    has = true;
                    value.push(x);
                    break;
                }
            }
            if(!has) {
                value.push("a");
            }
        }
        result = value.join(",");
    }

    return result;
};