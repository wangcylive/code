/**
 * Created by wangcy on 2015/6/9.
 */
function addPrefixedEvent(ele, type, callback) {
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

function pullRefresh(callback) {
    var config = {
        changeRatio: 2.5,                // 滑动距离和下拉距离差比
        maxDistance: 90,                 // 最大下拉距离
        triggerClass: "on",              // 触发className
        triggerDistance: 60,             // 触发时间距离
        triggerTransitionDuration: 0.8,  // 触发过渡动画时间
        restoreTransitionDuration: 0.3   // 未触发过渡动画时间
    };

    var fn = "function" === typeof callback ? callback : function() {};

    var w = window,
        d = document,
        body = d.body,
        iconRefresh = d.getElementById("iconRefresh");

    if(null === iconRefresh) {
        iconRefresh = d.createElement("div");
        iconRefresh.className = "icon-refresh";
        iconRefresh.id = "iconRefresh";
        body.appendChild(iconRefresh);
    }

    var transform = getPrefixedCss("transform"),
        transition = getPrefixedCss("transition"),
        iconRefreshStyle = iconRefresh.style,
        defaultRule = "translateY(0px) rotate(0deg)",
        refreshTransitionRule = "translateY(60px) rotate(-360deg)";

    iconRefreshStyle[transform] = defaultRule;
    iconRefreshStyle.opacity = 0;

    var startY, isTop, isRefresh, isTransition, touchIdentifier;

    w.addEventListener("touchstart", function(event) {
        var touches = event.touches,
            touch = touches[0],
            scrollTop = body.scrollTop;

        if(touches.length === 1) {
            touchIdentifier = touch.identifier;

            startY = touch.screenY;
            if(scrollTop === 0 && !isTransition) {
                isTop = 1;
            } else {
                isTop = 0;
            }
        }
    }, false);

    w.addEventListener("touchmove", function(event) {
        var touch = event.touches[0],
            moveY = touch.screenY - startY,
            changeY = moveY / config.changeRatio;

        if(isTop && moveY >= 0) {
            event.preventDefault();

            iconRefreshStyle[transform] = "translateY(" + Math.min(config.maxDistance, changeY) + "px) rotate(" + moveY + "deg)";
            iconRefreshStyle.opacity = Math.min(1, changeY / config.triggerDistance);

            if(changeY > config.triggerDistance) {
                iconRefresh.classList.add(config.triggerClass);
            } else {
                iconRefresh.classList.remove(config.triggerClass);
            }
        }

    }, false);

    w.addEventListener("touchend", function(event) {
        var touch = event.changedTouches[0],
            moveY = touch.screenY - startY,
            changeY = moveY / config.changeRatio;

        if(touch.identifier === touchIdentifier && isTop && moveY > 0) {
            isTransition = 1;

            if(changeY > 50) {
                isRefresh = 1;
            } else {
                isRefresh = 0;
            }

            iconRefreshStyle[transition] = isRefresh ? "all " + config.triggerTransitionDuration + "s" : "all " + config.restoreTransitionDuration + "s";

            iconRefreshStyle[transform] = isRefresh ? refreshTransitionRule : defaultRule;
        }
    }, false);

    addPrefixedEvent(iconRefresh, "TransitionEnd", function() {
        isTransition = 0;
        iconRefreshStyle[transition] = "all 0s";
        iconRefreshStyle[transform] = defaultRule;
        if(isRefresh) {
            isRefresh = 0;
            iconRefresh.classList.remove(config.triggerClass);
            fn();
        }
    });

}

pullRefresh(function() {
    window.location.reload(true);
})

;(function() {
    var w = window,
        d = document,
        dm = d.documentElement,
        body = d.body,
        list = d.getElementById("list"),
        height = d.getElementById("height"),
        input1 = d.getElementById("input1"),
        input2 = d.getElementById("input2"),
        iconRefresh = d.getElementById("iconRefresh"),
        transform = getPrefixedCss("transform"),
        transition = getPrefixedCss("transition");

    var heightText = d.createTextNode(height.offsetHeight);
    height.appendChild(heightText);

    list.addEventListener("click", function(event) {
        var target = event.target;
        if(target.nodeType === 1 && target.nodeName === "LI") {
            console.log(target.textContent);
        }
    }, false);

    var refreshClass = "on";
    var startY, isTop, isRefresh, isTransition;

    iconRefresh.style[transform] = "translateY(0px) rotate(0deg)";

    w.addEventListener("touchstart", function(event) {
        var touches = event.touches,
            touch = touches[0],
            scrollTop = document.body.scrollTop;

        if(touches.length === 1) {
            startY = touch.screenY;
            if(scrollTop === 0 && !isTransition) {
                isTop = 1;
            } else {
                isTop = 0;
            }
        }

        input1.value = startY;
    }, false);

    var moveScreenX, moveScreenY;
    /*w.addEventListener("touchmove", function(event) {
        var touch = event.touches[0],
            moveY = touch.screenY - startY,
            changeY = moveY / 2.5;

        moveScreenX = touch.screenX;
        moveScreenY = touch.scaleY;

        input2.value = isTop + " " + moveY;
        if(isTop && moveY >= 0) {
            event.preventDefault();

            iconRefresh.style[transform] = "translateY(" + (changeY > 80 ? 80 : changeY) + "px) rotate(" + moveY + "deg)";

            if(changeY > 50) {
                iconRefresh.classList.add(refreshClass);
            } else {
                iconRefresh.classList.remove(refreshClass);
            }
        }

    }, false);*/

    /*w.addEventListener("touchend", function(event) {
        var touch = event.changedTouches[0],
            moveY = touch.screenY - startY,
            changeY = moveY / 2.5;

        if(touch.identifier === 0 && isTop && moveY > 0) {
            isTransition = 1;

            if(changeY > 50) {
                isRefresh = 1;
            } else {
                isRefresh = 0;
            }

            iconRefresh.style[transition] = isRefresh ? "all .8s" : "all .3s";

            iconRefresh.style[transform] = isRefresh ? "translateY(50px) rotate(-360deg)" : "translateY(0px)";
        }
    }, false);

    addPrefixedEvent(iconRefresh, "TransitionEnd", function(event) {
        isTransition = 0;
        iconRefresh.style[transition] = "all 0s";
        iconRefresh.style[transform] = "translateY(0)";
        if(isRefresh) {
            isRefresh = 0;
            iconRefresh.classList.remove(refreshClass);
            window.location.reload(true);
        }
    });*/
}());