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
      'name': 'normalize',
      'message': 'Would you like to include Normalize.css?',
      'default': 'Y/n'
    },
    {
      'name': 'bootstrap',
      'message': 'Would you like to include Twitter Bootstrap CSS?',
      'default': 'Y/n'
    }
  ];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.bootstrap = (/y/i).test(props.bootstrap);
    this.normalize = (/y/i).test(props.normalize);

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
  this.copy('common/gitattributes', '.gitattributes');
  this.copy('common/jshintrc', '.jshintrc');
  this.copy('common/travis.yml', '.travis.yml');
  this.template('application/bower.json', 'bower.json');
  this.template('application/package.json', 'package.json');
  this.template('common/CHANGELOG.md', 'CHANGELOG.md');
  this.template('common/CONTRIBUTING.md', 'CONTRIBUTING.md');
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

/**
 * Generate the main styles
 *
 * If additional CSS libraries are requested, import them into the main CSS
 * file.
 *
 * @api public
 */

Generator.prototype.importStyles = function createStyles() {
  var bootstrapPath = 'https://raw.github.com/twitter/bootstrap/gh-pages/assets/css/';

  if (this.bootstrap) {
    this.fetch(bootstrapPath + 'bootstrap.css', 'app/css/bootstrap.css', function () {});
    this.fetch(bootstrapPath + 'bootstrap-responsive.css', 'app/css/bootstrap-responsive.css', function () {});
  }
};

Generator.name = 'Flight';
