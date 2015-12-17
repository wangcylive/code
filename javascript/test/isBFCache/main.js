/**
 * Created by wangcy on 2015/12/17.
 */
!(function(w, d) {
    var input = d.getElementById("isBFCache");

    var p = d.createElement("p");
    p.textContent = "BFCache: " + (input.value !== "");
    d.body.appendChild(p);

    input.value = Date.now();

    function handler(event) {
        p = d.createElement("p");
        p.textContent = "event.persisted: " + event.persisted;
        d.body.appendChild(p);
    }

    w.addEventListener("pageshow", function(event) {
        console.log(event);
        handler(event);
    }, false);

    w.addEventListener("beforeunload", function(event) {
        console.log(event.type);
    }, false);

    w.addEventListener("unload", function(event) {
        console.log(event.type);
    }, false);

    w.addEventListener("load", function(event) {
        console.log(event.type);
    }, false);

    w.addEventListener("DOMContentLoaded", function(event) {
        console.log(event.type);
    }, false);
}(window, document));