import template from './chat.html';
import {chatController as controller} from './chat.controller';

export const chatDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};