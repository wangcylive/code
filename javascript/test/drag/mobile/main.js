/**
 * Created by Wangcy on 2015/2/3.
 */
(function(w, d) {
    var drag1 = d.getElementById("drag1"),
        drag2 = d.getElementById("drag2");

    var dragList = d.querySelectorAll(".story");

    var dragCoords1 = (function() {
        var x = drag1.offsetLeft,
            width = drag1.offsetWidth,
            y = drag1.offsetTop,
            height = drag1.offsetHeight;

        return {
            x: {
                min: x,
                max: x + width
            },
            y: {
                min: y,
                max: y + height
            }
        }
    }());

    var dragCoords2 = (function() {
        var x = drag2.offsetLeft,
            width = drag2.offsetWidth,
            y = drag2.offsetTop,
            height = drag2.offsetHeight;

        return {
            x: {
                min: x,
                max: x + width
            },
            y: {
                min: y,
                max: y + height
            }
        }
    }());

    (function() {
        var i = 0,
            length = dragList.length;

        var fn = function(dom) {
            var touchStartTime = 0,
                canMove = 0,
                startX = 0,
                startY = 0,
                startTranslateX = 0,
                startTranslateY = 0,
                translateX = 0,
                translateY = 0,
                timeOut;

            dom.addEventListener("touchstart", function(event) {
                event.preventDefault();

                var t = this,
                    touch = event.targetTouches[0];
                touchStartTime = event.timeStamp;
                startX = touch.pageX;
                startY = touch.pageY;
                startTranslateX = translateX;
                startTranslateY = translateY;
                timeOut = setTimeout(function() {
                    t.classList.add("touch-state");
                    canMove = 1;
                }, 800);
            }, false);

            dom.addEventListener("touchmove", function(event) {
                event.preventDefault();

                var touch = event.targetTouches[0],
                    moveX = touch.pageX - startX,
                    moveY = touch.pageY - startY,
                    clientX = touch.clientX,
                    clientY = touch.clientY;

                // 容错处理，在800ms内触发并且移动的距离大于10px时失效
                if(event.timeStamp - touchStartTime < 800 && (moveX > 10 || moveY > 10)) {
                    clearTimeout(timeOut);
                    return false;
                }

                // touchstart 时间大于零（这里在touchstart的时候会设置）
                // 是在长按 800ms 后
                if(touchStartTime > 0 && event.timeStamp - touchStartTime >= 800 && canMove) {
                    var x = moveX + startTranslateX,
                        y = moveY + startTranslateY;

                    this.style.transform = "translate(" + x + "px," + y + "px)";
                    translateX = x;
                    translateY = y;

                    if(clientX > dragCoords1.x.min && clientX < dragCoords1.x.max && clientY > dragCoords1.y.min &&
                            clientY < dragCoords1.y.max) {
                        drag1.style.setProperty("border-color", "red", "");
                    } else {
                        drag1.style.removeProperty("border-color");
                    }

                    if(clientX > dragCoords2.x.min && clientX < dragCoords2.x.max && clientY > dragCoords2.y.min &&
                        clientY < dragCoords2.y.max) {
                        drag2.style.setProperty("border-color", "red", "");
                    } else {
                        drag2.style.removeProperty("border-color");
                    }
                }
            }, false);

            dom.addEventListener("touchend", function(event) {
                event.preventDefault();

                var touch = event.changedTouches[0],
                    clientX = touch.clientX,
                    clientY = touch.clientY;

                clearTimeout(timeOut);
                touchStartTime = 0;
                canMove = 0;
                this.classList.remove("touch-state");

                if(clientX > dragCoords1.x.min && clientX < dragCoords1.x.max && clientY > dragCoords1.y.min &&
                    clientY < dragCoords1.y.max) {
                    dom.style.removeProperty("transform");
                    drag1.appendChild(dom);
                } else {
                    drag1.style.removeProperty("border-color");
                }
            }, false);
        };

        for(; i < length; i++) {
            fn(dragList[i]);
        }
    }());
}(window, document));