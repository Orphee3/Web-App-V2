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
    console.log("search");
  }
}

sidemenuController.$inject = ['$location', 'Auth'];

export {sidemenuController};