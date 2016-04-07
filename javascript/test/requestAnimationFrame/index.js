;(function(root, doc) {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    (function() {
        var changeWidthTimeout = doc.getElementById("changeWidthTimeout");

        var isRun = 1;

        var timeout;

        function fn() {
            var value = parseFloat(changeWidthTimeout.style.width);

            if(value < 100) {
                changeWidthTimeout.style.width = value + 0.1 + "%";
                timeout = setTimeout(fn, 17);
            } else {
                clearTimeout(timeout);
            }
        }

        fn();

        changeWidthTimeout.addEventListener("click", function() {
            if(isRun) {
                clearTimeout(timeout);
                isRun = 0;
            } else {
                fn();
                isRun = 1;
            }
        }, false);
    }());

    (function() {
        var changeWidthInterval = doc.getElementById("changeWidthInterval");

        var isRun = 1;

        var interval;

        function fn() {
            var value = parseFloat(changeWidthInterval.style.width);

            if(value < 100) {
                changeWidthInterval.style.width = value + 0.1 + "%";
            }
        }

        interval = setInterval(fn, 17);

        changeWidthInterval.addEventListener("click", function() {
            if(isRun) {
                clearInterval(interval);
                isRun = 0;
            } else {
                interval = setInterval(fn, 17);
                isRun = 1;
            }
        }, false);
    }());

    (function() {
        var changeWidthRequestAnimationFrame = doc.getElementById("changeWidthRequestAnimationFrame");

        var frame;

        var isRun = 1;

        function fn() {
            var value = parseFloat(changeWidthRequestAnimationFrame.style.width);

            if(value < 100) {
                changeWidthRequestAnimationFrame.style.width = value + 0.1 + "%";
                frame = requestAnimationFrame(fn);
            }
        }

        fn();

        changeWidthRequestAnimationFrame.addEventListener("click", function() {
            if(isRun) {
                cancelAnimationFrame(frame);
                isRun = 0;
            } else {
                fn();
                isRun = 1;
            }
        }, false);
    }());
}(window, document));