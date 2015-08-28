/**
 * Created by silent on 2014/12/3.
 */
(function() {
    for(var i = 0; i < 20; i++) {
        var a = Math.floor(Math.random() * 10);
        console.log(a);
    }
}());

function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

(function() {
    console.log("****************");
    for(var i = 0; i < 10; i++) {
        console.log(selectFrom(1, 4));
    }
}());
