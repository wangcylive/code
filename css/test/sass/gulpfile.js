/**
 * Created by Wangcy on 2016/1/22.
 */
var gulp = require("gulp"),
    del = require("del"),
    uglify = require("gulp-uglify"),
    cssnano = require("gulp-cssnano"),
    concat = require("gulp-concat"),
    rev = require("gulp-rev"),
    sourcemaps = require("gulp-sourcemaps"),
    filter = require("gulp-filter"),
    useref = require("gulp-useref"),
    revReplace = require("gulp-rev-replace"),
    gulpif = require("gulp-if"),
    sass = require("gulp-sass");

gulp.task("build:sass", function() {
    gulp.src("src/sass/layout.scss")
        .pipe(sass({
            outputStyle: "expanded",
            indentWidth: 4
        }).on("error", sass.logError))
        .pipe(gulp.dest("src/css"))
});