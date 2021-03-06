/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('../package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    babel: {
        options: {
            sourceMap: true,
            modules: 'amd'
        },
        dist: {
            files: [{
              expand: true,
              cwd: 'js',
              src: ['**/*.js'],
              dest: 'transpiled',
              ext: '.js'
            }]
        }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['transpiled/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "transpiled",
          out: "dist/<%= pkg.name %>.js",
          name: 'app',
          optimize:'none'
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    eslint: {
      target: ['js/**/*.js']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', ['eslint', 'babel', 'requirejs']);

};
