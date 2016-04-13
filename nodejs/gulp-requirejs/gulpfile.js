/**
 * Created by wangcy on 2016/1/9.
 */
var gulp = require("gulp");
var del = require("del");
var rjs = require("requirejs");
var plugins = require("gulp-load-plugins");

var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var rev = require("gulp-rev");
var sourcemaps = require("gulp-sourcemaps");
var filter = require("gulp-filter");
var useref = require("gulp-useref");
var revReplace = require("gulp-rev-replace");
var replace = require("gulp-replace");

var gulpif = require("gulp-if");

gulp.task("rjs", ["clear"], function(callback) {
    rjs.optimize({
        appDir: "./src",
        mainConfigFile: "./src/js/require-config.js",
        baseUrl: "./js",
        paths: {
            jquery: "empty:"
        },
        dir: "./rjs",
        modules: [
            {
                name: "./main",
                include: [
                    "./app/jquery.nodeName"
                ]
            }
        ],
        removeCombined: false,
        findNestDependencies: true,
        optimizeCss: "standard"
    }, function(buildResponse) {
        console.log(buildResponse);

        callback();
    }, callback);
});

gulp.task("clear", function() {
    return del(["./dist", "./rjs"]);
});

gulp.task("hash", ["rjs"], function() {
    var assets = filter(["**/*.css", "**/*.js"], {restore: true});

    gulp.src("./rjs/js/lib/**", {base: "./rjs"})
        .pipe(gulp.dest("./dist"));

    return gulp.src("./rjs/**/*.html", {base: "./rjs"})
        .pipe(useref({searchPath: "./rjs"}))
        .pipe(assets)
        .pipe(rev())
        .pipe(assets.restore)
        .pipe(revReplace())
        .pipe(gulp.dest("./dist"))
});

gulp.task("default", ["hash"]);