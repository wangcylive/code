/**
 * Created by wangchunyang on 16/4/6.
 */
;(function (root, doc) {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    function styleHyphenFormat(propertyName) {
        function format(match) {
            return "-" + match.toLowerCase();
        }

        if (propertyName.indexOf("-") !== -1) {
            return propertyName.toLowerCase();
        } else {
            return propertyName.replace(/^[A-Z]/, function (match) {
                return match.toLowerCase();
            }).replace(/^(webkit|moz|ms|o)/i, function (match) {
                return "-" + match;
            }).replace(/[A-Z]/g, format);
        }
    }

    function styleUpperFormat(propertyName) {
        function format(match) {
            return match.charAt(1).toUpperCase();
        }

        return propertyName.replace(/^-/, "").replace(/-[a-zA-Z]/g, format);
    }

    var getCssPrefix = (function () {
        var prx = ["", "-webkit-", "-moz-", "-ms-", "-o-"],
            div = document.createElement("div"),
            style = div.style,
            value;

        return function (property) {
            property = styleHyphenFormat(property);

            for (var i = 0, length = prx.length; i < length; i++) {
                value = "";

                if (!prx[i]) {
                    value = property;
                } else {
                    value = prx[i] + property;
                }

                if (value in style) {
                    return value;
                }
            }
            div = null;
        }
    }());

    function getTransitionEndEvent() {
        if (typeof TransitionEvent !== "undefined") {
            return "transitionend";
        } else if (typeof WebKitTransitionEvent !== "undefined") {
            return "webkitTransitionEnd";
        }
    }

    // 是否支持Touch事件
    var isSupportedTouch = (function () {
        var is = false;
        try {
            var type = document.createEvent("TouchEvent");
            type.initEvent("touchstart");
            is = true;
        } catch (e) {
        }
        return is;
    }());

    var isSupportedAnimationEvent = (function () {
        return !!(typeof AnimationEvent !== "undefined" || typeof WebKitAnimationEvent !== "undefined");
    }());

    // 是否支持Transition事件
    var isSupportedTranstionEvent = (function () {
        return !!(typeof TransitionEvent !== "undefined" || typeof WebKitTransitionEvent !== "undefined");
    }());

    function progressBar() {
        var progressValue = 95;

        var transform = getCssPrefix("transform"),
            transition = getCssPrefix("transition"),
            transitionEnd = getTransitionEndEvent();

        var progressNode = doc.getElementById("progressBar");

        if (progressNode == null) {
            progressNode = doc.createElement("div");
            progressNode.id = "progressBar";
            doc.body.appendChild(progressNode);
        }

        var transitionStatus = 0;  // 记录过渡动画状态[-1, 0, 1, 2], -1用来记录是否执行过start或者set

        progressNode.addEventListener(transitionEnd, function() {
            if(transitionStatus == 1) {
                progressNode.style.opacity = 0;
                progressNode.style[transition] = "opacity .5s ease-in";

                transitionStatus = 2;
            } else if(transitionStatus == 2) {
                progressNode.removeAttribute("style");
                progressNode.style.display = "none";

                progressValue = 95;
                transitionStatus = 0;
            }
        }, false);


        var requestID;  // requestAnimationFrame 返回值, cancelAnimationFrame 使用

        function requestFrame() {
            requestID = requestAnimationFrame(function () {
                if(progressValue > 6) {
                    progressValue -= Math.random();

                    progressNode.style[transform] = "translate3d(" + -progressValue + "%, 0, 0)";
                    progressNode.style[transition] = "all .2s linear";

                    requestID = requestAnimationFrame(requestFrame);
                }
            });
        }

        function cancelFrame() {
            cancelAnimationFrame(requestID);
            progressNode.style.removeProperty(transition);
        }

        function start() {
            progressNode.style.display = "block";
            cancelFrame();

            transitionStatus = -1;

            progressValue = 95;

            progressNode.style[transform] = "translate3d(" + -progressValue + "%, 0, 0)";

            requestAnimationFrame(function() {
                progressNode.style.opacity = 1;
                progressNode.style[transition] = "opacity .2s ease-out";

                requestFrame();
            });
        }

        function set(number) {
            if (typeof number == "number" && number > 0 && number < 1) {
                progressNode.style.display = "block";
                progressNode.style.opacity = 1;
                progressNode.style[transform] = "translate3d(" + -progressValue + "%, 0, 0)";
                progressNode.style[transition] = "all .2s ease-out";

                transitionStatus = -1;

                setTimeout(function() {
                    progressValue = 100 * (1 - number);

                    progressNode.style[transform] = "translate3d(" + -progressValue + "%, 0, 0)";
                }, 20);
            } else {
                console.error("set arguments value muse be between 0 to 1");
            }
        }

        function done() {
            if(transitionStatus) {
                cancelFrame();
                progressValue = 0;

                setTimeout(function () {
                    progressNode.style[transform] = "translate3d(0, 0, 0)";
                    progressNode.style[transition] = "all .3s ease-out";

                    transitionStatus = 1;
                }, 20);
            }
        }

        return {
            start: start,
            stop: cancelFrame,
            set: set,
            done: done
        }
    }

    root.progressBar = progressBar;
}(window, document));