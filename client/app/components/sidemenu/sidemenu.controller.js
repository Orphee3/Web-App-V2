class sidemenuController {
  constructor($location, Auth) {
    this.$location = $location;
    this.Auth = Auth;
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
}

sidemenuController.$inject = ['$location', 'Auth'];

export {sidemenuController};