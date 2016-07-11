'use strict';

angular
  .module('dealsAssignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
      $stateProvider
          .state('deals', {
            url: '/deals',
            template: '<deals></deals>'

          });
  });
