import angular from 'angular';
import {chatDirective} from './chat.directive';
import friendMenu from './friendsmenu/friendsmenu';
import chatContainer from './chatcontainer/chatcontainer';

export const chat = angular.module('chat', [
  friendMenu.name,
  chatContainer.name
])
.config(function ($stateProvider) {
  $stateProvider.state('chat', {
    url: '/chat',
    template: '<chat></chat>'
  });
})
.directive('chat', chatDirective);