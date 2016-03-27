const profileDirective = () => ({
  restrict: 'E',
  scope: {},
  bindToController: {},
  replace: true,
  controllerAs: 'vm',
  template: `
    <md-content style="top: 64px; height: 100%; margin-bottom: 150px;" class="home-container">
      <div style="height: 200px; background-color: #eeeeee">{{vm.user.name}}</div>
      <creation-list creations="vm.creations"></creation-list>
      <div ng-if="vm.creations.length === 0">{{vm.user.name}} n'a pas de créations</div>
    </md-content>
  `,
  controller
});

class controller {
  constructor($stateParams, $location, Users) {
    this.Users = Users;
    this.$location = $location;

    this.Users.getById($stateParams.idUser)
      .then((user) => this.user = user)
      .then(() => this.Users.getCreations($stateParams.idUser))
      .then((creations) => this.creations = creations)
      .catch(() => this.$location.url('/'));
  }
}

controller.$inject = ['$stateParams', '$location', 'Users'];

export default profileDirective;