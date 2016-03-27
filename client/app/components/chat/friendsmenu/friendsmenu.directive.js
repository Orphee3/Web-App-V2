class friendMenu {
  constructor(Users, $mdDialog) {
    this.Users = Users;
    this.$mdDialog = $mdDialog;
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
}

friendMenu.$inject = ['Users', '$mdDialog'];

const friendsMenuDirective = () => ({
  template: `
    <div ng-repeat="friend in vm.friends">
      <div layout="row">
        <div layout="row" ng-click="vm.onOpenChat({friend: friend})">
          <img ng-src="{{friend.picture}}" style="height: 50px; width: 50px" />
          {{friend.name}}
        </div>
        <md-button ng-click="vm.deleteFriend($event, friend)" class="md-primary md-icon-button">
          <i class="material-icons">clear</i>
        </md-button>
      </div>
      
    </div>
  `,
  controller: friendMenu,
  controllerAs: 'vm',
  scope: {},
  bindToController: {
    friends: '=',
    onOpenChat: '&',
    onDeleteFriend: '&'
  },
  restrict: 'E'
});

export default friendsMenuDirective;