import angular from 'angular';
import {api} from './api';
import {auth} from './auth';

export const shared = angular.module('shared', [])
	.constant('API', api)
	.factory('Auth', auth);