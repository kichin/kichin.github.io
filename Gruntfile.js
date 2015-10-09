module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      jsrv: 'jekyll serve --force_polling',
      build: 'jekyll build'
    },

    concurrent: {
      tasks: ["exec:jsrv", "watch"],
      options: {
        logConcurrentOutput: true 
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'expanded',
          sourceMap: false
        },

        files: {
          'css/vendor.css': 'scss/vendor.scss',
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','concurrent']);
}