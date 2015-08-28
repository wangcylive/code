function getElemsByClass(search) {
    if(document.getElementsByClassName) {
        return document.getElementsByClassName(search);
    } else {
        var d = document,
            results = [],
            elements, regExp;
        if(d.querySelectorAll) { // IE8
            return d.querySelectorAll("." + search);
        } else {  // IE6, 7
            elements = d.getElementsByTagName("*");
            regExp = new RegExp("(^|\\s)" + search + "(\\s|$)");
            for(i = 0; i < elements.length; i++) {
                if(regExp.test(elements[i].className)) {
                    results.push(elements[i]);
                }
            }
            return results;
        }
    }
}

function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

function hasClass(ele, str) {
    var r = new RegExp("(^|\\s)" + str + "(\\s|$)");

    if("length" in ele) {
        var i = 0,
            l = ele.length;

        for(; i < l; i++) {
            if(r.test(ele[i].className)) {
                return true;
            }
        }
        return false;
    } else {
        if(r.test(ele.className)) {
            return true;
        } else {
            return false;
        }
    }
}

// function each(obj, fn) {
//     if(obj.length !==)
// }

function addClass(eles, str) {
    // if("length" in eles) {

    // } else {

    // }
    var curStr = trim(str1),
        addStr = trim(str).replace(/\s{2,}/, " ");

    if(/\S+/.test(str1)) {
        var addStrArray = addStr.split(/\s/),
            i = 0,
            l = addStrArray.length;

        for(; i < l; i++) {
            var r = new RegExp("(^|\\s)" + addStrArray[i] + "(\\s|$)");
            if(!r.test(curStr)) {
                curStr += " " + addStrArray[i];
            }
        }
    } else {
        curStr += " " + addStr;
    }

    return curStr;
}


(function() {
    console.log("js: " + hasClass(getElemsByClass("clearfix"), "footer"));
    console.log("jQuery: " + $(".clearfix").hasClass("footer"));

    // console.log(addClass(getElemsByClass("clearfix")));
    $(".footer").addClass("clearfix  font-size20px").addClass("clearfix font-size40px");
}());


// Window size: 336 x 593
// Viewport size: 320 x 480