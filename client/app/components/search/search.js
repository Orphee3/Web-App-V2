import angular from 'angular';
import searchDirective from './search.directive';

const search = angular.module('search', [
])
.config(function($stateProvider) {
  $stateProvider.state('searchCreation', {
    url: '/search/:text',
    template: '<search></search>'
  });
})
.directive('search', searchDirective);

export {search}