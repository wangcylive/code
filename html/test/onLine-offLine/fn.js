function on(ele, eventType, handle) {
    if(ele.addEventListener) {
        ele.addEventListener(eventType, handle, false);
    } else if(ele.attachEvent) {
        ele.attachEvent("on" + eventType, handle);
    }
}

on(window, "online", function() {
    alert("设备上线");
});

on(window, "offline", function() {
    alert("设备离线");
});