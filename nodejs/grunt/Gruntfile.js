/**
 * Created by Wangcy on 2016/1/5.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        config: grunt.file.readJSON("package.json"),
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
                banner: "/*! author: <%= config.author %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            my_target: {
                files: {
                    "build/libs.min.js": ["src/zepto.js", "src/iscroll-lite.js", "src/cookies.js"]
                }
            }
        },
        clean: {
            js: ["build"]
        },
        cssmin: {
            options: {
                shorthandCompacting: false,  // 简写压缩
                roundingPrecision: -1  // 舍入精度
            },
            target: {
                /*files: {
                    "build/css/common.css": ["src/css/base.css", "src/css/form.css"]
                }*/
                files: [{
                    expand: true,
                    cwd: "src/css",
                    src: ["*.css", "!form.css"],
                    dest: "build/css",
                    ext: ".min.css"
                }]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    Zepto: true
                }
            },
            all: ["Gruntfile.js", "src/js/common.js", "src/js/app/*.js"]
        }
    });

    /*grunt.loadNpmTasks("grunt-contrib-concat");*/
    //grunt.loadNpmTasks("grunt-contrib-uglify");
    //grunt.loadNpmTasks("grunt-contrib-clean");
    //grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ["jshint"]);
};