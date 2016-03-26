const friendsMenuDirective = () => ({
  template: `
    <div ng-repeat="friend in vm.friends">
      <div layout="row" ng-click="vm.onOpenChat({friend: friend})">
        <img ng-src="{{friend.picture}}" style="height: 50px; width: 50px" />
        {{friend.name}}
      </div>
    </div>
  `,
  controller: class {
    constructor() {
      console.log('friends via component', this.friends);
    }
  },
  controllerAs: 'vm',
  scope: {},
  bindToController: {
    friends: '=',
    onOpenChat: '&'
  },
  restrict: 'E'
});

export default friendsMenuDirective;