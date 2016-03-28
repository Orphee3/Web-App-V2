import angular from 'angular';
import momentsDirective from './moments.directive';

export const moments = angular.module('moments', [
])
.config(function($stateProvider) {
  $stateProvider.state('moments', {
    url: '/moments',
    template: '<moments></moments>'
  })
})
.directive('moments', momentsDirective);