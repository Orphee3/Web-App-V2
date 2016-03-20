import angular from 'angular';
import {api} from './api';
import {auth} from './auth';
import {creations} from './creations';
import {users} from './users';
import {socket} from './socket';

export const shared = angular.module('shared', [])
	.constant('API', api)
	.factory('Auth', auth)
  .factory('Creations', creations)
  .factory('Users', users)
  .factory('Socket', socket);