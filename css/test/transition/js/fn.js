function prefixedEvent(ele, type, callback) {
    var prx = ["webkit", "moz", "MS", "o", ""];
    for(var i = 0, length = prx.length; i < length; i++) {
        if(!prx[i]) {
            type = type.toLowerCase();
        }
        ele.addEventListener(prx[i] + type, callback, false);
    }
}

(function(w, d) {
    var test01 = d.getElementById("test01"),
        zoom = d.getElementById("zoom"),
        paused = d.getElementById("paused");

    prefixedEvent(test01, "TransitionEnd", function(event) {
        console.log("eventType: %s; propertyName: %s; elapsedTime: %s;", event.type, event.propertyName, event.elapsedTime);
    });

    zoom.addEventListener("click", function(){
        test01.style.width = (parseFloat(document.defaultView.getComputedStyle(test01, null).width) + 100) + "px";
        test01.style.height = (parseFloat(document.defaultView.getComputedStyle(test01, null).height) + 100) + "px";
    }, false);

    paused.addEventListener("click", function() {
        test01.style.width = document.defaultView.getComputedStyle(test01, null).width;
        test01.style.height = document.defaultView.getComputedStyle(test01, null).height;
    })
}(window, document));