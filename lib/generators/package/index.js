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
  if (!this.name) {
    throw new Error('Package needs a name, e.g., "yo flight:package name"');
  }
  this.genVersion = pkg.version;

  this.sourceRoot(path.join(__dirname, '../../templates/'));

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {
  this.mkdir('lib');
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
  this.copy('package/bowerrc', '.bowerrc');
  this.copy('package/karma.conf.js', 'karma.conf.js');
  this.copy('package/gitignore', '.gitignore');
  this.copy('common/gitattributes', '.gitattributes');
  this.copy('common/jshintrc', '.jshintrc');
  this.copy('common/travis.yml', '.travis.yml');
  this.copy('common/CHANGELOG.md', 'CHANGELOG.md');
  this.template('package/bower.json', 'bower.json');
  this.template('package/package.json', 'package.json');
  this.template('common/CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('package/README.md', 'README.md');

  // Create in generated 'app' dir
  this.template('component.js', 'lib/' + this.name + '.js');
  this.template('spec.js', 'test/spec/' + this.name + '.spec.js', {
    'requirePath': 'lib/' + this.name,
    'type': 'component'
  });

  // Create in generated 'test' dir
  this.copy('package/test/test-main.js', 'test/test-main.js');
};
