/**
 * Created by wangcy on 2015/8/30.
 */
require.config({
    baseUrl: "js/",
    paths: {
        getHrefParam: "app/get-href-param",
        getHrefParamArray: "app/get-href-param-array",
        getDomSize: "app/get-dom-size",
        jquery: "lib/jquery-2.1.3.min",
        zepto: "lib/zepto.min",
        json: "lib/json2.min",
        iscroll: "lib/iscroll-lite.min",
        "jquery.mousewheel": "lib/jquery.mousewheel.min",
        "jquery.color": "lib/jquery.colors",
        "jquery.nodeName": "app/jquery.nodeName",
        appLog: "app/app-log"
    },
    shim: {
        "jquery.color": ["jquery"]
    }
});