/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var pkg = require('./../../../package.json');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('name', { type: String, required: false });
  this.name = this.name || path.basename(process.cwd());
  this.genVersion = pkg.version;

  this.sourceRoot(path.join(__dirname, '../../templates/'));

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Prompts for information to seed the generated app
 *
 * @api public
 */

Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      type: 'confirm',
      name: 'bootstrap',
      message: 'Include Bootstrap 3?'
    },
    {
      type: 'confirm',
      name: 'bootstrapTheme',
      message: 'Include Bootstrap theme?',
      when: function (answers) {
        if (answers.bootstrap) return true;
        return false;
      }
    },
    {
      type: 'confirm',
      name: 'normalize',
      message: 'Include Normalize.css?',
      when: function (answers) {
        if (answers.bootstrap) return false;
        return true;
      }
    },
    {
      type: 'confirm',
      name: 'analytics',
      message: 'Include the Google Analytics snippet?'
    },
    {
      type: 'input',
      name: 'analyticsCode',
      message: 'What\'s your Google Analytics UA code?',
      when: function (answers) {
        if (answers.analytics) return true;
        return false;
      }
    }
  ];

  this.prompt(prompts, function (props) {
    this.bootstrap = props.bootstrap;
    this.bootstrapTheme = props.bootstrapTheme;
    this.normalize = props.normalize;
    this.analytics = props.analytics;
    this.analyticsCode = props.analyticsCode;

    cb();
  }.bind(this));
};

/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {
  this.mkdir('app');
  this.mkdir('app/css');
  this.mkdir('app/img');
  this.mkdir('app/js');
  this.mkdir('app/js/component');
  this.mkdir('app/js/page');
  this.mkdir('test');
  this.mkdir('test/spec');
};

/**
 * Generate the standard project files
 *
 * Copy over basic files that don't require any app-specific data.
 * Other files are templates that require app-specific data.
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {
  // Create in generated root
  this.copy('application/bowerrc', '.bowerrc');
  this.copy('application/karma.conf.js', 'karma.conf.js');
  this.copy('application/gitignore', '.gitignore');
  this.copy('application/gitattributes', '.gitattributes');
  this.copy('application/gulpfile.js', 'gulpfile.js');
  this.copy('application/jshintrc', '.jshintrc');
  this.copy('application/travis.yml', '.travis.yml');
  this.template('application/bower.json', 'bower.json');
  this.template('application/package.json', 'package.json');
  this.template('application/CHANGELOG.md', 'CHANGELOG.md');
  this.template('application/CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('application/LICENSE.md', 'LICENSE.md');
  this.template('application/README.md', 'README.md');

  // Create in generated 'app' dir
  this.copy('application/app/favicon.ico', 'app/favicon.ico');
  this.copy('application/app/robots.txt', 'app/robots.txt');
  this.template('application/app/404.html', 'app/404.html');
  this.template('application/app/index.html', 'app/index.html');
  this.template('application/app/main.css', 'app/css/main.css');
  this.template('application/app/main.js', 'app/js/main.js');
  this.template('page.js', 'app/js/page/default.js');

  // Create in generated 'test' dir
  this.copy('application/test/test-main.js', 'test/test-main.js');
};

Generator.name = 'Flight';
