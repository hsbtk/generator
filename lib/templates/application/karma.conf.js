// Karma configuration
//
// For all available config options and default values, see:
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    captureTimeout: 5000,
    exclude: [
      'app/js/main.js'
    ],
    files: [
      // loaded without require
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'app/bower_components/jasmine-flight/lib/jasmine-flight.js',
      // loaded with require
      {pattern: 'app/bower_components/flight/**/*.js', included: false},
      {pattern: 'app/js/**/*.js', included: false},
      {pattern: 'test/spec/**/*.spec.js', included: false},
      // test config
      'test/test-main.js'
    ],
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    reporters: [process.env.TRAVIS ? 'dots' : 'progress'],
    reportSlowerThan: 500,
    singleRun: false
  });
};
