/**
 * Created by silent on 2014/11/22.
 */
({
    baseUrl: "../js",
    mainConfigFile: "../js/main-config.js",
    name: "main",
    paths: {
        jquery: "empty"
    },
    include: [
        "appLog",
        "getHrefParam",
        "getHrefParamArray",
        "getDomSize"
    ],

    /**
     * uglify(default)
     * uglify2
     * closure
     * closure.keepLines
     * none
     */
    optimize: "uglify2",
    out: "../build/main.js"
})