import angular from 'angular';
import {signupDirective} from './signup.directive';

export const signup = angular
  .module('signup', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    });
  })
  .directive('signup', signupDirective);