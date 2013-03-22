var path = require('path');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        libs: {
            backbone: ['backbone.js'],
            'coffee-script': ['coffee-script.js', 'requirejs-plugin.js'],
            dustjs: ['dust-full.js', 'dust-core.js', 'requirejs-plugin.js'],
            jquery: ['jquery.js'],
            json: ['json.js'],
            lodash: ['lodash.js'],
            requirejs: ['require.js']
        },

        connect: {
            server: {
                options: {
                    port: 3001,
                }
            }
        },

        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:3001/test/index.html'
                    ]
                }
            }
        },

        requirejs: {
            compile: {
                options: eval(grunt.file.read('build.js', {encoding: 'utf8'}))
            }
        }
    });


    grunt.registerTask('serve', ['connect:server:keepalive']);
    grunt.registerTask('test', ['connect:server', 'qunit']);

    grunt.registerTask('clean', 'Clean build directory', function() {
        grunt.file.delete('build');
    });

    grunt.registerTask('build', 'Builds the application', ['clean', 'requirejs']);

    grunt.registerMultiTask('libs', 'Build library dependencies', function() {
        /* Builds each dependency in `vendor` and copies the required
         * files in to `app/lib`.
         *
         * This only has to be done when we update dependencies, and
         * the generated files should be commited for convienence. However
         * no one should modified the files in `app/lib`.
         *
         * Each dependency has its own Gruntfile that handles the specifics
         * of calling that particular packages build system.
         */

        var next = this.async();

        var libraryName = this.target;
        var files = this.data;

        grunt.log.ok("Compiling " + libraryName);
        grunt.util.spawn({
            grunt: true,
            args: ['--verbose', '--gruntfile', path.join('vendor', libraryName, 'Gruntfile.js')]
        }, function(error, result, code) {
            if (result.stdout) grunt.verbose.ok(result.stdout);
            if (result.stderr) grunt.log.error(result.stderr);
            if (error) return next(false);

            grunt.log.ok("Populating app/lib/" + libraryName);

            grunt.util._.each(files, function(filename) {
                var srcPath = path.join('vendor', libraryName, filename);
                var dstPath = path.join('app', 'lib', libraryName, filename);
                grunt.file.copy(srcPath, dstPath);
            });

            return next();
        });
    });


};
