require(["main-config"], function() {
    require(["appLog", "jquery", "getHrefParamArray"], function(App, $, arr) {
        App.track = false;

        App.log(arr);

        // jquery.color
        require(["jquery.color"], function() {
            $("h1").animate({
                color: "#ff0000"
            }, 2000);
        });

        // jquery.nodeName
        require(["jquery.nodeName"], function() {
            App.log($("body").nodeName());
        });

        // jquery.mousewheel
        var mousewheel = $("#mousewheel"),
            mouseDelta = $("#mouseDelta");

        mousewheel.one("mouseover", function() {
            require(["jquery.mousewheel"], function() {
                mousewheel.mousewheel(function(event) {
                    mouseDelta.val(event.deltaY);
                })
            })
        });

        // iscroll
        (function() {
            var nav = document.getElementById("nav");
            if(typeof addEventListener === "function") {
                require(["iscroll"], function() {
                    var scroll = new IScroll(nav, {
                        scrollX: true,
                        scrollY: false,
                        eventPassthrough: true
                    });
                });
            } else {
                nav.style.width = "500px";
            }
        }());

        // load share module
        var libModule = typeof addEventListener === "function" ? ["zepto"] : ["jquery"];

        var loadShareModule = document.getElementById("loadShareModule");
        if(typeof addEventListener === "function") {
            loadShareModule.addEventListener("click", function() {
                var startTime = Date.now();
                require(libModule, function() {
                    App.log(Date.now() - startTime);
                });
            }, false);
        } else {
            loadShareModule.attachEvent("onclick", function() {
                var startTime = +new Date();
                require(libModule, function() {
                    App.log(+new Date() - startTime);
                });
            })
        }

        // json module
        var jsonModule = Object.prototype.toString.call(JSON) === "[object JSON]" ? [] : ["json"];

        var jsonObj = {
            name: "李嘉辉",
            age: 24,
            sex: "man",
            height: "182cm"
        };
        require(jsonModule, function() {
            var str = JSON.stringify(jsonObj, function(k, v) {
                if(k === "sex") {
                    return "women";
                }
                return v;
            }, 4);

            App.log("JSON.stringify", str);

            var obj = JSON.parse(str, function(k, v) {
                if(k === "sex") {
                    return "man";
                }
                return v;
            });

            App.log("JSON.parse", obj);
        });
    });
});