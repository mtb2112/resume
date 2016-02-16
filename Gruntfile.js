module.exports = function(grunt) {
    grunt.initConfig({
        config: {
            app: {
                root: "app/",
                js: "js/",
                less: "app/less/",
                img: "images/",
                css: "css/",
                jade: "app/views/",
                svg: "app/svgs/",
            }
        },

        less: {
            development: {
                options: {
                    compress: false,
                    cleancss: false,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "<%= config.app.css %>skeleton.css": "<%= config.app.less %>skeleton.less",
                    "<%= config.app.css %>global.css": "<%= config.app.less %>global.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['<%= config.app.less %>**/*.less', '<%= config.app.jade %>**/*.jade', '<%= config.app.svgs %>*.svg'], // which files to watch
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
                    data: function(dest, src) {
                        return require('./app/json/data.json');
                    }
                },
                files: {
                    'index.html' : '<%= config.app.jade %>index.jade'
                }
            }
        },

        svgstore: {
            options: {
                prefix: "shape-",
                cleanup: false,
                inheritviewbox: true,
                svg: {
                    style: "display: none;"
                }
            },
            default: {
                files: {
                    "<%= config.app.img %>svg-defs.svg": ["<%= config.app.svg %>*.svg"]
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'jade', 'svgstore', 'watch']);
};