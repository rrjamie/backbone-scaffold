define ["backbone", "dust!templates/main"], (Backbone, template) ->
    class MainView extends Backbone.View
        template: template

        render: () ->
            @template message: "Hello World", (err, html) => @$el.html html

    MainView
