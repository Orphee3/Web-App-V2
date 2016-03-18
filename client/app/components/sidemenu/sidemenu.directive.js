import template from './sidemenu.html';
import {sidemenuController as controller} from './sidemenu.controller';

export const sidemenuDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};