import img from '../../../images/default.png';

const creationDirective = () => ({
  restrict: 'E',
  scope: {},
  bindToController: {},
  replace: true,
  controllerAs: 'vm',
  template: `
    <md-content style="top: 64px; height: 100%; margin-bottom: 150px;" class="home-container">
      <div style="height: 200px; background-color: #eeeeee; font-size: 25px" layout="row" layout-align="center center">{{vm.creation.name}}</div>
      
      <div layout="column">
        <div layout="row" layout-align="start center" ng-repeat="comment in vm.comments" style="font-size: 20px; border-bottom: 1px solid #e6e6e6" class="toto">
          <img ng-if="comment.creator.picture" ng-src="{{comment.creator.picture}}" style="height: 100px; width: 100px">
          <img ng-if="!comment.creator.picture" ng-src="{{vm.img}}" style="height: 100px; width: 100px;">
          <div flex="20">{{comment.creator.name}}</div>
          <div flex="60">{{comment.message}}</div>
          <div>{{comment.dateCreation | relativeDate}}</div>
        </div>
      </div>
    
      <div ng-if="vm.comments.length === 0">{{vm.creation.name}} n'a pas de commenaires</div>

      <form ng-if="vm.isLog()" ng-submit="vm.submit()" layout="row" layout-align="center center">
        <md-input-container>
          <label>Enter your comment</label>
          <input type="text" ng-model="vm.myComment" style="width: 300px;" />
        </md-input-container>
        <md-button class="md-primary md-raised" type="submit">
          Valider
        </md-button>
      </form>

    </md-content>
  `,
  controller
});

class controller {
  constructor($stateParams, $location, Creations, Auth) {
    this.Auth = Auth;
    this.Creations = Creations;
    this.$stateParams = $stateParams;
    this.img = img;

    this.Creations.getById($stateParams.idCreation)
      .then((creation) => this.creation = creation)
      .then(() => this.Creations.getComments($stateParams.idCreation))
      .then((comments) => this.comments = comments)
      .catch(() => $location.url('/'));
  }

  submit() {
    if (!this.myComment) return;
    const id = this.$stateParams.idCreation;
    const user = this.Auth.getUser();
    this.Creations.addComment(id, id, user._id, this.myComment)
      .then(() => this.Creations.getComments(this.$stateParams.idCreation))
      .then((comments) => this.comments = comments);
    this.myComment = '';
  }

  isLog() {
    return this.Auth.isLog();
  }
}

controller.$inject = ['$stateParams', '$location', 'Creations', 'Auth'];

export default creationDirective;