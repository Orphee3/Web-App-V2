import template from './audioPlayer.html';
import {audioPlayerController as controller} from './audioPlayer.controller';

export const audioPlayerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};