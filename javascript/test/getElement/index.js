function getElemById(ele) {
    return document.getElementById(ele);
}

function getElemsByName(eles) {
    return document.getElementsByName(eles);
}

function getElemsByTag(eles) {
    return document.getElementsByTagName(eles);
}

function getElemByQuery(ele) {
    if(document.querySelector) {
        return document.querySelector(ele);
    } else {
        return null;
    }
}

function getElemsByQuery(eles) {
    if(document.querySelectorAll) {
        return document.querySelectorAll(eles);
    } else {
        return null;
    }
}

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

(function() {
    // getElementById
    console.log("ById:" + "nodeName=" + getElemById("header").nodeName + "\n");

    // getElementsByName
    console.log("ByName:" + "length=" + getElemsByName("sex").length + "  [0].nodeName="
            + getElemsByName("sex")[0].nodeName + "\n");

    // getElementsByTagName
    console.log("ByTagName:" + "length=" + getElemsByTag("li").length + "  [0].nodeType="
            + getElemsByTag("li")[0].nodeType + "\n");

    // querySelector
    console.log("querySelector:" + "nodeName=" + getElemByQuery(".clearfix").nodeName 
            + "  instanceof Object  " + (getElemByQuery(".clearfix") instanceof Object) + "\n");

    // querySelectorAll
    console.log("querySelectorAll:" + "length=" + getElemsByQuery(".clearfix").length
            + "  [1].nodeName=" + getElemsByQuery(".clearfix")[1].nodeName +
            "  instanceof Object  " + (getElemsByQuery(".clearfix") instanceof Object) + "\n");

    // getElementsByClassName
    console.log("ByTagClassName:" + "length=" + getElemsByClass("clearfix").length + "  [0].nodeName="
            + getElemsByClass("clearfix")[0].nodeName + "  instanceof Object  "
            + (getElemsByClass("clearfix") instanceof Object) + "\n");
}());