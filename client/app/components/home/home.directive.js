import template from './home.html';
import {homeController as controller} from './home.controller';
import './home.styl';

export const homeDirective = ()=> {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};