/*global describe:true, beforeEach:true, it:true */

var assert = require('assert');
var helpers = require('yeoman-generator').test;
var path = require('path');

describe('Flight generator test', function () {
  var flight;
  var testGeneratorExpectedFiles;

  beforeEach(function (cb) {
    var deps = [
      '../../lib/generators/app',
      '../../lib/generators/component',
      '../../lib/generators/mixin',
      '../../lib/generators/page'
    ];

    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) cb(err);
      flight = helpers.createGenerator('flight:app', deps, ['myapp']);
      flight.options['skip-install'] = true;
      cb();
    });

    helpers.assertGeneratorMakesExpected = function (generator, expected, cb) {
      helpers.mockPrompt(generator, {'normalize': 'Y'});

      generator.run([], function () {
        helpers.assertFiles(expected);
        cb();
      });
    };
  });

  describe('flight:app', function () {
    it('runs sucessfully', function () {
      flight.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        // dotfiles
        '.bowerrc',
        '.gitignore',
        '.gitattributes',
        '.jshintrc',
        // config files
        'bower.json',
        'karma.conf.js',
        'package.json',
        // docs
        'CONTRIBUTING.md',
        'README.md',
        // app
        'app/404.html',
        'app/favicon.ico',
        'app/index.html',
        'app/robots.txt',
        'app/css/main.css',
        'app/js/main.js',
        'app/js/page/default.js',
        // test
        'test/test-main.js'
      ];

      helpers.assertGeneratorMakesExpected(flight, expected, cb);
    });
  });

  describe('flight:component', function () {
    var flightComponent;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/component'];
      flightComponent = helpers.createGenerator('flight:component', deps, ['foo']);
      cb();
    });

    it('runs sucessfully', function () {
      flightComponent.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        ['app/js/component/foo.js', /function foo()/],
        ['test/spec/component/foo.spec.js', /describeComponent\('component\/foo/]
      ];

      helpers.assertGeneratorMakesExpected(flightComponent, expected, cb);
    });
  });

  describe('flight:mixin', function () {
    var flightMixin;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/mixin'];
      flightMixin = helpers.createGenerator('flight:mixin', deps, ['foo']);
      cb();
    });

    it('runs sucessfully', function () {
      flightMixin.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        ['app/js/component/with_foo.js', /function withFoo()/],
        ['test/spec/component/with_foo.spec.js', /describeMixin\('component\/with_foo/]
      ];

      helpers.assertGeneratorMakesExpected(flightMixin, expected, cb);
    });
  });

  describe('flight:page', function () {
    var flightPage;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/page'];
      flightPage = helpers.createGenerator('flight:page', deps, ['foo']);
      cb();
    });

    it('runs sucessfully', function () {
      flightPage.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        'app/js/page/foo.js'
      ];

      helpers.assertGeneratorMakesExpected(flightPage, expected, cb);
    });
  });
});
