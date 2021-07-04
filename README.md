# Flight generator

[![Build Status](https://secure.travis-ci.org/flightjs/generator-flight.png?branch=master)](http://travis-ci.org/flightjs/generator-flight)

A [Yeoman](http://yeoman.io/) generator for
[Flight](http://flightjs.github.io/), Twitter's client-side JavaScript
framework. Get up and running with everything you need to create an
application.

NOTE: A separate [Flight package generator](https://github.com/flightjs/generator-flight-package)
is available for creating standalone Flight components.


## Recommended setup

Install [Node.js](http://nodejs.org/) (which comes with npm). It's best to have
npm version 1.2.x or above installed.

Next, globally install the Flight generator. This will automatically install
[Bower](http://bower.io/) and [Yo](http://yeoman.io/) as global dependencies.
These tools will help manage your dependencies and generate the boilerplate
Flight application.

```
npm install -g generator-flight
```

Make a new directory, and `cd` into it:

```
mkdir flight-app && cd $_
```

You're now ready to generate an app!


## Main generator

To generate a Flight-based application:

```
yo flight <app-name>
```

**N.B.** All your Node and client-side dependencies will be installed
automatically unless you include the `--skip-install` option.


## All generators and their output

Available generators (to be run in the root directory of a project).

* `flight <app-name>` (aka `flight:app`)
* `flight:component <component-name>`
* `flight:mixin <mixin-name>`
* `flight:page <page-name>`
* `flight:all`

### flight:app

Scaffolds a Flight application file structure, installs all the library code
you need, and correctly configures your test setup. The app generator will
prompt you to optionally install Bootstrap or Normalize.css.

Example:

```
yo flight my_app
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
├── gulpfile.js
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
* (optional) [Bootstrap](http://getbootstrap.com/)
* (optional) [Normalize.css](http://necolas.github.io/normalize.css)

**via npm**

* Flight generator (installed as a local dependency)
* [Gulp](http://gulpjs.com/) task runner
* [Karma](http://karma-runner.github.io/) unit test runner
* [Node-Static](https://github.com/cloudhead/node-static/) file server

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
    this.attributes({});
    this.after('initialize', function () {});
  }
});
```

And the test file `test/spec/component/tweet_box.spec.js`:

```js
describeComponent('component/tweet_box', function () {
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
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
    this.attributes({});
    this.after('initialize', function () {});
  }
});
```

And the test file `test/spec/component/with_tweet_box.spec.js`:

```js
describeMixin('component/with_tweet_box', function () {
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something');
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
`flight:mixin my_mixin`.


## Developing your application

The [generated application's README](lib/templates/application/README.md)
contains instructions on how to run the tests, server, and other tasks.


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
