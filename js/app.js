// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.services',
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.coffee'
    ]);

})();
