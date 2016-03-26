import angular from 'angular';
import chatContainerDirective from './chatcontainer.directive';

export default  angular.module('chatContainer', [])
.directive('chatContainer', chatContainerDirective);

