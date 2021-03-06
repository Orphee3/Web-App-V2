import img from '../../../../images/default.png';

class friendMenu {
  constructor(Users, $mdDialog, $mdToast, $window, $translate) {
    this.Users = Users;
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.$window = $window;
    this.$translate = $translate;
    this.img = img;
    console.log('friends via component', this.friends);
  }

  deleteFriend(e, friend) {
    const obj = {
      en: {
        title: `Remove ${friend.name} from your friends?`,
        ok: 'Yes',
        cancel: 'No'
      },
      fr: {
        title: `Voulez-vous vraiment supprimer ${friend.name} de vos amis?`,
        ok: 'Oui',
        cancel: 'Non'
      }
    }

    const current = obj[this.$translate.use()];

    const confirm = this.$mdDialog.confirm()
          .title(current.title)
          .targetEvent(e)
          .ok(current.ok)
          .cancel(current.cancel);
    
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

  haveMessage(key) {
    return this.$window.localStorage[key];
  }
}

friendMenu.$inject = ['Users', '$mdDialog', '$mdToast', '$window', '$translate'];

const friendsMenuDirective = () => ({
  template: `
    <div ng-if="vm.friends.length !== 0" layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">{{ 'CHAT_FRIENDS' | translate }}</div>
    <div layout="row" layout-align="center center" ng-repeat="friend in vm.friends">
      
        <i ng-if="vm.haveMessage(friend._id)" class="material-icons" ng-click="vm.onOpenChat({friend: friend})" style="cursor: pointer">email</i>
        <img ng-if="friend.picture" ng-src="{{friend.picture}}" ng-click="vm.onOpenChat({friend: friend})" style="height: 50px; width: 50px; margin-right: 10px; cursor: pointer" />
        <img ng-if="!friend.picture" ng-src="{{vm.img}}" ng-click="vm.onOpenChat({friend: friend})"style="height: 50px; width: 50px; margin-right: 10px; cursor: pointer" />
        <div flex="20" ng-click="vm.onOpenChat({friend: friend})" style="cursor: pointer">{{friend.name}}</div>
   
      <md-button ng-click="vm.deleteFriend($event, friend)" class="md-primary md-fab">
        <md-tooltip md-direction="bottom">{{'CHAT_REMOVE' | translate}}</md-tooltip>
        <md-icon><i class="material-icons">clear</i></md-icon>
      </md-button>
    </div>

    <div ng-if="vm.invitations.length !== 0" layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">{{'CHAT_INVITATIONS' | translate}}</div>
    <div layout="row" layout-align="center center" ng-repeat="invit in vm.invitations">
      <img ui-sref="profile({idUser: invit.userSource._id})" ng-if="invit.userSource.picture" ng-src="{{invit.userSource.picture}}" style="height: 50px; width: 50px; margin-right: 10px; cursor: pointer">
      <img ui-sref="profile({idUser: invit.userSource._id})" ng-if="!invit.userSource.picture" ng-src="{{vm.img}}" style="height: 50px; width: 50px; margin-right: 10px; cursor; pointer">
      <div flex="20" ui-sref="profile({idUser: invit.userSource._id})" style="cursor: pointer">{{invit.userSource.name}}</div>
      <md-button ng-click="vm.onAcceptFriend({friend: invit.userSource})" class="md-primary md-fab"">
        <md-tooltip md-direction="bottom">{{'CHAT_ACCEPT' | translate}}</md-tooltip>
        <md-icon><i class="material-icons">done</i></md-icon>
      </md-button>
    </div>

    <div layout="row" layout-align="center center" style="background-color: #eeeeee; font-size: 20px; height: 40px">{{'CHAT_ADDFRIENDS' | translate}}</div>
    <form layout="column" layout-align="center center" ng-submit="vm.sendInvitation()">
      <md-input-container>
        <label>{{'CHAT_EMAIL' | translate}}</label>
        <input type="text" ng-model="vm.email"/>
      </md-input-container>
      <md-button type="submit" class="md-primary md-raised">
        {{'CHAT_SEND' | translate}}
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