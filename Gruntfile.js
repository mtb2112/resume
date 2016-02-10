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
                    "css/skeleton.css": "less/skeleton.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['less/**/*.less', 'app/views/**/*.jade'], // which files to watch
                tasks: ['less', 'jade'],
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.registerTask('default', ['less', 'watch', 'jade']);
};