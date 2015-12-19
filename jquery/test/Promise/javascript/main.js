/**
 * Created by Wangcy on 2015/12/19.
 */
!(function(w, d) {
    "use strict";

    var btn = d.getElementById("btn"),
        log = d.getElementById("log");

    var promiseCount = 0;
    function testPromise() {
        var thisPromiseCount = ++ promiseCount;

        log.insertAdjacentHTML("beforeend", thisPromiseCount + ") started (sync code start)<br>");

        var p1 = new Promise(function(resolve, reject) {
            log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Promise started (async code start)<br>");

            setTimeout(function() {
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 2000);
        });

        console.log(p1);

        p1.then(function(value) {
            log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Promise fulfilled (async code end)<br>");
            console.log(value);
        });

        log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Promise made (sync code end)<br>");
    }

    btn.addEventListener("click", function() {
        testPromise();
    }, false);
}(window, document));

!(function(root, d) {
    function PromiseTest() {
        this.callbacks = []
    }

    PromiseTest.prototype = {
        construct: PromiseTest,
        resolve: function(result) {
            this.complete("resolve", result);
        },
        reject: function(result) {
            this.complete("reject", result);
        },
        complete: function(type, result) {
            while(this.callbacks[0]) {
                this.callbacks.shift()[type](result);
            }
        },
        then: function(resolve, reject) {
            console.log(resolve);
            this.callbacks.push({
                resolve: resolve,
                reject: reject
            });

            return this;
        }
    };

    var p = new PromiseTest();

    var delay1 = function() {
        setTimeout(function() {
            p.resolve("success");
        }, Math.random() * 1000 + 1000);
        return p;
    };

    delay1();

    p.then(function(result) {
        console.log(result, Date.now());
    }).then(function(result) {
        console.log(result, Date.now());

        p.then(function() {
            console.log("timeout then success", Date.now());

            p.then(function() {
                console.log("timeout2 then success", Date.now());
            })
        });
    });
}(window, document));