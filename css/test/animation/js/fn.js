function prefixedEvent(ele, type, callback) {
    var prx = ["webkit", "moz", "MS", "o", ""];
    for(var i = 0, length = prx.length; i < length; i++) {
        if(!prx[i]) {
            type = type.toLowerCase();
        }
        ele.addEventListener(prx[i] + type, callback, false);
    }
}

(function() {
    var reversal = document.querySelector("#reversal"),
        paused = document.getElementById("paused"),
        runing = document.querySelector("#runing");

    paused.addEventListener("click", function(event) {
        reversal.classList.add("paused");
    }, false);

    runing.addEventListener("click", function(event) {
        reversal.classList.remove("paused");
    }, false);

    var fadeOut = document.getElementById("fadeOut");

    prefixedEvent(fadeOut, "AnimationStart", function(event) {
        console.log("eventType: %s; animationName: %s; elapsedTime: %s;", event.type, event.animationName, event.elapsedTime);
    });

    prefixedEvent(fadeOut, "AnimationIteration", function(event) {
        console.log("eventType: %s; animationName: %s; elapsedTime: %s;", event.type, event.animationName, event.elapsedTime);
    });

    prefixedEvent(fadeOut, "AnimationEnd", function(event) {
        console.log("eventType: %s; animationName: %s; elapsedTime: %s;", event.type, event.animationName, event.elapsedTime);
    });

    var removeAnimated = document.getElementById("removeAnimated"),
        fillModeList = document.querySelectorAll(".fill-mode .list"),
        fillModeListLength = fillModeList.length;

    removeAnimated.addEventListener("click", function() {
        for(var i = 0; i < fillModeListLength; i++) {
            fillModeList[i].classList.remove("animated");
        }
    }, false);
}());