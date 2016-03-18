import angular from 'angular';
import {audioPlayerDirective} from './audioPlayer.directive';

export const audioPlayer = 
angular
  .module('audioPlayer', [])
  .directive('audioPlayer', audioPlayerDirective);