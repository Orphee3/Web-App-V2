import angular from 'angular';
//import moment from 'moment';
import moment from 'moment/min/moment-with-locales';
import {chatDirective} from './chat.directive';
import friendMenu from './friendsmenu/friendsmenu';
import chatContainer from './chatcontainer/chatcontainer';
import chatService from './chatservice/chatservice';

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
.directive('chat', chatDirective)
.directive('scrollBottom', () => ({
  scope: {
    scrollBottom: '='
  },
  link(scope, elem) {
    scope.$watchCollection('scrollBottom', (nVal) => {
      if (nVal) {
        $(elem).animate({scrollTop: $(elem)[0].scrollHeight});
      }
    });
  } 
}))
.factory('ChatService', chatService)
.filter('relativeDate', relativeDateFilter);

function relativeDateFilter($translate) {
  return function(dateString) {
    console.log('use language', $translate.use());
    moment.locale($translate.use());
    return moment(dateString).fromNow();
  };
}