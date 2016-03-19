class sidemenuController {
  constructor($location) {
    this.$location = $location;
  }

  showNav() {
    const path = this.$location.path();
    return (path !== '/login' && path !== '/signup');
  }

  search() {
    console.log("search");
  }
}

sidemenuController.$inject = ['$location'];

export {sidemenuController};