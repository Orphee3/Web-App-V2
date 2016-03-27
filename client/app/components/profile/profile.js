import angular from 'angular';
import profileDirective from './profile.directive';

export const profile = angular.module('profile', [
]).config(function ($stateProvider) {
  $stateProvider.state('profile', {
    url: '/profile/:idUser',
    template: '<profile></profile>'
  });
})
.directive('profile', profileDirective);