class sidemenuController {
  constructor($location, Auth, $mdDialog, Playlists, $interval) {
    this.$location = $location;
    this.Auth = Auth;
    this.$mdDialog = $mdDialog;
    this.Playlists = Playlists;


    $interval(() => {
      Playlists.get()
      .then(playlists => this.playlists = playlists);
    }, 1500, 0, true);
    
  }

  isLog() {
    return this.Auth.isLog();
  }

  showNav() {
    const path = this.$location.path();
    return (path !== '/login' && path !== '/signup');
  }

  search() {
    if (!this.searchText) return;
    console.log("search", this.searchText);
    this.$location.url(`/search/${this.searchText}`);
    this.searchText = '';
  }

  dialogPlaylist(ev) {
    const result = this.$mdDialog.prompt()
      .title('Choisissez un titre pour votre playlist')
      .placeholder('Nom')
      .ariaLabel('Playlist name')
      .ok('Enregistrer')
      .cancel('Annuler');

    this.$mdDialog.show(result)
      .then(name => this.Playlists.add(name))
      .then(() => this.Playlists.get())
      .then(playlists => this.playlists = playlists);
  }
}

sidemenuController.$inject = ['$location', 'Auth', '$mdDialog', 'Playlists', '$interval'];

export {sidemenuController};