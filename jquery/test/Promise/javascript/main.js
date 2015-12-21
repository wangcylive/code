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

        p1.then(function(value) {
            log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Promise fulfilled (async code end)<br>");
            console.log(value);
            console.log(p1);
        });

        log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Promise made (sync code end)<br>");
    }

    btn.addEventListener("click", function() {
        testPromise();
    }, false);
}(window, document));

!(function(root, d) {
    function PromiseTest() {
        this.doneList = [];
        this.failList = [];
        this.status = "pending";
    }

    PromiseTest.prototype = {
        construct: PromiseTest,
        resolve: function(result) {
            this.status = "resolved";
            while(this.doneList[0]) {
                this.doneList.shift().call(this, result);
            }
        },
        reject: function(result) {
            this.status = "rejected";
            while(this.failList[0]) {
                this.failList.shift().call(this, result);
            }
        },
        done: function(handler) {
            if(typeof handler === "function") {
                this.doneList.push(handler);
            }
            return this;
        },
        fail: function(handler) {
            if(typeof handler === "function") {
                this.failList.push(handler);
            }
            return this;
        },
        then: function(resolve, reject) {
            this.done(resolve).fail(reject);
            return this;
        },
        always: function(handler) {
            this.done(handler).fail(handler);
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
        console.log(p.status);

        p.then(function() {
            console.log("timeout then success", Date.now());
            console.log(this);

            p.then(function() {
                console.log("timeout2 then success", Date.now());
                console.log(p.status);
            });

            console.log(p);

            setTimeout(function() {
                p.then(function() {
                    console.log("timeout3 then success", Date.now(), p.status);
                })
            }, 0);
        });
    });
}(window, document));