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
                },
                files: {
                    'index.html' : '<%= config.app.jade %>index.jade'
                }
            }
        },

        svgstore: {
            options: {
                prefix: "shape-",
                viewBox: '0 0 32 32',
                svg: {
                    style: "display: none;"
                }
            },
            default: {
                files: {
                    "images/svg-defs.svg": ["app/svgs/*.svg"]
                }
            }
        },

        svg_sprite: {
            icons: {
                expand: true,
                cwd: "<%= config.app.svgs %>",
                src: [ "*.svg" ],
                dest: "<%= config.app.img %>",
                options: {
                    shape: {
                        dimension: {
                            maxWidth: 138,
                            maxHeight: 24,
                            precision: 1
                        }
                    },
                    svg: {
                        padding: 20,
                        dimenstionAttributes: true
                    },
                    mode: {
                        view: {
                            prefix: "@ico-%s",
                            bust: true,
                            sprite: "icons.sprite.svg",
                            dest: "<%= config.app.img %>",
                            common: "sprite",
                            dimenstions: true
                        }
                    }
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'watch', 'jade', 'svgstore']);
};