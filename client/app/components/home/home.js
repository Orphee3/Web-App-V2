import angular from 'angular';
import {homeDirective} from './home.directive';

export const home = angular.module('login', [])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		template: '<home></home>'
	});
})
.directive('home', homeDirective);