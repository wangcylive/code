(function(w, undefined) {
    var $ = w.jQ = function(selector) {
        return new $.fn.init(selector);
    };

    var d = document,
        html = document.documentElement,
        body = document.body,
        ArrayFn = Array.prototype;

    $.fn = $.prototype = {
        version: "1.0",
        constructor: $,
        length: 0,
        splice: function() {
            return ArrayFn.splice.apply(this, arguments);
        },
        push: function() {
            return ArrayFn.push.apply(this, arguments);
        },
        pop: function() {
            return ArrayFn.pop.apply(this, arguments);
        },
        shift: function() {
            return ArrayFn.shift.apply(this, arguments);
        },
        unshift: function() {
            return ArrayFn.unshift.apply(this, arguments);
        },
        each: function(callback) {
            for(var i = 0; i < this.length; i++) {
                callback.call(this[i], this[i], i);
            }
        },
        setColor: function(color) {
            this.each(function(item, index) {
                item.style.color = color;
            });
        }
    };

    $.fn.init = function(selector) {
        if(selector.nodeType === 1) {
            this[0] = selector;
            this.context = d;
            this.selector = selector;
            this.length = 1;
            return this;
        }
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

    $.fn.init.prototype = $.fn;
}(window, undefined));

var a = $("#header"),
    b = jQ("#header");

b.each(function(item, index) {
    console.log(this, item, index);
});

console.info(a);
console.log(b);


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