define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(<%= _.camelize(name) %>);

  /**
   * Module function
   */

  function <%= _.camelize(name) %>() {
    this.attributes({

    });

    this.after('initialize', function () {

    });
  }

});
