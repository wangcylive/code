/**
 * Created by wangcy on 2016/1/5.
 */
;(function(root, dt) {
    var s = typeof istudy !== "object" ? {} : istudy;
    root.istudy = s;

    s.initMain = function() {
        var form = $("#form"),
            name = $("#name"),
            picture = $("#picture"),
            preview = $("#preview");

        var regExpImg = /^image/;

        picture.on("change", function() {
            preview.empty();
            var file = this.files[0];
            if(file) {
                if(regExpImg.test(file.type)) {
                    var reader = new FileReader(),
                        img = new Image();
                    reader.readAsDataURL(file);

                    reader.onload = function() {
                        img.src = reader.result;
                    };

                    preview.append(img);
                } else {
                    alert("not picture!");
                }

            }
        });

        form.on("submit", function(event) {
            event.preventDefault();

            $.ajax({
                url: "index.html",
                data: {
                    name: $.trim(name.val())
                },
                dataType: "text"
            }).done(function(data) {
                console.log(data);
            })
        });
    }
}(window, document));