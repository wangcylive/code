/**
 * Created by wangcy on 2015/8/30.
 */
require.config({
    baseUrl: "./js",
    paths: {
        jquery: ["http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min", "lib/jquery-2.1.3.min"],
        zepto: "lib/zepto.min",
        json: "lib/json2.min",
        iscroll: "lib/iscroll-lite.min",
        "jquery.mousewheel": "lib/jquery.mousewheel.min",
        "jquery.color": "lib/jquery.colors"
    },
    shim: {
        "jquery.color": ["jquery"]
    }
});