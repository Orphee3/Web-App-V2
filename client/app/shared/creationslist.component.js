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
          <div layout="row" layout-align="start center" flex="40">{{creation.name}}<div class="home-hide"><md-button class="md-icon-button md-primary"><i class="material-icons">play_arrow</i></md-button></div></div>
          <div flex="20" ui-sref="profile({idUser: creation.creator[0]._id})" style="cursor: pointer">{{creation.creator[0].name}}</div>
          <md-button class="md-primary md-icon-button home-hide" ng-click="vm.handleLike(creation)">
            <md-tooltip md-direction="left" ng-if="vm.isLog()">
              {{vm.getToolTip(creation)}}
            </md-tooltip>
            {{creation.nbLikes}}<i class="material-icons">thumb_up</i>
          </md-button>
          <md-button ui-sref="creation({idCreation: creation._id})" class="md-primary md-icon-button">
            <md-tooltip>comment</md-tooltip>
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
  constructor(Auth, Users) {
    this.Auth = Auth;
    this.Users = Users;

    this.guitar = guitar;
  }

  alreadyLike(creation) {
    const user = this.Auth.getUser();
    if (user.likes.indexOf(creation._id) !== -1) return true;
    else return false;
  }

  getToolTip(creation) {
    return this.alreadyLike(creation) ? 'I don\'t like anymore' : 'Like';
  }

  handleLike(creation) {
    if (!this.Auth.isLog()) return;
    const user = this.Auth.getUser();
    const idx = user.likes.indexOf(creation._id);
    const creationIdx = this.creations.map((c) => c._id).indexOf(creation._id);

    if (idx !== -1) {
      this.Users.dislikeCreation(creation._id)
        .then(() => this.creations[creationIdx].nbLikes -= 1);
    } else {
      this.Users.likeCreation(creation._id)
        .then(() => this.creations[creationIdx].nbLikes +=1);
    }
  }

  isLog() {
    return this.Auth.isLog();
  }
}

controller.$inject = ['Auth', 'Users', '$window'];

export default creationListDirective;