function requireJs(url, callback) {
    var js = document.createElement("script");
    js.src = url;
    js.async = "async";

    var fn = typeof callback === "function" ? callback : function(){};

    if("onload" in js) {
        js.onload = function() {
            fn();
        }
    } else {
        js.onreadystatechange = function() {
            if(js.readyState === "loaded" || js.readyState === "complete") {
                fn();
            }
        }
    }
    document.body.appendChild(js);
}

function requireCss(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}