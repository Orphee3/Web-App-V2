import img from '../../../../images/default.png';

class friendMenu {
  constructor(Users, $mdDialog, $mdToast) {
    this.Users = Users;
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.img = img;
    console.log('friends via component', this.friends);
  }

  deleteFriend(e, friend) {
    const confirm = this.$mdDialog.confirm()
          .title(`Would you like to delete ${friend.name} from your friends?`)
          .targetEvent(e)
          .ok('Yes')
          .cancel('No');
    
    this.$mdDialog
      .show(confirm)
      .then(() => this.onDeleteFriend({friend}), () => (console.log('no'))) 
  }

  sendInvitation() {
    if (!this.email) return;
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Invitation send!')
        .position('top right')
        .hideDelay(1500)
    );
    this.onSendInvitation({email: this.email});
    this.email = '';
  }
}

friendMenu.$inject = ['Users', '$mdDialog', '$mdToast'];

const friendsMenuDirective = () => ({
  template: `
    <div ng-if="vm.friends.length !== 0" layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">Mes Amis</div>
    <div layout="row" layout-align="center center" ng-repeat="friend in vm.friends">
      <div layout="row" ng-click="vm.onOpenChat({friend: friend})">
        <img ng-if="friend.picture" ng-src="{{friend.picture}}" style="height: 50px; width: 50px; margin-right: 10px" />
        <img ng-if="!friend.picture" ng-src="{{vm.img}}" style="height: 50px; width: 50px; margin-right: 10px" />
        {{friend.name}}
      </div>
      <md-button ng-click="vm.deleteFriend($event, friend)" class="md-primary md-fab">
        <md-tooltip md-direction="right">Supprimer</md-tooltip>
        <md-icon><i class="material-icons">clear</i></md-icon>
      </md-button>
    </div>

    <div ng-if="vm.invitations.length !== 0" layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">Mes Invitations</div>
    <div layout="row" layout-align="center center" ng-repeat="invit in vm.invitations">
      <img ng-if="invit.userSource.picture" ng-src="{{invit.userSource.picture}}" style="height: 50px; width: 50px; margin-right: 10px">
      <img ng-if="!invit.userSource.picture" ng-src="{{vm.img}}" style="height: 50px; width: 50px; margin-right: 10px;">
      <div flex="20">{{invit.userSource.name}}</div>
      <md-button ng-click="vm.onAcceptFriend({friend: invit.userSource})" class="md-primary md-fab"">
        <md-tooltip md-direction="right">Accepter</md-tooltip>
        <md-icon><i class="material-icons">done</i></md-icon>
      </md-button>
    </div>

    <div layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">Ajouter des amis</div>
    <form ng-submit="vm.sendInvitation()">
      <md-input-container>
        <label>Enter email</label>
        <input type="text" ng-model="vm.email"/>
      </md-input-container>
      <md-button type="submit" class="md-primary md-raised">
        send invitation
      </md-button>
    </form>
      
  `,
  controller: friendMenu,
  controllerAs: 'vm',
  scope: {},
  bindToController: {
    friends: '=',
    invitations: '=',
    onOpenChat: '&',
    onAcceptFriend: '&',
    onDeleteFriend: '&',
    onSendInvitation: '&'
  },
  restrict: 'E'
});

export default friendsMenuDirective;