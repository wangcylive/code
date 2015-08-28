/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-07-23 20:49:32
 * @version $Id$
 */

/**
 * 
 */

function on(dom, type, callback) {
    if(dom.addEventListener) {
        dom.addEventListener(type, callback, false);
    } else if(dom.attachEvent) {
        dom.attachEvent("on" + type, callback);
    }
}

(function(w, d) {
    var userName = d.getElementById("userName"),
        userPic = d.getElementById("userPic"),
        userBirthday = d.getElementById("userBirthday"),
        userSex = d.getElementsByName("userSex"),
        userInterest = d.getElementsByName("userInterest"),
        userIntro = d.getElementById("userIntro");

    var btnChange = d.getElementById("changeValue"),
        btnReset = d.getElementById("btnReset");

    function triggerEvent(event) {
        var prefix = new Date().getTime() + " ";

        console.log(prefix + event.type);
    }

    on(userName, "input", triggerEvent);

    on(userPic, "input", triggerEvent);

    on(userBirthday, "change", triggerEvent);

    var i = 0,
        j = userSex.length;

    for(; i < j; i++) {
        on(userSex[i], "change", triggerEvent);
    }

    var m = 0,
        k = userInterest.length;

    for(; m < k; m++) {
        on(userInterest[m], "change", triggerEvent);
    }

    on(userIntro, "input", triggerEvent);

    // userBirthday.onchange = function(event) {
    //     var prefix = new Date().getTime() + " ";
    //     console.log(prefix + event.type);
    //     console.log(prefix + event.target);
    // }

    on(userName, "click", function(event) {
        console.log(event.type);
    });

    btnChange.onclick = function() {
        userName.value = "wangcy";
        userName.setAttribute("data-name", "wangcy");
        
        // userBirthday.selectedIndex = 2;
        
        // userSex[0].checked = false;
        // userSex[1].checked = true;

        // userInterest[0].checked = true;
        // userInterest[1].checked = false;
        // userInterest[2].checked = false;

        // userIntro.value = "my name is cd!";

        // btnReset.disabled = true;
    }
}(window, document));