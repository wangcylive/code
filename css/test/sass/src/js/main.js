/**
 * Created by Wangcy on 2016/1/22.
 */
function getCss(ele) {
    if(window.getComputedStyle) {
        return getComputedStyle(ele, "");
    } else {
        return ele.currentStyle;
    }
}

(function() {
    var btn = document.getElementById("btnUnfoldNav"),
        list = document.getElementById("navList"),
        media = document.getElementById("jsMedia");

    btn.onclick = function() {
        if(getCss(list).display !== "block") {
            this.innerHTML = "隐藏";
            list.style.display = "block";
        } else {
            this.innerHTML = "展开";
            list.style.display = "none";
        }
    }

    window.onresize = function() {
        if(getCss(media).width == "767px" && getCss(list).display == "none") {
            list.style.display = "block";
            btn.innerHTML = "隐藏";
        }
    }
}());