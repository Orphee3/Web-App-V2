import angular from 'angular';
import {sidemenuDirective} from './sidemenu.directive';

export const sidemenu = angular.module('sideNavMenu', [])
  .directive('sideNavMenu', sidemenuDirective);