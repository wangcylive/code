/**
 * Created by Wangcy on 2015/8/27.
 */
;(function(factory) {
    if(typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if(typeof exports === "object") {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function($) {
    $.fn.extend({
        nodeName: function() {
            return this[0].nodeName;
        }
    })
}));