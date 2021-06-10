=== HEAD

* Fix path to jQuery in Karma config and index.html.
* Install jQuery 2.x.x in generated app.
* Install Bootstrap 3.x.x and Normalize.css 3.x.x in generated app.

=== 0.7.1 (January 23, 2014)

* Require Node >= 0.10.

=== 0.7.0 (January 18, 2014)

* Update `yeoman-generator` to 0.16.x.
* Add LiveReload support.
* Add a development server.
* Fix filenames of placeholder component/mixin created by `flight:all`.
* Improve Karma configuration.
* Make `bower_components` the base path for requirejs.
* Fix generated test setup by updating `jasmine-flight` to 2.2.x.

=== 0.6.1 (January 15, 2014)

* Fix duplicate logging in generated app scaffold.
* Use valid `hookFor` signature.
* Specify a version range for `jasmine-jquery` and `jasmine-flight`.

=== 0.6.0 (November 1, 2013)

* Install Bootstrap 3 via the "components" shim package.
* Add more generator options: Bootstrap theme and Google Analytics.

=== 0.5.2 (August 30, 2013)

* Fix installation of Boostrap toolkit.

=== 0.5.1 (August 28, 2013)

* Upgrade `yo` and `yeoman-generator` dependencies to fix compatibility issue.

=== 0.5.0 (August 26, 2013)

* Upgrade generated app to use Karma 0.10.x.
* Add new Google Analytics snippet.

=== 0.4.1 (August 6, 2013)

* Fix path to debug module in generated app's `main.js` file.

=== 0.4.0 (August 6, 2013)

* Specify `yo` and `karma` as peerDependencies.
* Update to Flight 1.1.x.

=== 0.3.0 (July 12, 2013)

* Move the `flight:package` generator into a seperate module.

=== 0.2.1 (July 8, 2013)

* Update paths to `jasmine-flight`.
* Add MIT License to scaffolds.
* Add `bower_components` to application `.gitignore`.
* Update Yeoman prompt code.
* Update to Yeoman Generator 0.12.
* Update `flight:app` Bower dependencies.

=== 0.2.0 (May 30, 2013)

* Add `flight:package` generator
* Use PhantomJS for CI tests in scaffolded app
* Fix scripts load order with Karma in scaffold
* Add Node.js 0.10 to scaffold's `travis.yml`
* Bump minor version for yeoman-generator dependency.

=== 0.1.0 (May 21, 2013)

* Initial public release.
