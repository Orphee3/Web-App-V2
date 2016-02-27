import './header.styl';
import template from './header.html';
import {headerController as controller} from './header.controller';

export const headerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};