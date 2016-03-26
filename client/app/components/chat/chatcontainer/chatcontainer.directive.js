const chatContainerDirective = () => ({
  restrict: 'E',
  scope: {},
  controllerAs: 'vm',
  bindToController: {
    friend: '='
  },
  template: `
    <div>yoo from chat container</div>
    <div>{{vm.friend.name}}</div>
  `,
  controller: class {

  }
});

export default chatContainerDirective;