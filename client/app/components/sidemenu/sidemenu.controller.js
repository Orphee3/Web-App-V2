class sidemenuController {
  constructor($location, Auth, $mdDialog, Playlists, $interval, $translate) {
    this.$location = $location;
    this.Auth = Auth;
    this.$mdDialog = $mdDialog;
    this.Playlists = Playlists;
    this.$translate = $translate;

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
    const obj = {
      fr: {
        title: 'Choisissez un titre pour votre playlist',
        placeholder: 'Nom',
        ariaLabel: 'Playlist name',
        ok: 'Enrregistrer',
        cancel: 'Annuler'
      },
      en: {
        title: 'Chose a name for your playlist',
        placeholder: 'Name',
        ariaLabel: 'Playlist name',
        ok: 'Confirm',
        cancel: 'Cancel'
      }
    }
    const  current = obj[this.$translate.use()];

    const result = this.$mdDialog.prompt()
      .title(current.title)
      .placeholder(current.placeholder)
      .ariaLabel(current.ariaLabel)
      .ok(current.ok)
      .cancel(current.cancel);

    this.$mdDialog.show(result)
      .then(name => this.Playlists.add(name))
      .then(() => this.Playlists.get())
      .then(playlists => this.playlists = playlists);
  }
}

sidemenuController.$inject = ['$location', 'Auth', '$mdDialog', 'Playlists', '$interval', '$translate'];

export {sidemenuController};