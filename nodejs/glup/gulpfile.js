/**
 * Created by wangcy on 2016/1/9.
 */
var gulp = require("gulp");
var del = require("del");
var vinylPaths = require("vinyl-paths");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");

var concat = require("gulp-concat");

/*gulp.task("one", function(callback) {
    console.log("one task finish");
    callback();
});

gulp.task("two", ["one"], function() {
    console.log("two task finish");
});

gulp.task("default", ["one", "two"]);*/


gulp.task("clean:build", function(callback) {
    del([
        "build"
    ], callback());
});

/*var watch = gulp.watch("src/css/base.css");
watch.on("change", function(event) {
    console.log("File " + event.path + " was " + event.type + " , running tasks...");
});*/

/*
gulp.task("default", ["clean:build"], function() {
    var stream = gulp.src("src/!**", {
        base: "src"
    }).pipe(gulp.dest("build/"));

    return stream;
});
*/

gulp.task("optimize:js", ["clean:build"], function() {
    gulp.src(["src/js/base.js", "src/js/app/home.js"], {
        base: "src"
    })
        .pipe(concat("home.js"))
        .pipe(uglify())
        .pipe(gulp.dest("build/"))
});

gulp.task("optimize:css", ["clean:build"], function() {
    gulp.src(["src/css/*.css"])
        .pipe(concat("main.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("build/"))
})
