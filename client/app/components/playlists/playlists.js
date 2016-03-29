import angular from 'angular';
import playlistsDirective from './playlists.directive';

export const playlistModule = angular.module('playlistModule', [
])
.config(function($stateProvider) {
  $stateProvider.state('playlists', {
    url: '/playlists/:index',
    template: '<playlists></playlists>'
  });
})
.directive('playlists', playlistsDirective);