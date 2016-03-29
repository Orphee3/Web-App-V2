const audio = () => {

  let img = 'play_arrow';
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

  return {getImg, getPlayerTime, play, playStop};
}

export {audio}