/**
 * Created by wangcy on 2016/1/9.
 */
var gulp = require("gulp");

gulp.task("one", function(callback) {
    console.log("one task finish");
    callback("1");
});

gulp.task("two", ["one"], function() {
    console.log("two task finish");
});

gulp.task("default", ["one", "two"]);

/*gulp.task("default", function() {
    var stream = gulp.src("src/js/", {
        base: "src"
    }).pipe(gulp.dest("build/"));

    return stream;
});*/
