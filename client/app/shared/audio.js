const audio = ($timeout) => {

  let img = 'play_arrow';
  let songId = 0;
  let currentPlaylist;
  const playerTime = 0;

  MIDI.loadPlugin({
    soundfontUrl: './soundfont/'
  });

  const getImg = () => img;

  const play = (url) => {
    MIDI.Player.loadFile(url, MIDI.Player.start);
    MIDI.Player.setAnimation(function (data) {
                //var now = data.now >> 0;
                //var end = data.end >> 0;
                //vm.now = formatTime(now);
                //vm.end = formatTime(end);
            });
    img = 'pause';
  };

  const playLoop = () => {
    img = 'pause';
   MIDI.Player.loadFile(currentPlaylist[songId].url, MIDI.Player.start);
    MIDI.Player.setAnimation(function (data) {
        var now = data.now >> 0;
        var end = data.end >> 0;
        if (now === end) {
          $timeout(() => {
            songId = (songId + 1) % currentPlaylist.length;
          
            MIDI.Player.loadFile(currentPlaylist[songId].url, MIDI.Player.start);
          }, 500)
            
        }
    });
  }

  const playPlaylist = (playlist) => {
    songId = 0;
    currentPlaylist = playlist;
    playLoop();
  }

  const next = () => {
    if (!currentPlaylist) return;
    songId = (songId + 1) % currentPlaylist.length;
    playLoop();
  }

  const prev = () => {
    if (!currentPlaylist) return;
    if (songId !== 0) songId = (songId - 1) % currentPlaylist.length;
    playLoop();
  }

  const getPlayerTime = () => {
    return playerTime;
  }

  const playStop = () => {
    if (img === 'play_arrow') {
      img = 'pause';
      MIDI.Player.resume();
    } else {
      img = 'play_arrow';
      MIDI.Player.pause(true);
    }
  }

  return {getImg, getPlayerTime, playPlaylist, play, playStop, next, prev};
}

audio.inject = ['$timeout'];

export {audio}