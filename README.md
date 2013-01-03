rrjamie's Backbone Scaffold
===========================

Featuring:
  - [Backbone](http://backbonejs.org/)
  - [Lodash](https://github.com/bestiejs/lodash)
  - [jQuery](https://github.com/jquery/jquery)
  - [RequireJS](http://requirejs.org/)
  - [Handlebars](http://handlebarsjs.com/)
  - [CoffeeScript](http://coffeescript.org/)
  - [QUnit](http://qunitjs.com/)


Why?
-----------------------------

Setting up all this stuff takes forever. I don't want to have to do it again.


How to Use
-----------------------------

 1) Clone the repo

    `git clone git@github.com:rrjamie/backbone-scaffold.git`

 2) Delete the original origin

    `git remote rm origin`

 3) Get to work!


Known Issues
----------------------------

  - Dependencies on Backbone, jQuery, etc are hard coded.
  - The `hbs.js` (handlebars r.js plugin) had to be modified to work with lodash.
  - Handlebars could be mostly excluded on build (we only have to include `runtime.js`)


License
----------------------------

Most of the software is copyright their original owners, and subject to their original
license of each respective project, including any modifications I have made.

If I have neglected to include a license or attribution for any code please notify me.

The small remainder of the work is licensed under an MIT license.


Thanks
----------------------------

Thanks to the authors all of these components and to my wondeful employer @mobify.
