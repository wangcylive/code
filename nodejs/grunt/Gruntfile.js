/**
 * Created by Wangcy on 2016/1/5.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        config: grunt.file.readJSON("package.json"),
        concat: {
            /*options: {
                separator: ";"
            },*/
            /*dist: {
                src: ["src/zepto.js", "src/iscroll-lite.js", "src/cookies.js"],
                dest: "build/libs.js"
            },*/
        },
        uglify: {
            options: {
                banner: "/*! author: <%= config.author %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            /*my_target: {
                files: {
                    "build/js/app/main.js": ["src/js/app/main.js"]
                }
            },*/
        },
        clean: ["build", ".tmp"],
        cssmin: {
            options: {
                shorthandCompacting: false,  // 简写压缩
                roundingPrecision: -1  // 舍入精度
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
        },
        filerev: {
            options: {
                algorithm: "sha1",
                length: 8
            },
            js: {
                src: ["build/js/app/main.js"],
                dest: "build/js/app"
            },
            css: {
                src: ["build/css/layout.css"],
                dest: "build/css"
            }
        },
        watch: {
            scripts: {
                files: ["src/js/app/*.js", "src/js/base.js"],
                tasks: ["uglify", "filerev", "clean"],
                options: {

                }
            }
        },
        useminPrepare: {
            html: ["src/index.html", "src/main.html"],
            options: {
                dest: "build"
            }
        },
        usemin: {
            html: ["build/index.html", "build/main.html"]
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['js/lib/*', "*.html"],
                    dest: 'build/'
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-filerev");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");


    grunt.registerTask("default", ["clean"]);

    grunt.registerTask("build", [
        "useminPrepare",
        "clean",
        "copy",
        "concat:generated",
        "cssmin:generated",
        "uglify:generated",
        "filerev",
        "usemin"
    ]);
};