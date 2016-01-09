'use strict';

module.exports = function (grunt) {

  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    config: config,
    watch: {},
    'grunt-rev-all': {
      dist: {
        src: ['dist/**/*'],
        root: 'dist',
        hasLinks: ['.css', '.js'],
        runtimeBase: {
            'dist': []
        },
        lookLocal: [],
        noRev: ['.map', '.gzip', '.json', '.md']
      }
    },
    clean: {
      dist: 'dist/'
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'app/',
        src: ['**/*'],
        dest: 'dist/'
      }
    },
    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          files: [
            '<%= config.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= config.app %>/images/{,*/}*',
            '.tmp/scripts/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: ['.tmp', config.app],
            routes: {
              '/bower_components': './bower_components'
            }
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-rev-all');

  grunt.registerTask('default', [
    'browserSync:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'copy:dist',
    'grunt-rev-all:dist',
    'browserSync:dist',
    'watch'
  ]);

};

// grunt clean && grunt copy && grunt grunt-rev-all && grunt browserSync:dist
