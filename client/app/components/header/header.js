import angular from 'angular';
import {headerDirective} from './header.directive';

export const head = angular.module('head', [])
  .directive('headerNav', headerDirective);