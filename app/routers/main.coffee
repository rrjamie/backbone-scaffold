define ["backbone", "underscore", "cs!views/main"], (Backbone, _, MainView) ->
    class MainRouter extends Backbone.Router
        routes:
            "": "index"

        constructor: (options) ->
            super

            @app = options.app


            # Initialize root view
            @view = new MainView(el: @app.el)
            @view.render()

        index: ->
            # Main View
            

    MainRouter

