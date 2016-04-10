/**
 * Created by wangchunyang on 16/4/8.
 */
;(function (root, doc) {

    var body = doc.body;

    // createEvent
    var btnClick = doc.getElementById("btnClick"),
        btnMove = doc.getElementById("btnMove");

    body.addEventListener("click", function (event) {
        console.log(event);
    }, false);

    body.addEventListener("move", function (event) {
        console.log(event);
    }, false);

    btnClick.addEventListener("click", function (event) {
        event.stopPropagation();

        console.log(event);
    }, false);

    var clickEvent = doc.createEvent("MouseEvent");
    clickEvent.initEvent("click", true, true);

    btnClick.dispatchEvent(clickEvent);


    btnMove.addEventListener("move", function (event) {
        console.log(event);
    }, false);

    var moveEvent = doc.createEvent("Event");
    moveEvent.initEvent("move", false, true);

    btnMove.dispatchEvent(moveEvent);

    // CustomEvent
    (function () {
        if (typeof window.CustomEvent === "function") {
            return false;
        }
        function CustomEvent(event, params) {
            params = params || {bubbles: false, cancelable: false, detail: null};
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    }());


    var btnOpen = doc.getElementById("btnOpen");

    btnOpen.addEventListener("open", function (event) {
        console.log(event);
    }, false);

    body.addEventListener("open", function (event) {
        console.log(event);
    }, false);

    var openEvent = new CustomEvent("open", {
        bubbles: true,
        cancelable: true
    });
    btnOpen.dispatchEvent(openEvent);

}(window, document));