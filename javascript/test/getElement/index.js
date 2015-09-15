(function(w, undefined) {
    var $ = window.jQ = function(selector) {
        return new init(selector);
    };

    var d = document,
        html = document.documentElement,
        body = document.body;

    $.fn = $.prototype = {
        version: "1.0",
        constructor: $,
        length: 0,
        splice: function() {

        },
        push: function() {

        },
        setColor: function(color) {
            this[0].style.color = color;
        }
    };

    var init = $.fn.init = function(selector) {
        if(selector.indexOf("#") === 0) {
            try {
                this[0] = d.querySelector(selector);
                this.context = d;
                this.selector = selector;
                this.length = 1;
            } catch (e) {

            }
            return this;
        }
        if(selector.indexOf(".") === 0) {
            try {
                var ele = d.querySelectorAll(selector);
                this.context = d;
                this.selector = selector;
                this.length = ele.length;
                for(var i = 0; i < ele.length; i++) {
                    this[i] = ele[i];
                }
            } catch (e) {}
            return this;
        }
    };

    init.prototype = $.fn;
}(window, undefined));



console.info($("#header"));
console.log(jQ("#header"));


function getElemsByClass(search) {
    if(document.getElementsByClassName) {
        return document.getElementsByClassName(search);
    } else {
        var d = document,
            results = [],
            elements, regExp;
        if(d.querySelectorAll) { // IE8
            return d.querySelectorAll("." + search);
        } else {  // IE6, 7
            elements = d.getElementsByTagName("*");
            regExp = new RegExp("(^|\\s)" + search + "(\\s|$)");
            for(i = 0; i < elements.length; i++) {
                if(regExp.test(elements[i].className)) {
                    results.push(elements[i]);
                }
            }
            return results;
        }
    }
}

(function() {

}());