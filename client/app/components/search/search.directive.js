const searchDirective = () => ({
  restrict: 'E',
  scope: {},
  controllerAs: 'vm',
  bindToController: {},
  replace: true,
  template: `
     <md-content layout="column" style="top: 64px; height: 100%; margin-bottom: 150px;" class="home-container">
      <div style="height: 200px; background-color: #eeeeee; font-size: 25px" layout="row" layout-align="center center">
        {{vm.creations.length}} results for "{{vm.$stateParams.text}}"
      </div>
      <creation-list creations="vm.creations"></creation-list>
     </md-content>
  `,
  controller
});

class controller {
  constructor($stateParams, Creations) {
    this.$stateParams = $stateParams;
    Creations.get()
      .then(creations => creations.filter(creation => creation.name.toLowerCase().indexOf($stateParams.text.toLowerCase()) !== -1))
      .then(creations => this.creations = creations);
  }
}

controller.$inject = ['$stateParams', 'Creations'];

export default searchDirective;