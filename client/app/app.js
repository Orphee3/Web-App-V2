import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessage from 'angular-messages';
import ngMaterial from 'angular-material';

import {home} from './components/home/home';
import {login} from './components/login/login';

angular.module('Orphee', [
	uiRouter,
	ngAnimate,
	ngAria,
	ngMessage,
	ngMaterial,

	home.name,
	login.name
])
.directive('app', appDirective)
.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue');
});