/**
 * Created by wangcy on 2016/1/9.
 */
var gulp = require("gulp");
var del = require("del");
var vinylPaths = require("vinyl-paths");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var concat = require("gulp-concat");
var rev = require("gulp-rev");
var sourcemaps = require("gulp-sourcemaps");

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

gulp.task("optimize:js", function() {
    gulp.src(["src/js/base.js", "src/js/app/home.js"], {
        base: "src"
    })
        .pipe(concat("home.js"))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest("build/"))
        .pipe(rev.manifest("manifest.json", {merge: true}))
        .pipe(gulp.dest("_manifest/"))
});

gulp.task("optimize:css", function() {
    gulp.src(["src/css/*.css"])
        .pipe(concat("main.css"))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest("build/"))
        .pipe(rev.manifest("manifest.json", {merge: true}))
        .pipe(gulp.dest("_manifest/"))
});

gulp.task("build", ["clean:build", "optimize:css", "optimize:js"]);

gulp.task("rev:test", ["clean:build"], function() {
    return gulp.src(["src/js/**/*.js", "src/css/*.css"], {base: "src"})
        .pipe(sourcemaps.init())
        .pipe(rev())
        .pipe(sourcemaps.write(""))
        .pipe(gulp.dest("build/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("_manifest/"))
});

gulp.task("sourcemaps:css", function() {
    gulp.src("src/css/*.css", {base: "src"})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat("layout.min.css"))
        .pipe(minifyCss())
        .pipe(sourcemaps.write("../maps/", {sourceRoot: "/src/"}))
        .pipe(gulp.dest("build/css"))
});

gulp.task("sourcemaps:js", function() {
    gulp.src(["src/js/lib/jquery-2.1.3.min.js", "src/js/base.js", "src/js/app/home.js"], {base: "src"})
        .pipe(sourcemaps.init())
        .pipe(concat("home.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("../maps/", {sourceRoot: "/src/"}))
        .pipe(gulp.dest("build/js"))
});