/**
 * Created by wangcy on 2016/1/9.
 */
var gulp = require("gulp");
var del = require("del");
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

/*gulp.task("one", function(callback) {
    console.log("one task finish");
    callback();
});

gulp.task("two", ["one"], function() {
    console.log("two task finish");
});

gulp.task("default", ["one", "two"]);*/


gulp.task("clean:build", function() {
    return del(["build"]);
});

gulp.task("clean:test", function() {
    console.log(del.sync(["build/*", "!build/index.html"]));
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
        .pipe(cssnano())
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
    return gulp.src("src/css/*.css", {base: "src"})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat("layout.min.css"))
        .pipe(cssnano())
        .pipe(sourcemaps.write("../maps/", {sourceRoot: "/src/"}))
        .pipe(gulp.dest("build/css"))
});

gulp.task("sourcemaps:js", function() {
    return gulp.src(["src/js/lib/jquery-2.1.3.min.js", "src/js/base.js", "src/js/app/home.js"], {base: "src"})
        .pipe(sourcemaps.init())
        .pipe(concat("home.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("../maps/", {sourceRoot: "/src/"}))
        .pipe(gulp.dest("build/js"))
});

gulp.task("sourcemaps", ["sourcemaps:css", "sourcemaps:js"]);

var jsFilter = filter("**/*.js", {restore: true}),
    cssFilter = filter("**/*.css", {restore: true}),
    notHtmlFilter = filter(["**", "!**/*.html"], {restore: true});

gulp.task("filter:test", function() {
    gulp.src("src/**")
        .pipe(jsFilter)
        .pipe(concat("filter-js.js"))
        .pipe(gulp.dest("build/"))
        .pipe(jsFilter.restore)
        .pipe(concat("all.js"))
        .pipe(gulp.dest("build/"))
});

gulp.task("cleanBuild", function() {
    return del("build");
});

gulp.task("copyFile", ["cleanBuild"], function() {
    return gulp.src("src/js/lib/*", {base: "src"}).pipe(gulp.dest("build/"));
});

gulp.task("outputFile", ["cleanBuild"], function() {
    var assets = filter(["**/*.css", "**/*.js"], {restore: true});

    return gulp.src("src/**/*.html")
        .pipe(useref())
        //.pipe(sourcemaps.init())
        .pipe(gulpif("*.css", cssnano()))
        .pipe(gulpif("*.js", uglify()))
        .pipe(assets)
        .pipe(rev())
        //.pipe(sourcemaps.write("../_maps/"))
        .pipe(assets.restore)
        .pipe(revReplace())
        .pipe(gulp.dest("build/"))
        //.pipe(rev.manifest("build.json", {merge: true}))
        //.pipe(gulp.dest("_manifest/"));
});

gulp.task("cdn", function() {

    // html tags
    var script = /(<script[^>]+src=['"\\]*)([^'">\s\\]*)(['"\s\\]*[^>]*>)/gi,
        link = /(<link[^>]+href=['"\\]*)([^'">\s\\]*)(['"\s\\]*[^>]*>)/gi,
        img = /(<img[^>]+src=['"\\]*)([^'">\s\\]*)(['"\s\\]*[^>]*>)/gi;

    // css tags
    var background = /(url\(['"\\]*)([^'"\\\)]*)(['"\\]*\))/gi;

    var absolutePath = /^(https?:)?\/\//;

    var cdnPath = "//static.istudy.com.cn";

    function cdnReplace(match, p1, p2, p3) {
        if(!absolutePath.test(p2)) {
            return p1 + cdnPath + p2 + p3;
        } else {
            return match;
        }
    }

    return gulp.src("build/index.html")
        .pipe(replace(script, cdnReplace))
        .pipe(replace(link, cdnReplace))
        .pipe(gulp.dest("cdn"));
});

gulp.task("manifest", ["outputFile"], function() {
    var buildDate = new Date();
    var fs = require("fs");
    var buildJson = require("./_manifest/build.json");

    fs.readFile("_manifest/reversions.json", "utf8", function(err, data) {
        var rootObject = {
            name: "reversions",
            buildList: []
        };

        var defaultText = JSON.stringify(rootObject);
        if(data) defaultText = data;

        var pushObject = {
            date: buildDate.toString(),
            list: buildJson
        };

        var updateObject = JSON.parse(defaultText);
        updateObject.buildList.unshift(pushObject);

        fs.writeFile("_manifest/reversions.json", JSON.stringify(updateObject, null, "  "), function(err) {
            if(err) throw err;
        });
    });
});

gulp.task("buildAsset", ["manifest"]);

// sftp test
var sftp = require("gulp-sftp");
gulp.task("sftp", function() {
    gulp.src("build/**")
        .pipe(sftp({
            host: "10.10.10.201",
            port: "22",
            user: "xiaoyuan",
            pass: "xiaoyuan",
            remotePath: "/home/xiaoyuan/tomcat/SNSContent/webapps/ROOT/_sftp/"
        }))
});