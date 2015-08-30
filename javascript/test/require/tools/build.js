/**
 * Created by silent on 2014/11/22.
 */
({
    baseUrl: "../js",
    mainConfigFile: "../js/main-config.js",
    name: "main",
    out: "../build/main.js",
    include: [
        "appLog",
        "getHrefParam",
        "getHrefParamArray",
        "getDomSize",
        "jquery.nodeName",
        "jquery.color",
        "jquery.mousewheel"
    ],

    /**
     * uglify(default)
     * uglify2
     * closure
     * closure.keepLines
     * none
     */
    optimize: "none"
})