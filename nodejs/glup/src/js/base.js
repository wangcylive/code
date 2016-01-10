/**
 * Created by Wangcy on 2016/1/6.
 */
;(function(root, dt) {
    var s = typeof istudy !== "object" ? {} : istudy;
    root.istudy = s;

    /**
     * 获取URL参数对象
     * 如果参数没有"="后面的值或没有"="，属性值为undefined
     * @returns {object}
     */
    s.locationSearch = (function() {
        var search = root.location.search.substring(1),
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

    /**
     * 对象转为URL参数字符串
     * @param obj {object} 要转换的对象
     * @returns {string}
     */
    s.objectToUrl = function(obj) {
        if(Object.prototype.toString.call(obj) == "[object Object]") {
            var array = [];
            for(var x in obj) {
                if(obj.hasOwnProperty(x)) {
                    array.push(encodeURIComponent(x) + "=" + encodeURIComponent(obj[x]));
                }
            }
            return array.join("&");
        } else {
            return "";
        }
    };

    /**
     * 依据userAgent判断浏览类型
     * @returns {object}
     */
    s.browser = (function() {
        var u = navigator.userAgent;
        return {
            mobile: /Mobile|Android|Symbian/i.test(u),
            android: /Android|Adr/i.test(u),
            ios: /iPhone|iPad|iPod/i.test(u),
            symbian: /Symbian/i.test(u),
            windowsPhone: /Windows Phone/i.test(u),
            blankBerry: /BB/i.test(u),
            weChat: /MicroMessenger/i.test(u)
        }
    }());

    /**
     * 数组去重
     * @param arr
     * @returns {array}
     */
    s.arrayUnique = function(arr) {
        if(Array.isArray(arr)) {
            var result = [];
            arr.forEach(function(item) {
                if(result.indexOf(item) === -1) {
                    result.push(item);
                }
            });
            return result;
        } else {
            return arr;
        }
    };

    /**
     * Toast提示，4秒后自动隐藏
     * @param text {string} 提示文案
     * @returns {number} timeout identity
     */
    s.toast = (function() {
        var ele = dt.getElementById("toast"),
            isVisible = 0,
            identity;

        if(ele === null) {
            ele = dt.createElement("div");
            ele.id = "toast";
            ele.className = "toast";
            ele.style.display = "none";
            dt.body.appendChild(ele);
        }

        var hide = function() {
            if(isVisible) {
                clearTimeout(identity);
                ele.style.display = "none";
                isVisible = 0;
            }
        };

        dt.addEventListener("click", hide, true);
        dt.addEventListener("touchend", hide, true);

        function show(text) {
            ele.textContent = text;
            ele.style.display = "block";
            isVisible = 1;
            clearTimeout(identity);
            identity = setTimeout(function() {
                ele.style.display = "none";
                isVisible = 0;
            }, 4000);

            return identity;
        }

        return show;
    }());

    /**
     * 发布时间，如果小于24小时显示为多少（小时、分钟、秒）前，如果大于24小时显示日期（05-14 08:40）
     * @param uploadTime {timeStamp} 更新时间
     * @param nowTime (required = false, defaultValue = Data.now()) {timeStamp} 当前时间，默认使用设备时间
     * @returns {string}
     */
    s.getHowLong = function(uploadTime, nowTime) {
        var config = {
            second: {
                condition: 1000,
                legend: "秒"
            },
            minute: {
                condition: 60 * 1000,
                legend: "分钟"
            },
            hour: {
                condition: 60 * 60 * 1000,
                legend: "小时"
            },
            day: {
                condition: 24 * 60 * 60 * 1000,
                legend: "天"
            }
        };

        var before;

        if(typeof uploadTime !== "number") {
            return "未知";
        }

        if(typeof nowTime === "number") {
            before = nowTime - uploadTime;
        } else {
            before = Date.now() - uploadTime;
        }

        // 如果时间小于1000毫秒返回“刚刚”
        if(before < config.second.condition) {
            return "刚刚";
        }

        function getDoubleNumber(num) {
            return num >= 10 ? num : "0" + num;
        }

        var s = "",
            t;
        switch (true) {
            case before > config.day.condition:
                t = new Date(uploadTime);
                s = t.getMonth() + 1 + "-" + t.getDate() + " " + getDoubleNumber(t.getHours()) + ":" + getDoubleNumber(t.getMinutes());
                break;
            case before > config.hour.condition:
                s = Math.floor(before / config.hour.condition) + config.hour.legend;
                break;
            case before > config.minute.condition:
                s = Math.floor(before / config.minute.condition) + config.minute.legend;
                break;
            default:
                s = Math.floor(before / config.second.condition) + config.second.legend;
        }
        return s + (t ? "" : "前");
    };

    /**
     * 请求javascript，加载完成执行回调
     * @param url {string}
     * @param callback {function}
     */
    s.requireJs = function(url, callback) {
        var js = document.createElement("script");

        var fn = typeof callback === "function" ? callback : function(){};

        js.onerror = function() {
            console.error(url + " not found");
        };

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

        js.src = url;
        js.async = "async";
        document.body.appendChild(js);
    };

    /**
     * 加载css
     * @param url {string}
     */
    s.requireCss = function(url) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    /**
     * 模板替换，占位符{{*}}替换为参数data对应属性值
     * 如果值为undefined|null替换为""
     * @param template {string}
     * @param data {object}
     * @returns {string}
     */
    s.temp = function(template, data) {
        return template.replace(/\{\{([\w\.]*)\}\}/g, function(str, key) {
            var keys = key.split("."),
                v = data[keys.shift()];
            for (var i = 0, l = keys.length; i < l; i++) {
                v = v[keys[i]];
            }
            return (typeof v !== "undefined" && v !== null) ? v : "";
        });
    };

    // config emoji
    if(typeof emoji === "function") {
        emoji.img_sets.apple.path = "http://share.istudy.com.cn/images/emoji-data/";
        emoji.include_title = true;

        /**
         * emoji表情替换
         * @param text {string} 替换文字
         * @returns {string}
         */
        s.emoji = function(text) {
            return text == null ? "" : emoji.replace_unified(text + "");
        };
    }

    /**
     * emoji表情过滤
     * @param text {string} 替换文字
     * @returns {string}
     */
    s.filterEmoji = (function() {
        var reg = new RegExp("[^\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\u0000-\u00ff\u4E00-\u9FA5\uF900-\uFA2D]", "g");

        return function(text) {
            return text == null ? "" : (text + "").replace(reg, "");
        };
    }());

    /**
     * 消息提示，替代 alert，5秒后自动隐藏
     * @prop show {function} @param text {string} 提示文案
     * @prop hide {function} @param callback {function} 隐藏后回调函数
     */
    s.msgBox = (function() {
        var autoHideTime = 5000;

        var overlay = dt.getElementById("overlay"),
            box = dt.getElementById("msgBox");

        if(overlay === null) {
            overlay = dt.createElement("div");
            overlay.className = "overlay";
            overlay.id = "overlay";
            dt.body.appendChild(overlay);
        }

        if(box === null) {
            box = dt.createElement("div");
            box.className = "msg-box";
            box.id = "msgBox";
            box.innerHTML = '<div class="main">' +
                '<p class="prompt"></p>' +
                '<button type="button" class="close">确 认</button>' +
                '</div>';
            dt.body.appendChild(box);
        }

        var prompt = box.querySelector(".prompt"),
            close = box.querySelector(".close");

        var timeout;

        var hide = function(handler) {
            overlay.style.display = "none";
            box.style.display = "none";
            clearTimeout(timeout);
            if(typeof handler === "function") {
                handler();
            }
        };

        var show = function(text) {
            clearTimeout(timeout);
            overlay.style.display = "block";
            prompt.textContent = text;
            box.style.display = "block";
            box.style.marginTop = -box.offsetHeight / 2 + "px";
            timeout = setTimeout(function() {
                overlay.style.display = "none";
                box.style.display = "none";
            }, autoHideTime);
        };

        close.addEventListener("click", function() {
            hide();
        }, false);

        return {
            hide: hide,
            show: show
        }
    }());

    if(typeof jQuery == "function") {
        $.ajaxSetup({
            dataType: "json"
        });

        $(document).ajaxError(function(event, jqxhr, settings) {
            if(jqxhr.statusText !== "abort") {
                s.msgBox.show("接口请求结果错误" + "\n" + settings.url + " " + jqxhr.statusText);
            }
        });
    }
}(window, document));