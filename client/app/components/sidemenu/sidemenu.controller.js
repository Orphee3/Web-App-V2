class sidemenuController {
  constructor($location) {
    this.$location = $location;
  }

  showNav() {
    const path = this.$location.path();
    return (path !== '/login' && path !== '/signup');
  }
}

sidemenuController.$inject = ['$location'];

export {sidemenuController};