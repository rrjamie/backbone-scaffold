module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        grunt.file.copy('repo/require.js', 'require.js');
    });


    grunt.registerTask('default', ['build_dependency']);
};
