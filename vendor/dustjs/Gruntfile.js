
module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        var next = this.async();
        grunt.util.spawn({
            cmd: 'make',
            args: ['dust'],
            opts: {
                cwd: './repo',
            }
        }, function(error, result, code) {
            
            if (result.stdout) grunt.verbose.ok(result.stdout);
            if (result.stderr) grunt.log.error(result.stderr);
            
            if (error) {
                return next(false);    
            } else {
                var version = grunt.file.readJSON('repo/package.json').version;
                grunt.file.copy('repo/dist/dust-core-' + version + '.js', 'dust-core.js');
                grunt.file.copy('repo/dist/dust-full-' + version + '.js', 'dust-full.js');
            
                return next();
            }
        });
    });


    grunt.registerTask('default', ['build_dependency']);
};
