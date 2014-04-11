module.exports = function(grunt) {

  grunt.initConfig({
    nodeunit: {
      all: ['tests/index.js']
    },
    browserify: {
      all: {
        src: ['src/index.js', 'src/data.js', 'src/render.js'],
        dest: 'build/all.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['nodeunit', 'browserify']);
};
