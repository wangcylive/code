/**
 * Created by Wangcy on 2014/12/22.
 */
(function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 200;
    canvas.height = 200;
    var context = canvas.getContext("2d");

    var grd= context.createLinearGradient(0, 0, 200, 100);
    grd.addColorStop(0,"#FF0000");
    grd.addColorStop(1,"#00FF00");
    context.fillStyle = grd;
    context.fillRect(0, 0, 200, 100);

    context.moveTo(20, 20);
    context.lineTo(100, 100);
    context.stroke();

    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(50, 50, 20, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    var img = new Image();
    img.src = "http://tupian.enterdesk.com/2012/1214/dqd/02/hua_8.jpg.680.510.jpg?222222";
    img.onload = function() {
        context.drawImage(img, 20, 20);
    }

    /*var create = document.getElementById("create");
    create.addEventListener("click", function() {
        var img = new Image();
        img.src = canvas.toDataURL("image/png");
        document.body.appendChild(img);
    }, false);*/
}());