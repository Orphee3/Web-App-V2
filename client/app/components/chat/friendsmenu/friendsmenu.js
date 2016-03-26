import angular from 'angular';
import friendMenuDirective from './friendsmenu.directive';

const friendsMenu = angular.module('friendsMenu', [])
.directive('friendsMenu', friendMenuDirective);

export default friendsMenu;