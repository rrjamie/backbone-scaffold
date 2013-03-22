

module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        grunt.file.copy('repo/backbone.js', 'backbone.js');
    });


    grunt.registerTask('default', ['build_dependency']);
};
