/**
 * Created by Wangcy on 2015/3/11.
 */

var prefixedCss = (function() {
    var prx = ["", "webkit", "moz", "ms", "o"],
        div = document.createElement("div"),
        style = div.style,
        value;

    return function(property) {
        property = property.replace(/-(\w)/, function(string, $1) {
            return $1.toUpperCase();
        });

        var upperCaseProperty = property.replace(/^\w/, function(string) {
            return string.toUpperCase();
        });

        for(var i = 0, length = prx.length; i < length; i++) {
            value = "";

            if(!prx[i]) {
                value = property;
            } else {
                value = prx[i] + upperCaseProperty;
            }

            if(value in style) {
                return value;
            }
        }
    }
}());

function formatTime(num) {
    var n = typeof num == "number" ? num : parseFloat(num);

    var double = function(num) {
        return num >= 10 ? num : "0" + num;
    };

    if(typeof n == "number") {
        var t = "";
        n = Math.ceil(n);
        if(n >= 3600) {
            var h = parseInt(n / 3600),
                m = parseInt(n % 3600 / 60),
                s = n % 60;
            t = h + ":" + double(m) + ":" + double(s);
        } else if(n >= 60) {
            var m = parseInt(n / 60),
                s = n % 60;
            t = double(m) + ":" + double(s);
        } else {
            t = "00:" + double(n);
        }

        return t;
    } else {
        return "00:00";
    }
}

function prefixedEvent(ele, type, callback) {
    var prx = ["webkit", "moz", "MS", "o", ""];
    for(var i = 0, length = prx.length; i < length; i++) {
        if(!prx[i]) {
            type = type.toLowerCase();
        }

        console.log(prx[i] + type);
        ele.addEventListener(prx[i] + type, callback, false);
    }
}

function requestFullscreen() {
    var d = document,
        h = d.documentElement,
        fn = h.requestFullscreen || h.webkitRequestFullScreen || h.mozRequestFullScreen ||
                h.msRequestFullscreen,
        enable = d.fullscreenEnabled || d.webkitFullscreenEnabled || d.mozFullScreenEnabled ||
                d.msFullscreenEnabled;

    if(typeof fn === "function") {
        if(enable) {
            fn.call(h);
        } else {
            console.info("您的浏览器不允许全屏！");
        }
    }
}

function exitFullscreen() {
    var d = document,
        fn = d.exitFullscroll || d.webkitCancelFullScreen || d.mozCancelFullScreen ||
                d.msExitFullscreen;

    if(typeof fn === "function") {
        fn.call(d);
    }
}

