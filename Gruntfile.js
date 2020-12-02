var shell = require('shelljs');
var semver = require('semver');

module.exports = function (grunt) {
  function run(cmd, msg) {
    shell.exec(cmd);
    if (msg) grunt.log.ok(msg);
  }

  grunt.registerTask('release', 'git commit, tag, push; npm publish', function (newversion) {
    var version = grunt.file.readJSON('package.json').version;
    newversion = semver.inc(version, newversion) || (semver.gt(newversion, version) ? newversion : null);

    if (!newversion) {
      grunt.log.error('You must supply a valid version');
    }

    run('npm version ' + newversion + ' -m "v' + newversion + '"');
    run('git push --tags origin master');
    run('npm publish');
  });
};
