/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-07-23 20:49:32
 * @version $Id$
 */

/**
 * propertychange ie10及以下支持
 * ie8及以下使用attachEvent绑定可触发
 * ie9和ie10使用addEventListener绑定不会触发，必须用attachEvent绑定
 * ie9 propertychange事件 删除和鼠标粘贴事件不会触发
 */

function on(dom, type, callback) {
    if(dom.attachEvent) {
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
        // console.clear();
        var event = event || window.event,
            prefix = new Date().getTime() + " ";

        console.log(prefix + event.propertyName);
        console.log(prefix + event.type);
    }

    on(userName, "propertychange", triggerEvent);

    on(userPic, "propertychange", triggerEvent);

    on(userBirthday, "propertychange", triggerEvent);

    var i = 0,
        j = userSex.length;

    for(; i < j; i++) {
        on(userSex[i], "propertychange", triggerEvent);
    }

    var m = 0,
        k = userInterest.length;

    for(; m < k; m++) {
        on(userInterest[m], "propertychange", triggerEvent);
    }

    on(userIntro, "propertychange", triggerEvent);

    // userBirthday.onchange = function(event) {
    //     var prefix = new Date().getTime() + " ";
    //     console.log(prefix + event.type);
    //     console.log(prefix + event.target);
    // }



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