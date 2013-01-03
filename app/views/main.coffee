define ["backbone", "hbs!templates/main"], (Backbone, template) ->
    class MainView extends Backbone.View
        template: template

        render: () ->
            @$el.html @template(message: "Hello World")

    MainView
