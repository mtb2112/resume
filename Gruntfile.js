module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    cleancss: false,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "css/skeleton.css": "less/skeleton.less",
                    "css/global.css": "less/global.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['less/**/*.less', 'app/views/**/*.jade', 'app/svgs/*.svg'], // which files to watch
                tasks: ['less', 'jade', 'svgstore'],
                options: {
                    nospawn: true
                }
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true,
                },
                files: {
                    'index.html' : 'app/views/index.jade'
                }
            }
        },

        svgstore: {
            options: {
                prefix: "shape-",
                cleanup: false,
                svg: {
                    style: "display: none;"
                }
            },
            default: {
                files: {
                    "images/svg-defs.svg": ["app/svgs/*.svg"]
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'watch', 'jade', 'svgstore']);
};