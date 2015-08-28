/**
 * Created by Wangcy on 2015/5/31.
 */

function onPrefixedEvent(ele, type, callback) {
    var prx = ["webkit", "moz", "MS", "o", ""];
    for(var i = 0, length = prx.length; i < length; i++) {
        if(!prx[i]) {
            type = type.toLowerCase();
        }
        ele.addEventListener(prx[i] + type, callback, false);
    }
}

function getPrefixedCss(css) {
    var prx = ["webkit", "moz", "MS", "o", ""],
        length = prx.length,
        style = document.documentElement.style,
        attr;

    while(length) {
        css = css.replace(/\w/, function(s) {
            return !prx[--length] ? s.toLowerCase() : s.toUpperCase();
        });

        attr = prx[length] + css;

        if(attr in style) {
            return attr;
        }
    }
}

var locationSearch = (function() {
    var search = window.location.search.substring(1),
        obj = {};
    if(search) {
        var arr = search.split("&"),
            length = arr.length;

        while(length) {
            var attr = arr[--length].split("=");
            obj[decodeURIComponent(attr[0])] = !!attr[1] ? decodeURIComponent(attr[1]) : undefined;
        }
    }

    return obj;
}());

(function() {
    var w = window,
        d = document,
        dh = document.documentElement,
        page = d.getElementById("page"),
        applyReason = d.getElementById("applyReason"),
        reasonItem = applyReason.querySelectorAll(".item"),
        btnFreeApply = d.getElementById("freeApply"),
        btnBack = d.getElementById("btnBack"),
        btnApply = d.getElementById("btnApply"),
        btnShare = d.getElementById("btnShare"),
        touchTips = d.getElementById("touchTips");

    var applyReasonStyle = applyReason.style,
        touchTipsStyle = touchTips.style;

    var shareInfo = {
        title: "推荐一款客户留存管理工具",
        intro: "方便的营销方案管理，智能的客户消费分析，马上免费开启贵店的O2O之旅",
        href: (function() {
            return location.href + "?pageType=share";
        }())
    };

    var applyPageHref = "apply.html?pageType=reason";

    var forEach = Array.prototype.forEach;


    var transform = getPrefixedCss("transform"),
        transition = getPrefixedCss("transition");


    // 记录切换索引
    var itemIndex = 0,
        maxItemIndex = reasonItem.length - 1;

    var viewRatio = 10/16;

    var dHeight, dWidth;

    var setViewSize = function() {
        dWidth = dh.clientWidth;
        dHeight = dh.clientHeight;

        if(dWidth/dHeight > viewRatio) {
            page.style.width = dHeight * viewRatio + "px";
        } else {
            page.style.removeProperty("width");
        }
        page.style.height = dHeight + "px";
        forEach.call(reasonItem, function(item) {
            item.style.height = dHeight + "px";
        });
        applyReasonStyle[transform] = "translateY(" + -itemIndex * dHeight + "px)";
    };

    setViewSize();

    w.addEventListener("resize", setViewSize, false);

    var isTransition = 0;  // 是否在动画中

    var moveThreshold = 20;  // 滑动阈值
    var startY, moveY, identifier;

    function slideDown() {
        if(!isTransition && itemIndex < maxItemIndex) {
            isTransition = 1;
            ++itemIndex;

            if(itemIndex < maxItemIndex) {
                touchTipsStyle.display = "block";
            } else {
                touchTipsStyle.display = "none";
            }

            applyReasonStyle[transform] = "translateY(" + -itemIndex * dHeight + "px)";
            applyReasonStyle[transition] = "all .8s ease-out";
        }
    }

    function slideUp() {
        if(!isTransition && itemIndex > 0) {
            isTransition = 1;
            --itemIndex;
            applyReasonStyle[transform] = "translateY(" + -itemIndex * dHeight + "px)";
            applyReasonStyle[transition] = "all .8s ease-out";

            touchTipsStyle.display = "block";
        }
    }

    applyReason.addEventListener("touchstart", function(event) {
        var touches = event.touches[0];
        startY = touches.screenY;
        identifier = touches.identifier;
    }, false);

    applyReason.addEventListener("touchmove", function(event) {
        event.preventDefault();
    }, false);

    applyReason.addEventListener("touchend", function(event) {
        var touches = event.changedTouches[0];
        moveY = touches.screenY -startY;

        if(touches.identifier === identifier) {
            if(moveY > moveThreshold) {
                slideUp();
            } else if(moveY < -moveThreshold) {
                slideDown();
            }
        }
    }, false);

    onPrefixedEvent(applyReason, "TransitionEnd", function(event) {
        applyReasonStyle[transition] = "all 0s";
        isTransition = 0;
    });

    w.addEventListener("DOMMouseScroll", function(event) {
        var detail = event.detail;
        if(detail == 3) {
            slideDown();
        } else {
            slideUp();
        }
    }, false);

    w.addEventListener("mousewheel", function(event) {
        var detail = event.wheelDelta;
        if(detail == -120) {
            slideDown();
        } else {
            slideUp();
        }
    }, false);

    /*点击弹出免费进驻申请*/
    var className = "on",
        hideTimeout;

    hideTimeout = setTimeout(function() {
        btnFreeApply.classList.remove(className);
    }, 3000);

    applyReason.addEventListener("click", function() {
        if(itemIndex < maxItemIndex) {
            var classList = btnFreeApply.classList;
            if(classList.contains(className)) {
                classList.remove(className);
            } else {
                clearTimeout(hideTimeout);
                classList.add(className);
                hideTimeout = setTimeout(function() {
                    classList.remove(className);
                }, 3000);
            }
        }
    }, false);


    //分享页面去掉返回按钮，申请进驻修改为页面地址
    if(locationSearch.pageType == "share") {
        btnBack.style.display = "none";
        btnApply.href = applyPageHref;
        btnFreeApply.href = applyPageHref;

        btnShare.style.display = "none";
    }

    // 分享功能
    var shareUrl = "",
        shareArray = [];
    for(var m in shareInfo) {
        shareArray.push(encodeURIComponent(m) + "=" + encodeURIComponent(shareInfo[m]));
    }
    shareUrl = "againh5://?type=share&" + shareArray.join("&");

    btnShare.addEventListener("click", function() {
        window.location.href = shareUrl;
    }, false);
}());