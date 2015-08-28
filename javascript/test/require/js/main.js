require.config({
    baseUrl: "js/",
    paths: {
        getHrefParam: "app/get-href-param",
        getHrefParamArray: "app/get-href-param-array",
        getDomSize: "app/get-dom-size",
        jquery: typeof addEventListener === "function" ? "lib/jquery-2.1.3.min" : "lib/jquery-1.11.1.min",
        zepto: "lib/zepto.min",
        json: "lib/json2.min",
        iscroll: "lib/iscroll-lite.min",
        "jquery.mousewheel": "lib/jquery.mousewheel.min",
        "jquery.color": "lib/jquery.colors",
        "jquery.nodeName": "app/jquery.nodeName",
        appLog: "app/app-log"
    }
});

require(["appLog"], function(App) {
    App.track = false;

    require(["jquery"], function() {

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

    require(["getHrefParamArray"], function(a) {
        App.log(a);
    });

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