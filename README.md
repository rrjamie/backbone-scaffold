rrjamie's Backbone Scaffold
===========================

Featuring:
  - [Backbone](http://backbonejs.org/)
  - [Lodash](https://github.com/bestiejs/lodash)
  - [jQuery](https://github.com/jquery/jquery)
  - [RequireJS](http://requirejs.org/)
  - [DustJS](https://github.com/linkedin/dustjs)
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

 3) Install Grunt (globally): `npm -g install grunt-cli`

 4) Install project dependencies: `npm install`

 5) Get to work!


Grunt Tasks
----------------------------

Grunt is used to automate some commons tasks:

`grunt serve` - Starts a server you can preview your work on. Visit
[http://localhost:3001/app/](http://localhost:3001/app/) to preview
your work in progress.

`grunt build` - Builds the site in to the `build` directory

`grunt clean` - Destroy the build directory

`grunt test`  - Run the Qunit Tests (under Phantomjs)

`grunt libs`  - Build the dependend libraries (those in `vendor/`) and
copy them in to `app/lib`. This is distinct from the regular build step.


Dependencies
----------------------------

This project relies on `grunt` and you need to install `grunt-cli` globally,
and `npm install` the project's dependencies.

To run the tests headless, you will need [PhantomJS](http://phantomjs.org/)


Vendor Depedencies
----------------------------

The `vendor` folder contains a variety of dependencies that are used in the
scaffold. It also includes a per-dependency `Gruntfile.js` which describes
how to call each dependency's build system. These can be built and
copied in to the `app/libs` directory with `grunt libs`. It is recommended
you commit the files in `app/libs` for convenience.

To rebuild the dependencies:

 1) Initialize Git submodules: `git submodule update --init --recursive`
 2) `grunt libs`

This is not done automatically as part of the `grunt build` command.


License
----------------------------

Most of the software is copyright their original owners, and subject to their original
license of each respective project, including any modifications I have made.

If I have neglected to include a license or attribution for any code please notify me.

The small remainder of the work is licensed under an MIT license.


Thanks
----------------------------

Thanks to the authors all of these components and to my wondeful employer @mobify.
