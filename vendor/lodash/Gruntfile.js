module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        var next = this.async();
        grunt.util.spawn({
            cmd: 'repo/build.js',
            args: ['modern', '-d', '-o', 'lodash.js']
        }, function(error, result, code) {
            
            if (result.stdout) grunt.verbose.ok(result.stdout);
            if (result.stderr) grunt.log.error(result.stderr);
            
            if (error) {
                return next(false);    
            } else {
            
                return next();
            }
        });
    });


    grunt.registerTask('default', ['build_dependency']);
};
