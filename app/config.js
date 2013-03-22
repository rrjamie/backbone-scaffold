/**
 * Shared config for application bundles.
 */
require.config({
    "paths": {
        "json": "./lib/json/json",

        "jquery": "./lib/jquery/jquery",
        "underscore": "./lib/lodash/lodash",
        "backbone": "./lib/backbone/backbone",
        
        // Templates
        "dust": "./lib/dustjs/requirejs-plugin",
        "dust-core": "./lib/dustjs/dust-core",
        "dust-full": "./lib/dustjs/dust-full",

        // CoffeeScript Support
        "cs": "./lib/coffee-script/requirejs-plugin",
        "coffee-script": "./lib/coffee-script/coffee-script"
    },

    "shim": {
        "backbone": {
            "deps": ["jquery", "underscore"],
            "exports": "Backbone"
        },

        "json": {
            "exports": "JSON"
        },

        "dust-core": {
            "exports": "dust"
        },

        "dust-full": {
            "exports": "dust"
        }
    }
});

