/**
 * Shared config for application bundles.
 */
require.config({
    "paths": {
        "json2": "./lib/json2",

        "jquery": "./lib/jquery/jquery-v1.8.3",
        "underscore": "./lib/lodash/lodash-v1.0.0-rc.3",
        "backbone": "./lib/backbone/backbone-v0.9.9",
        
        // Templates
        "handlebars": "./lib/handlebars/handlebars-1.0.rc.1",
        "hbs": "./lib/handlebars/hbs",
        "i18nprecompile": "./lib/handlebars/i18nprecompile",

        // Tests
        "tests": "../tests",

        // CoffeeScript Support
        "coffee-script": "./lib/coffee-script/coffee-script-v1.4.0",
        "cs": "./lib/coffee-script/requirecs"
    },

    "shim": {
        "backbone": {
            "deps": ["jquery", "underscore"],
            "exports": "Backbone"
        },

        "handlebars": {
            "exports": "Handlebars"
        },

        "json2": {
            "exports": "JSON"
        }
    },

    "hbs": {
        "i18nDirectory": "templates/i18n/"
    }
});

