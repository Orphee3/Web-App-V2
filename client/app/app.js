import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessage from 'angular-messages';
import ngMaterial from 'angular-material';
import ngTranslate from 'angular-translate';

import {languages} from './app.languages';
import {palettes} from './app.palettes';

import {shared} from './shared/shared';
import {head} from './components/header/header';
import {home} from './components/home/home';
import {login} from './components/login/login';

angular.module('Orphee', [
	uiRouter,
	ngAnimate,
	ngAria,
	ngMessage,
	ngMaterial,
	ngTranslate,

	shared.name,
	home.name,
	login.name,
  head.name
])
.directive('app', appDirective)
.config(palettes)
.config(languages);