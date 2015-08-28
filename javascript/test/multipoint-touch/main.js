/**
 * Created by Wangcy on 2015/7/23.
 */

function $(args) {
    return document.querySelectorAll(args);
}

(function(w, d) {
    var inputs = $(".show-value input"),
        eventLog = $("#eventLog")[0];

    function addLog(str) {
        eventLog.appendChild(d.createTextNode(str + " "));
    }

    var forEach = Array.prototype.forEach;

    w.addEventListener("touchstart", function(event) {
        var touches = event.touches;

        inputs[0].value = touches.length;

        addLog(event.type);

        /*if(touches.length > 0) {
            forEach.call(touches, function(item, index) {
                var screenX = Math.round(item.screenX),
                    screenY = Math.round(item.screenY),
                    identifier = item.identifier;

                inputs[index].value = "X:" + screenX + ", Y:" + screenY + ", identifier:" + identifier;
            });
        }*/
    }, false);

    w.addEventListener("gesturestart", function(event) {
        addLog(event.type);
    }, false);

    w.addEventListener("gesturechange", function(event) {
        addLog(event.type);
    }, false);

    w.addEventListener("gestureend", function(event) {
        addLog(event.type);
    }, false);

    w.addEventListener("touchmove", function(event) {
        /*event.preventDefault();
        addLog(event.type);*/
    }, false);

    w.addEventListener("touchend", function(event) {
        addLog(event.type);
    }, false);

    w.addEventListener("click", function(event) {
        addLog(event.type);
    }, false);
}(window, document));