/**
 * Created by Wangcy on 2015/8/3.
 */
(function(w, d) {
    if(WebSocket) {
        var ws = new WebSocket("ws://10.10.101.229:80/");
        ws.onopen = function() {
            console.info("server open!");
            ws.send("test");
        };

        ws.onerror = function() {
            console.error("connect server fail!");
        };

        ws.onmessage = function(event) {
            console.log(event.data);
        };

        ws.onclose = function() {
            console.info("server closed!");
        }
    } else {
        console.error("browser not supported WebSocket!");
    }
}(window, document));