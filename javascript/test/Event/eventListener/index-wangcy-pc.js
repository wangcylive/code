(function(w, d) {
    var demo1 = d.getElementById("demo1"),
        btn1 = d.getElementById("btn1"),
        btn2 = d.getElementById("btn2");

    var eventArray = [];

    var addEvent = function(fun) {
        demo1.addEventListener("click", fun);
        eventArray.push(fun);
    };

    var removeEvent = function() {
        eventArray.forEach(function(item, index) {
            demo1.removeEventListener("click", item);
        });
    };


    btn1.addEventListener("click", function() {
        var t = this;
        removeEvent();
        addEvent(function(a) {
            console.log(t);
        });
    }, false);

    btn2.addEventListener("click", function() {
        var t = this;
        removeEvent();
        addEvent(function(b) {
            console.log(t);
        });
    }, false);
}(window, document));