/**
 * Created by wangcy on 2016/1/5.
 */
;(function(root, dt) {
    var s = typeof istudy !== "object" ? {} : istudy;
    root.istudy = s;

    s.initHome = function() {
        var form = $("#form"),
            name = $("#name"),
            email = $("#email"),
            phone = $("#phone");

        form.on("submit", function(event) {
            event.preventDefault();

            $.get("index.html", {
                name: name.val(),
                email: email.val(),
                phone: phone.val()
            }, function(data) {
                console.log(data);
            })
        });
    }
}(window, document));