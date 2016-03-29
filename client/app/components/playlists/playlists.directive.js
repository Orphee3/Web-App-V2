const playlistsDirective = () => ({
  restrict: 'E',
  scope: {},
  replace: true,
  controllerAs: 'vm',
  template: `
    <md-content layout="column" style="top: 64px; height: 100%; margin-bottom: 150px;" class="home-container">
      <div style="height: 200px; background-color: #eeeeee; font-size: 25px" layout="row" layout-align="center center">
        {{vm.selectedPlaylist.name}}
        <md-button ng-click="vm.deletePlaylist()" class="md-primary md-fab">
          <md-tooltip md-direction="bottom">Supprimer</md-tooltip>
        <md-icon><i class="material-icons">clear</i></md-icon>
      </md-button>
      </div>
      <creation-list creations="vm.selectedPlaylist.playlists"></creation-list>
      <div ng-if="vm.selectedPlaylist.playlists.length === 0">{{vm.selectedPlaylist.name}} est vide</div>
    </md-content>
  `,
  controller
});

class controller {
  constructor($stateParams, $location, Playlists) {
    console.log('hello from playlists directive');
    this.Playlists = Playlists;
    this.$location = $location;
    this.$stateParams = $stateParams;

    this.Playlists.get()
      .then(playlists => this.playlists = playlists)
      .then(() => {
        if (!this.playlists[$stateParams.index]) return $location.url('/');
        this.selectedPlaylist = this.playlists[$stateParams.index];
      });
  }

  deletePlaylist() {
    this.Playlists.del(this.$stateParams.index)
      .then(() => this.$location.url('/'))
      .catch(() => this.$location.url('/'));
  }
}

controller.$inject = ['$stateParams', '$location', 'Playlists'];

export default playlistsDirective;