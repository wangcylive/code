function changeWidth() {
    var changeWidthTimeout = document.getElementById("changeWidthTimeout");

    (function() {
        var value = parseFloat(changeWidthTimeout.style.width);

        if(value < 100) {
            changeWidthTimeout.style.width = value + 0.1 + "%";
            setTimeout(arguments.callee, 17);
        }
        
    }());

    var changeWidthInterval = document.getElementById("changeWidthInterval");

    (function() {

        function f() {
            var value = parseFloat(changeWidthInterval.style.width);

            if(value < 100) {
                changeWidthInterval.style.width = value + 0.1 + "%";
            }
        }

        setInterval(f, 17);
    }());

    var changeWidthRequestAnimationFrame = document.getElementById("changeWidthRequestAnimationFrame");

    (function() {

        function f() {
            var value = parseFloat(changeWidthRequestAnimationFrame.style.width);

            if(value < 100) {
                changeWidthRequestAnimationFrame.style.width = value + 0.1 + "%";
                requestAnimationFrame(f);
            }
        }

        requestAnimationFrame(f);
    }());
}

changeWidth();