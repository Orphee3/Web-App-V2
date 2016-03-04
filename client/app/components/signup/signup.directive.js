import './signup.styl';
import template from './signup.html';
import {signupController as controller} from './signup.controller';

export const signupDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};