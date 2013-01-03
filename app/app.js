define(["backbone", "underscore", "cs!routers/main"], function(Backbone, _, Router) {
    var App = function App(options) {
        var el = options.el

        if (!el) {
            throw new Error("App requires an element to bind to");
        }

        this.el = el;
        this.router = new Router({app: this});

        var root = options.root || '/';

        Backbone.history.start({pushState: true, root: root});
    };

    App.init = function init(id, options) {
        options = options || {};

        var el = document.getElementById(id);
        options.el = el;

        return new App(options);
    }

    _.extend(App.prototype, Backbone.Events);

    return App;
});
