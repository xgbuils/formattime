module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'index.js', 'src/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        nodeunit: {
            all: ['test/**/*.js']
        },
        browserify: {
            build: {
                options: {
                    standalone: "app"
                },
                src: './index.js',
                dest: './formattime.js'
            }
        },
        uglify: {
            dist: {
                src: 'formattime.js',
                dest: 'formattime.min.js'
            }           
        },
        
    })

    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-nodeunit')
    grunt.loadNpmTasks('grunt-browserify')

    grunt.registerTask('default', ['jshint', 'nodeunit'])
    grunt.registerTask('test', ['default'])
    grunt.registerTask('browser', ['test', 'browserify', 'uglify'])
}