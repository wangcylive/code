/**
 * Created by wangcy on 2016/1/5.
 */
;(function(root, dt) {
    var form = $("#form"),
        name = $("#name"),
        email = $("#email"),
        phone = $("#phone");

    form.on("submit", function(event) {
        event.preventDefault();
        console.log("click", Date.now());

        $.ajax({
            url: "index.html",
            data: {
                name: $.trim(name.val()),
                email: $.trim(email.val()),
                phone: $.trim(phone.val())
            },
            dataType: "text"
        }).done(function(data) {
            console.log(data);
        })
    });
}(window, document));