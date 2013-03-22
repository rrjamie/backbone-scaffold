
module.exports = function(grunt) {
    grunt.registerTask('setup_dependency', function() {
        var next = this.async();
        grunt.util.spawn({
            cmd: 'npm',
            args: ['install'],
            opts: {
                cwd: './repo'
            }
        }, function(error, result, code) {
            if (result.stdout) grunt.log.write(result.stdout);
            if (result.stderr) grunt.log.error(result.stderr);
            
            if (error) return next(false);    
            return next();
        });
    });


    grunt.registerTask('build_dependency', function() {
        var next = this.async();
        grunt.util.spawn({
            cmd: 'grunt',
            args: ['default'],
            opts: {
                cwd: './repo'
            }
        }, function(error, result, code) {
            
            if (result.stdout) grunt.log.write(result.stdout);
            if (result.stderr) grunt.log.error(result.stderr);
            
            if (error) {
                return next(false);    
            } else {
                grunt.file.copy('repo/dist/jquery.js', 'jquery.js');
            
                return next();
            }
        });
    });


    grunt.registerTask('default', ['setup_dependency', 'build_dependency']);
};
