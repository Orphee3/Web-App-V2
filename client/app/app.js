import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessage from 'angular-messages';
import ngMaterial from 'angular-material';

angular.module('Orphee', [
	uiRouter,
	ngAnimate,
	ngAria,
	ngMessage,
	ngMaterial
])
.directive('app', appDirective)
.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue');
});