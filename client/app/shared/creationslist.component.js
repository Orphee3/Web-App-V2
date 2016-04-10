import guitar from '../../images/guitar.png';

const creationListDirective = () => ({
  restrict: 'E',
  scope: {},
  bindToController: {
    creations: '='
  },
  template: `
    <md-content layout="column">
      <div layout="column">
        <div layout="row" layout-align="start center" ng-repeat="creation in vm.creations" style="font-size: 20px; border-bottom: 1px solid #e6e6e6" class="toto">
          <div flex="5">{{$index + 1}}</div>
          <img ng-if="creation.picture" ng-src="{{creation.picture}}" style="height: 100px; width: 100px">
          <img ng-if="!creation.picture" ng-src="{{vm.guitar}}" style="height: 100px; width: 100px; margin-right: 20px;">
          <div layout="row" layout-align="start center" flex="40">
            <div ui-sref="creation({idCreation: creation._id})" style="cursor: pointer">{{creation.name}}</div>
            <div class="home-hide">
              <md-button ng-click="vm.play(creation.url)" class="md-icon-button md-primary">
                <i class="material-icons">play_arrow</i>
              </md-button>
              <md-menu md-offset="0 30">
                <md-button ng-click="vm.getPlaylists(); $mdOpenMenu($event)" class="md-icon-button md-primary">
                  <i class="material-icons">playlist_add</i>
                </md-button>
                <md-menu-content width="3">
                  <md-button ng-repeat="playlist in vm.playlists" ng-click="vm.addToPlaylist($index, creation)">{{playlist.name}}</md-button>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
          <div flex="20" ui-sref="profile({idUser: creation.creator[0]._id})" style="cursor: pointer">{{creation.creator[0].name}}</div>
          <md-button class="md-primary md-icon-button home-hide" ng-click="vm.handleLike(creation)">
            <md-tooltip md-direction="left" ng-if="vm.isLog()">
              {{vm.getToolTip(creation)}}
            </md-tooltip>
            {{creation.nbLikes}}<i class="material-icons">thumb_up</i>
          </md-button>
          <md-button ui-sref="creation({idCreation: creation._id})" class="md-primary md-icon-button">
            <md-tooltip>{{'CREATIONLIST_COMMENT' | translate}}</md-tooltip>
            <i class="material-icons">comment</i>
          </md-button>
          <div>{{creation.dateCreation | relativeDate}}</div>
        </div>
      </div>
    </md-content>
  `,
  controllerAs: 'vm',
  controller: controller
});

class controller {
  constructor(Auth, Users, Audio, Playlists, $translate) {
    this.Auth = Auth;
    this.Users = Users;
    this.Audio = Audio;
    this.Playlists = Playlists;
    this.$translate = $translate;

    this.guitar = guitar;
  }

  alreadyLike(creation) {
    const user = this.Auth.getUser();
    if (user.likes.indexOf(creation._id) !== -1) return true;
    else return false;
  }

  getToolTip(creation) {
    if (this.$translate.use() === 'en') {
      return this.alreadyLike(creation) ? 'I don\'t like anymore' : 'Like';
    } else if (this.$translate.use() === 'fr') {
      return this.alreadyLike(creation) ? 'Je n\'aime plus' : 'J\'aime';
    }
  }

  handleLike(creation) {
    if (!this.Auth.isLog()) return;
    const user = this.Auth.getUser();
    const idx = user.likes.indexOf(creation._id);
    const creationIdx = this.creations.map((c) => c._id).indexOf(creation._id);

    if (idx !== -1) {
      this.Users.dislikeCreation(creation._id)
        .then(() => {
          this.creations.forEach(crea => {
            if (crea._id === creation._id) crea.nbLikes -= 1;
          });
        });
    } else {
      this.Users.likeCreation(creation._id)
        .then(() => {
          this.creations.forEach(crea => {
            if (crea._id === creation._id) crea.nbLikes += 1;
          });
        });
    }
  }

  play(url) {
    this.Audio.play(url);
  }

  getPlaylists() {
    this.Playlists.get().then(playlists => this.playlists = playlists);
  }

  addToPlaylist(index, creation) {
    this.Playlists.addCreationToPlaylist(index, creation)
  }

  isLog() {
    return this.Auth.isLog();
  }
}

controller.$inject = ['Auth', 'Users', 'Audio', 'Playlists', '$translate'];

export default creationListDirective;