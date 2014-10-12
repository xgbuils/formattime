module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        concat: {
        	dist: {
                src: ['scripts.js', 'script1.js', 'script2.js'],
                dest: 'unidos.js'
            }
        },
        uglify: {
        	dist: {
        		src: 'unidos.js',
        		dest: 'build/unidos.min.js'
        	}        	
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');


    grunt.registerTask('default', ['jshint'/*, 'concat', 'uglify'*/]);
}