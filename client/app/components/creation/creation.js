import angular from 'angular';
import creationDirective from './creation.directive';

export const creation = angular.module('creation', [
])
.config(function ($stateProvider) {
  $stateProvider.state('creation', {
    url: '/creation/:idCreation',
    template: '<creation></creation>'
  });
})
.directive('creation', creationDirective);