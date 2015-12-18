/**
 * Created by Wangcy on 2015/12/18.
 */
!(function(w, d) {
    /*var ajax1 = $.get("layout.css");
    var ajax2 = $.get("layout.css");

    $.when(ajax1, ajax2).done(function() {
        console.log("ajax1 and ajax2 success");
    }).fail(function() {
        console.log("ajax1 or ajax2 fail");
    });*/

    /*var log = ajax1.done(function() {
        console.log("success");
        console.log(log);
    }).fail(function() {
        console.log("error");
    }).done(function() {
        console.log("second success");
    });

    console.log(log);*/



    /*var def = $.Deferred();*/
    var wait = function(def) {


        var task = function() {
            console.log("execute end");
            def.resolve();
        };

        setTimeout(task, 2000);

        return def.promise();
    };

    /*$.when(wait()).done(function() {
        console.log("wait done 1");
    }).done(function() {
        console.log("wait done 2");
    }).fail(function() {
        console.log("wait fail");
    }).progress(function() {
        console.log("wait progress");
    });*/

    $.Deferred(wait).done(function() {
        console.log("Deferred wait done1");
    });
}(window, document));