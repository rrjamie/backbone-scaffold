define(["app"], function(App) {
    module("App");

    test("Hello World", function() {
        var fixture = document.getElementById('qunit-fixture');
        
        App.init('qunit-fixture');
        equal(fixture.innerHTML.trim(), "<h1>Hello World</h1>");
    });
});
