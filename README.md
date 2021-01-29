# Flight generator

[![Build Status](https://secure.travis-ci.org/flightjs/generator-flight.png?branch=master)](http://travis-ci.org/flightjs/generator-flight)

Get up and running with everything you need to use Twitter's lightweight,
JavaScript framework, [Flight](http://flightjs.github.io/).

This is a [Flight](http://flightjs.github.io/) generator for
[Yeoman](http://yeoman.io/). It provides several sub-generators to easily
scaffold component, mixin, page, and spec files for applications or standalone
packages.


## Recommended setup

Install [Node.js](http://nodejs.org/) (which comes with npm). It's best to have
npm version 1.2.x or above installed.

Install [Bower](http://bower.io/), [Karma](http://karma-runner.github.io/),
[Yo](http://yeoman.io/), and the Flight generator. These tools will help fetch
and manage your dependencies, generate the boilerplate Flight application, and
run your Jasmine unit tests.

```
npm install -g bower karma yo generator-flight
```

Make a new directory, and `cd` into it:

```
mkdir flight-app && cd $_
```

You're now ready to generate an app or package!


## Main generators

To generate a Flight-based application:

```
yo flight <app-name>
```

To generate a standalone Flight component as a package:

```
yo flight:package <package-name>
```

**N.B.** All your Node and client-side dependencies will be installed automatically
unless you include the `--skip-install` option.


## All generators and their output

Available generators (to be run in the root directory of a project).

* `flight <app-name>` (aka `flight:app`)
* `flight:component <component-name>`
* `flight:mixin <mixin-name>`
* `flight:page <page-name>`
* `flight:all`
* `flight:package <package-name>`

### flight:app

Scaffolds a Flight application file structure, installs all the library code
you need, and correctly configures your test setup. The app generator will
prompt you to optionally install Twitter Bootstrap or Normalize.css.

Example:

```
yo flight
```

Produces:

```
.
├── app
│   ├── bower_components
│   │   ├── es5-shim
│   │   ├── flight
│   │   ├── jasmine-flight
│   │   ├── jquery
│   │   └── requirejs
│   ├── css
│   │   └── main.css
│   ├── img
│   ├── js
│   │   ├── component
│   │   ├── page
│   │   │   └── default.js
│   │   └── main.js
│   ├── 404.html
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── node_modules
├── test
│   ├── spec
│   │   └── component
│   └── test-main.js
├── .bowerrc
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── bower.json
├── karma.conf.js
└── package.json
```

#### Locally installed software

Automatically installs all the Flight framework dependencies, and sets up a
Node-based toolchain for your development workflow.

**via Bower**

* [Flight](http://flightjs.github.io/) (and its dependencies: ES5 Shim, jQuery)
* [RequireJS](http://requirejs.org/)
* [Jasmine jQuery](https://github.com/velesin/jasmine-jquery) extensions
* [Jasmine Flight](https://github.com/flightjs/jasmine-flight) extensions
* (optional) [Twitter Bootstrap](http://twitter.github.io/bootstrap)
* (optional) [Normalize.css](http://necolas.github.io/normalize.css)

**via npm**

* Flight generator (installed as a local dependency)
* [Karma](http://karma-runner.github.io/) unit test runner

### flight:component

Generates a component in `app/js/component`.

Example:

```
yo flight:component tweet_box
```

Produces `app/js/component/tweet_box.js`:

```js
define(function (require) {
  var defineComponent = require('flight/lib/component');

  return defineComponent(tweetBox);

  function tweetBox() {
    this.defaultAttrs({});
    this.after('initialize', function () {});
  }
});
```

And the test file `test/spec/component/tweet_box.spec.js`:

```js
describeComponent('component/tweet_box', function () {
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something', function () {
    expect(true).toBe(false);
  });
});
```

### flight:mixin

Generates a mixin component in `app/js/component`.

Example:

```
yo flight:mixin tweet_actions
```

Produces `app/js/component/with_tweet_actions.js`:

```js
define(function (require) {
  return withTweetActions;

  function withTweetActions() {
    this.defaultAttrs({});
    this.after('initialize', function () {});
  }
});
```

And the test file `test/spec/component/with_tweet_box.spec.js`:

```js
describeMixin('component/with_tweet_box', function () {
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something', function () {
    expect(true).toBe(false);
  });
});
```

### flight:page

Generates a page component in `app/js/page`.

Example:

```
yo flight:page settings
```

Produces `app/js/page/settings.js`:

```js
define(function (require) {
  // var myComponent = require('component/my_component');

  return initialize;

  function initialize() {
    // myComponent.attachTo(document);
  }
});
```

### flight:all

Shortcut that runs `flight:app`, `flight:component my_component`, and
`flight:mixin my_component`.

### flight:package

Flight makes it easy to create, share, and depend on standalone Flight
components, e.g., [flight-storage](https://github.com/cameronhunter/flight-storage).
The `package` generator is designed to setup everything you need to create a
Flight component suitable for registration with the Bower package manager.

Example:

```
yo flight:package foo
```

Produces a package named `flight-foo` with the following output:

```
.
├── bower_components
├── lib
│   └── foo.js
├── node_modules
├── test
│   ├── spec
│   │   └── foo.spec.js
│   └── test-main.js
├── .bowerrc
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── bower.json
├── karma.conf.js
└── package.json
```

#### Locally installed software

Automatically installs all the Flight framework dependencies, and sets up a
Node-based toolchain for your development workflow.

**via Bower**

* [Flight](http://flightjs.github.io/) (and its dependencies: ES5 Shim, jQuery)
* [Jasmine jQuery](https://github.com/velesin/jasmine-jquery) extensions
* [Jasmine Flight](https://github.com/flightjs/jasmine-flight) extensions

**via npm**

* [Karma](http://karma-runner.github.io/) unit test runner


## Running your app or package's tests

The generated app or package uses a local installation of Karma to run the unit
tests.  When you have Karma globally installed, it's easy to run and then watch
your unit tests in Chrome and Firefox:

```
karma start
```

This is the recommended approach because the moment your unit tests start
failing, you'll be notified in the terminal.

To run your unit tests just once in PhantomJS (for CI), you must install
PhantomJS and the run:

```
npm test
```

For further information about configuring Karma, please refer to the [Karma
website](http://karma-runner.github.io/).


## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


## Authors

* Nicolas Gallagher [@necolas](https://twitter.com/necolas)


## License

Copyright 2013 Twitter, Inc and other contributors.

Licensed under the MIT License.
