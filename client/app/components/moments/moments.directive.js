import img from '../../../images/default.png';

const momentsDirective = () => ({
  restrict: 'E',
  scope: {},
  controllerAs: 'vm',
  bindToController: {},
  template: `
    <md-content layout="column" style="top: 64px; height: 100%; margin-bottom: 150px;" class="home-container">
      <div style="height: 200px; background-color: #eeeeee; font-size: 25px" layout="row" layout-align="center center">Moments</div>
      
      <div layout="column">
        <div layout="row" layout-align="start center" ng-repeat="f in vm.flux" style="font-size: 20px; border-bottom: 1px solid #e6e6e6" class="toto">
          <img ng-if="f.userSource.picture" ng-src="{{f.userSource.picture}}" style="height: 50px; width: 50px; margin-right: 20px">
          <img ng-if="!f.userSource.picture" ng-src="{{vm.img}}" style="height: 50px; width: 50px; margin-right: 20px">
          <div flex="5" ui-sref="profile({idUser: f.userSource._id})" style="cursor: pointer">{{f.userSource.name}}</div>
          <div flex="10" ng-if="f.type=='creations'">create</div>
          <div flex="10" ng-if="f.type=='comments'">comment</div>
          <div flex="10" ui-sref="creation({idCreation: f.media._id})" style="cursor: pointer">{{f.media.name}}</div>
          <div>{{f.dateCreation | relativeDate}}</div>
        </div>
      </div>
    
    </md-content>
  `,
  controller
});

class controller {
  constructor(Users) {
    this.Users = Users;
    this.img = img;
    console.log('hello from moments controller');
    this.Users.getFlux()
      .then(flux => this.flux = flux);
  }
}

controller.$inject = ['Users'];

export default momentsDirective;