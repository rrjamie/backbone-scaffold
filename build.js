/**
 * Studio Build file.
 *
 * RequireJS Optimization FAQ: http://requirejs.org/docs/optimization.html
 * Example Build file: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
({
    appDir: "app",
    baseUrl: ".",
    dir: "build",
    mainConfigFile: "app/config.js",

    // Stub out CS (CoffeeScript), so it's not included in optimized output
    stubModules: ['cs'],

    modules: [{
        name: "app",

        // Exclude Coffee-Script, so it's not included in optimized output
        exclude: ['coffee-script']
    }] 
})
