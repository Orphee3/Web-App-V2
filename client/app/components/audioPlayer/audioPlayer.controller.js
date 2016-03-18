class audioPlayerController {
  constructor($location) {
    this.$location = $location;
  }

  showPlayer() {
    const path = this.$location.path();
    return (path !== '/login' && path !== '/signup');
  }
}

audioPlayerController.$inject = ['$location'];

export {audioPlayerController};