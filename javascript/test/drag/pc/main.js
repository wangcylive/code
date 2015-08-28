/**
 * Created by Wangcy on 2015/2/3.
 */
(function(w, d) {
    var drag1 = d.getElementById("drag1"),
        drag2 = d.getElementById("drag2");

    var dragListP = d.querySelectorAll(".drag-list p");
    dragListP[0].addEventListener("dragstart", function(event) {
        var dt = event.dataTransfer;
        dt.setData("text/plain", "王春阳");
        dt.setData("text/url-list", "http://www.baidu.com");
        dt.setData("dom", event.target);
        event.effectAllowed = "all";
        /*console.log(event);
        console.log(dt);*/
    }, false);

    dragListP[0].addEventListener("dragend", function(event) {
        /*console.log(event);*/
    }, false);

    drag1.addEventListener("dragenter", function(event) {
        event.preventDefault();
        console.log(event.type);
        this.style.borderColor = "red";
    }, false);

    drag1.addEventListener("dragover", function(event) {
        event.preventDefault();
        event.dropEffect = "all";
        console.log(event.type);
    }, false);

    drag1.addEventListener("dragleave", function(event) {
        console.log(event.type);
        this.style.removeProperty("border-color");
    }, false);

    drag1.addEventListener("drop", function(event) {
        var df = event.dataTransfer,
            dom = df.getData("dom");
        console.log(typeof dom);
        /*this.appendChild(dom);*/
        console.log(df.getData("dom"));
        console.log(event);
    }, false);
}(window, document));