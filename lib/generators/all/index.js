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
  yeoman.generators.Base.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/root'));

  // the api to hookFor and pass arguments may vary a bit.
  this.hookFor('flight', {
    as: 'app',
    options: {
      options: {
        'skip-install': true
      }
    }
  });

  this.hookFor('flight', {
    as: 'component',
    args: ['my_component']
  });

  this.hookFor('flight', {
    as: 'mixin',
    args: ['my_mixin']
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);
