/**
 * Created by Wangcy on 2016/1/5.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            options: {
                separator: ";"
            },
            dist: {
                src: ["src/zepto.js", "src/iscroll-lite.js", "src/cookies.js"],
                dest: "build/libs.js"
            }
        },
        uglify: {
            options: {
                banner: "/*! author: <%= pkg.author %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            my_target: {
                files: {
                    "build/libs.min.js": ["src/zepto.js", "src/iscroll-lite.js", "src/cookies.js"]
                }
            }
        }
    });

    /*grunt.loadNpmTasks("grunt-contrib-concat");*/
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["uglify"]);
};