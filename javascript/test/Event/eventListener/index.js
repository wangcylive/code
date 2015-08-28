(function(w, d) {
    var demo1 = d.getElementById("demo1"),
        btn1 = d.getElementById("btn1"),
        btn2 = d.getElementById("btn2");

    var eventArray = [];

    var _fn = function(id) {
        return function() {
            console.log(id);
        }
    };

    var addEvent = function(id) {
        eventArray.forEach(function(item) {
            demo1.removeEventListener("click", item, false);
        });
        var fn = _fn(id);
        demo1.addEventListener("click", fn, false);
        eventArray.push(fn);
    };


    btn1.addEventListener("click", function() {
        var t = this;
        addEvent(t);
    }, false);

    btn2.addEventListener("click", function() {
        var t = this;
        addEvent(t);
    }, false);
}(window, document));