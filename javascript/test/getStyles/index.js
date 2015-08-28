function getStyles(elem) {
    if(window.getComputedStyle) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    } else if(document.documentElement.currentStyle) {
        return elem.currentStyle;
    }
}


(function() {
    var header = document.getElementById("header");

    console.log(document.defaultView.getComputedStyle(header, ":hover").backgroundColor);

    console.log("getStyles() header padding-left:" + getStyles(header).paddingLeft);
    console.log("jquery header padding-left:" + $(header).css("padding-left") + "\n");

    console.log("getStyles() html font-size:" + getStyles(document.documentElement).fontSize);
    console.log("jquery html font-size:" + $("html").css("font-size"));
}());