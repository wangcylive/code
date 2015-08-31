/**
 * Created by Wangcy on 2015/8/31.
 */
!function(w, d, undefined) {
    var card = d.getElementById("card"),
        front = d.getElementById("front"),
        back = d.getElementById("back");

    var btnCard = d.getElementById("btnCard"),
        btnFront = d.getElementById("btnFront"),
        btnBack = d.getElementById("btnBack");

    var triggerClass = "on";

    btnFront.addEventListener("click", function() {
        var classList = front.classList;
        if(classList.contains(triggerClass)) {
            classList.remove(triggerClass);
        } else {
            classList.add(triggerClass);
        }
    }, false);

    btnBack.addEventListener("click", function() {
        var classList = back.classList;
        if(classList.contains(triggerClass)) {
            classList.remove(triggerClass);
        } else {
            classList.add(triggerClass);
        }
    }, false);

    btnCard.addEventListener("click", function() {
        var classList = card.classList;
        if(classList.contains(triggerClass)) {
            classList.remove(triggerClass);
        } else {
            classList.add(triggerClass);
        }
    }, false);
}(window, document);