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
                json: "app/json/"
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
                    "<%= config.app.css %>global.css": "<%= config.app.less %>global.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['<%= config.app.less %>**/*.less', '<%= config.app.jade %>**/*.jade', '<%= config.app.svgs %>*.svg', '<%= config.app.json %>**/*.json'], // which files to watch
                tasks: ['less', 'jade', 'svgstore', 'cssmin'],
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
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app.css %>',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.app.css %>',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '<%= config.app.js %>custom.min.js' : ['<%= config.app.js %>custom.js']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'jade', 'svgstore', 'watch']);
};