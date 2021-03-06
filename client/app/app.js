import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessage from 'angular-messages';
import ngMaterial from 'angular-material';
import ngTranslate from 'angular-translate';
import satellizer from 'satellizer';
import swiper from 'Swiper';
import ngSocket from 'angular-socket-io';

import {languages} from './app.config.languages';
import {palettes} from './app.config.palettes';
import {social} from './app.config.social';

import {shared} from './shared/shared';
import {head} from './components/header/header';
import {sidemenu} from './components/sidemenu/sidemenu';
import {audioPlayer} from './components/audioPlayer/audioPlayer';
import {home} from './components/home/home';
import {login} from './components/login/login';
import {signup} from './components/signup/signup';
import {chat} from './components/chat/chat';
import {profile} from './components/profile/profile';
import {creation} from './components/creation/creation';
import {moments} from './components/moments/moments';
import {search} from './components/search/search';
import {playlistModule} from './components/playlists/playlists';

angular.module('Orphee', [
	uiRouter,
	ngAnimate,
	ngAria,
	ngMessage,
	ngMaterial,
	ngTranslate,
  satellizer,
  'btford.socket-io',

	shared.name,
	home.name,
  sidemenu.name,
  audioPlayer.name,
	login.name,
  head.name,
  signup.name,
  chat.name,
  profile.name,
  creation.name,
  moments.name,
  search.name,
  playlistModule.name
])
.directive('app', appDirective)
.config(palettes)
.config(languages)
.config(social);