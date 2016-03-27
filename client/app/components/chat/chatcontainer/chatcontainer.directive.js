import img from '../../../../images/default.png';

const chatContainerDirective = () => ({
  restrict: 'E',
  scope: {},
  controllerAs: 'vm',
  bindToController: {
    friend: '=',
    messages: '=',
    onMessage: '&'
  },
  template: `
    <md-content>
      <div layout="column" style="height: 800px;">
        <div layout="row" layout="center center" class="header" style="background-color: #eeeeee; height: 100px;">
          <div style="margin-left: 50%; margin-top: 30px; font-size:20px;">{{vm.friend.name}}</div>
        </div>
        <div class="chatbox" scroll-bottom="vm.messages" style="overflow: auto; "  >
          <div ng-repeat="message in vm.messages" layout="row" layout-align="start center" style="margin-bottom: 10px; border-bottom: 1px solid #e6e6e6"">
            <div style="margin-right: 10px;">{{message.dateCreation | relativeDate}}</div>
            <img ng-if="message.creator.picture" ng-src="{{message.creator.picture}}" style="width: 50; height: 50px;" />
            <img ng-if="!message.creator.picture" ng-src="{{vm.img}}" style="width: 50; height: 50px;" />           
            <div style="font-size: 18px; font-weight: bold; margin-right: 10px;">{{message.creator.name}}:</div>
            <div>{{message.message}}</div>
          </div>
        </div>
      </div>
      
      <form ng-submit="vm.submit()" class="footer" style="background-color: #eeeeee; height: 100px; width: 100%">
        <md-input-container>
          <label>Type message ...</label>
          <input ng-model="vm.toSend" type="text" style="width: 1000px;"/>
        </md-input-container>
        <md-button type="submit" class="md-primary md-fab">
          <md-icon><i class="materials-icon">send</i></md-icon>
        </md-button>
      </form>
      
    </md-content>
  `,
  controller: class {
    constructor() {
      this.img = img;
    }

    submit() {
      if (!this.toSend || !this.friend) return;
      console.log('send !', this.toSend);
      this.onMessage({message: this.toSend});
      this.toSend = '';
    }
  }
});

export default chatContainerDirective;