

module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        grunt.file.copy('repo/json2.js', 'json.js');
    });


    grunt.registerTask('default', ['build_dependency']);
};
