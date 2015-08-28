function querySelector(search) {
    return document.querySelector(search);
}

function querySelectorAll(search) {
    return document.querySelectorAll(search);
}



(function() {
    console.log("javascript:" + querySelectorAll("p.warning, p.error"));
    console.log("jquery:" + $("p.warning, p.error") + "\n");

    var nav = document.getElementById("nav");
    console.log("javascript:" + nav.querySelectorAll("div li").length);
    console.log("jquery:" + $(nav).find("div li").length);
}());