var visibilityChangeEvent = function(callback) {
    var d = document,
        hidden, state, visibilityChange;

    if(d.hidden !== undefined) {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if(d.webkitHidden !== undefined) {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    } else if(d.mozHidden !== undefined) {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if(d.msHidden !== undefined) {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    }

    visibilityChangeEvent = function(callback) {
        d.addEventListener(visibilityChange, function(event) {
            callback(event, hidden, state);
        }, false);
    };

    return visibilityChangeEvent(callback);
};

var videoItem = document.getElementById("video2"),
    video = videoItem.querySelector(".vp-video"),
    ui = videoItem.querySelector(".vp-ui"),
    message = videoItem.querySelector(".vp-ui .message"),
    controls = videoItem.querySelector(".vp-controls"),
    current = videoItem.querySelector(".vp-current"),
    duration = videoItem.querySelector(".vp-duration"),
    buffer = videoItem.querySelector(".vp-buffer"),
    elapsed = videoItem.querySelector(".vp-elapsed"),
    progress = videoItem.querySelector(".vp-progress"),
    seek = videoItem.querySelector(".vp-seek"),
    play = videoItem.querySelector(".vp-play"),
    fullscreen = videoItem.querySelector(".vp-fullscreen");

var debugMessage = document.getElementById("debugMessage");

(function() {

    var api = {
        duration: 0,
        currentTime: 0,
        totalTime: 0,
        remainingTime: 0,
        fullscreen: 0,
        paused: 1,
        error: 0
    };

    if(!video || typeof video.canPlayType !== "function") {
        console.log("nonsupport video");
        return;
    }

    var errorsMessage = [
        "",
        "视频加载中止",
        "网络错误",
        "视频解码错误",
        "视频资源没有找到"
        ],
        stateMessage = [
            "当前网速较慢，建议先暂停等待缓冲再播放"
        ];

    video.addEventListener("error", function() {
        var code = this.error.code;
        videoItem.classList.add("is-error");
        videoItem.classList.remove("is-loading");
        videoItem.classList.remove("is-playing");
        videoItem.classList.remove("is-paused");
        videoItem.classList.remove("is-stalled");
        message.innerHTML = errorsMessage[code];
        api.error = code;
    }, false);

    // 开始请求数据
    /*video.addEventListener("loadstart", function(event) {
        console.log(event.type);
    }, false);*/

    // 资源长度发生改变
    video.addEventListener("durationchange", function() {
        api.duration = this.duration;
        duration.innerHTML = formatTime(api.duration);
    }, false);

    // 获取资源长度
    video.addEventListener("loadedmetadata", function(event) {
        console.log(event.type);
        api.duration = this.duration;
        duration.innerHTML = formatTime(api.duration);
    }, false);

    // 在当前播放位置加载媒体数据时引发，视频可以开始播放
    video.addEventListener("loadeddata", function(event) {
        console.log(event.type);
        video.control = false;

        var startX, progressWidth, startWidth, executed, moveValue;

        function progressDrag(event) {
            var x = event.clientX - startX;
            moveValue = x / progressWidth * 100 + startWidth;

            if(moveValue < 0) {
                moveValue = 0;
            } else if(moveValue > 100) {
                moveValue = 100;
            }

            elapsed.style.width = moveValue + "%";
            current.textContent = formatTime(api.duration * moveValue / 100);
        }

        seek.addEventListener("mousedown", function(event) {
            executed = 1;
            video.pause();
            startX = event.clientX;
            var width = elapsed.style.getPropertyValue("width");
            startWidth = width ? parseFloat(width) : 0;
            progressWidth = progress.clientWidth;

            document.addEventListener("mousemove", progressDrag, false);
        }, false);

        document.addEventListener("mouseup", function() {
            if(executed) {
                video.currentTime = api.duration * moveValue / 100;
                video.play();
                this.removeEventListener("mousemove", progressDrag, false);
                executed = 0;
            }
        }, false);

        progress.addEventListener("click", function(event) {
            var clientRect = this.getBoundingClientRect(),
                value = (event.clientX - clientRect.left) / this.offsetWidth;

            elapsed.style.width = value * 100 + "%";
            current.textContent = formatTime(api.duration * value);
            video.currentTime = api.duration * value;
        }, false);

        // 全屏按钮
        fullscreen.addEventListener("click", function() {
            if(api.fullscreen) {
                exitFullscreen();
                api.fullscreen = 0;
                videoItem.classList.remove("is-fullscreen");
                this.title = "全屏";
            } else {
                requestFullscreen();
                api.fullscreen = 1;
                videoItem.classList.add("is-fullscreen");
                this.title = "退出全屏";
            }
        }, false);

        var fullscreenchangeEvent = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        fullscreenchangeEvent.forEach(function(item, index) {
            document.addEventListener(item, function() {
                var ele = document.fullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement ||
                    document.mozFullScreenElement || document.msFullscreenElement;

                if(ele !== document.documentElement) {
                    api.fullscreen = 0;
                    videoItem.classList.remove("is-fullscreen");
                    fullscreen.title = "全屏";
                }
            }, false);
        });


        play.addEventListener("click", function() {
            if(video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }, false);

        visibilityChangeEvent(function(event, hidden) {
            var d = document;
            if(d[hidden]) {
                video.pause();
            }
        });

        var mouseoutTimeout;
        videoItem.addEventListener("mousemove", function() {
            clearTimeout(mouseoutTimeout);
            var t = this;
            t.classList.remove("is-mouseout");
            mouseoutTimeout = setTimeout(function() {
                t.classList.add("is-mouseout");
            }, 5000);
        }, false);
    }, false);

    ui.addEventListener("click", function() {
        if(!api.error) {
            if(video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    }, false);

    var startPlaying = 0;

    // 视频第一次打开
    videoItem.addEventListener("click", function() {
        videoItem.classList.add("is-loading");

        video.addEventListener("timeupdate", function(event) {
            if(this.currentTime > 0) {
                console.log("one timeupdate");
                debugMessage.innerHTML += event.type + ",";

                this.currentTime = 0;
                startPlaying = 1;
                videoItem.classList.remove("is-loading");
                videoItem.classList.add("is-ready");
                videoItem.classList.add("is-playing");

                video.removeEventListener("timeupdate", arguments.callee, false);
            }
        }, false);

        videoItem.removeEventListener("click", arguments.callee, false);
    }, false);

    // 在播放由于视频的下一帧不可用（可能需要缓冲）而停止时引发
    video.addEventListener("waiting", function(event) {
        console.log(event.type);
        videoItem.classList.remove("is-playing");
        videoItem.classList.add("is-loading");
        debugMessage.innerHTML += event.type + ",";
    }, false);

    // 正在请求数据
    video.addEventListener("progress", function() {
        var timeRanges = this.buffered,
            length = timeRanges.length;

        if(length > 0) {
            buffer.style.width = timeRanges.end(length - 1) / api.duration * 100 + "%";
        }
    }, false);

    // 当目前的播放位置已更改时
    video.addEventListener("timeupdate", function() {
        var currentTime = api.currentTime =  this.currentTime;
        current.innerHTML = formatTime(currentTime);
        elapsed.style.width = currentTime / api.duration * 100 + "%";
    }, false);

    var stalledTimeout;
    var stalledEvent = function(event) {
        console.log(event.type);
        videoItem.classList.add("is-stalled");
        message.innerHTML = stateMessage[0];
        debugMessage.innerHTML += event.type + ",";

        clearTimeout(stalledTimeout);
        stalledTimeout = setTimeout(function() {
            videoItem.classList.remove("is-stalled");
        }, 5000);
        video.removeEventListener("stalled", stalledEvent, false);
    };

    video.addEventListener("playing", function(event) {
        console.log(event.type);
        console.log(this.buffered.end(0));
        if(startPlaying) {
            videoItem.classList.add("is-playing");
            videoItem.classList.remove("is-loading");
            debugMessage.innerHTML += event.type + ",";

            // 在下载被中断三秒以上时引发，这可以指示网络问题
            video.addEventListener("stalled", stalledEvent, false);
        }
    }, false);

    var a = 0;
    video.addEventListener("seeking", function(event) {
        console.log(event.type);
        videoItem.classList.add("is-loading");
        console.log(video.currentTime);
    }, false);

    video.addEventListener("seeked", function(event) {
        console.log(event.type);
        videoItem.classList.remove("is-loading");

        // IE播放中 seeked 不会触发 playing 事件，在这里处理兼容
        if(!video.paused) {
            videoItem.classList.add("is-playing");
        }
    }, false);

    // 在不需要进一步缓冲就可以播放直至文件结束时引发
    /*video.addEventListener("canplaythrough", function(event) {
        console.log(event.type);
    }, false);*/

    /*video.addEventListener("canplay", function(event) {
        console.log(event.type);
    }, false);*/

    /*video.addEventListener("suspend", function(event) {
        console.log(event.type);
    }, false);*/

    video.addEventListener("ended", function(event) {
        videoItem.classList.add("is-ended");
        console.log(event.type);
    }, false);

    video.addEventListener("play", function(event) {
        console.log(event.type);
        videoItem.classList.remove("is-paused");
        play.title = "暂停";
        api.paused = 0;
        debugMessage.innerHTML += event.type + ",";
    }, false);

    video.addEventListener("pause", function() {
        videoItem.classList.add("is-paused");
        videoItem.classList.remove("is-playing");
        play.title = "播放";
        api.paused = 1;
    }, false);
}());
