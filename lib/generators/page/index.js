/**
 * Module dependencies.
 */

var path = require('path');
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
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/'));
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate files for a Flight page
 *
 * @api public
 */

Generator.prototype.createPageFiles = function createPageFiles() {
  this.name = this.name || 'my_page';
  this.template('page.js', 'app/js/page/' + this.name + '.js');
};
