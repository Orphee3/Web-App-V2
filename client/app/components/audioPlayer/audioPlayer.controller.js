class audioPlayerController {
  constructor($location, Audio, $scope, $interval) {
    this.$location = $location;
    this.Audio = Audio;
    this.pause = false;

    $interval(() => {
            console.log('time', MIDI.Player.currentTime);
            if (!this.pause) this.playerTime = MIDI.Player.currentTime * 100 / MIDI.Player.endTime;
            }, 100, 0, true);
  }

  showPlayer() {
    const path = this.$location.path();
    return (path !== '/login' && path !== '/signup');
  }

  getImg() {
    return this.Audio.getImg();
  }

  mouseDown() {
     MIDI.Player.pause(true);
     this.pause = true;
  }

  mouseUp() {
    MIDI.Player.currentTime = this.playerTime / 100 * MIDI.Player.endTime;
    if (MIDI.Player.currentTime < 0) MIDI.Player.currentTime = 0;
    if (MIDI.Player.currentTime >= MIDI.Player.endTime) MIDI.Player.currentTime = MIDI.Player.endTime;
    this.pause = false;
    MIDI.Player.resume();
  }

  next() {
    this.Audio.next();
  }

  prev() {
    this.Audio.prev();
  }

  playStop() {
    this.Audio.playStop();
  }
}

audioPlayerController.$inject = ['$location', 'Audio', '$scope', '$interval'];

export {audioPlayerController};