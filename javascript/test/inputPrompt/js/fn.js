/**
 * Created by Wangcy on 2014/11/11.
 */
(function(w, d) {
    var input = d.getElementById("input"),
        opts = d.getElementById("opts"),
        optsList = opts.querySelectorAll("li");

    input.addEventListener("input", function(event) {
        //console.log(event);
    }, false);

    input.addEventListener("keydown", function(event) {
        var t = this;
        setTimeout(function() {
            showOpts(t, event.keyCode);
        }, 0);

    }, false);

    function showOpts(t, keycode) {
        var val = trim(t.value);
        if(val) {
            opts.style.display = "block";
            var current = opts.querySelector(".on");
            if(keycode == 40) {
                if(current && opts.lastElementChild !== current) {
                    var nextNode = current.nextElementSibling;
                    current.classList.remove("on");
                    nextNode.classList.add("on");
                    t.value = nextNode.firstChild.nodeValue;
                } else {
                    opts.lastElementChild.classList.remove("on");
                    opts.firstElementChild.classList.add("on");
                    t.value = opts.firstElementChild.firstChild.nodeValue;
                }
            } else if(keycode == 38) {
                if(current && opts.firstElementChild !== current) {
                    var prevNode = current.previousElementSibling;
                    current.classList.remove("on");
                    prevNode.classList.add("on");
                    t.value = prevNode.firstChild.nodeValue;
                } else {
                    opts.firstElementChild.classList.remove("on");
                    opts.lastElementChild.classList.add("on");
                    t.value = opts.lastElementChild.firstChild.nodeValue;
                }
            }
        } else {
            opts.style.display = "none";
        }
    }

    function trim(string) {
        return string.replace(/^\s+|\s+$/g, "");
    }

    function next(elem) {
        do {
            elem = elem.nextSibling;
        } while(elem && elem.nodeType !== 1);

        return elem;
    }

    function first(elem) {
        elem = elem.firstChild;

        return elem && elem.nodeType !== 1 ? next(elem) : elem;
    }
}(window, document));