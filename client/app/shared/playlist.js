const playlist = ($window, $q) => {
  const get = () => {
    if (!$window.localStorage.playlists) $window.localStorage.playlists = JSON.stringify([]);
    return $q.when(JSON.parse($window.localStorage.playlists));
  }

  const add = (name) => {
    if (!$window.localStorage.playlists) $window.localStorage.playlists = JSON.stringify([]);
    const playlists = JSON.parse($window.localStorage.playlists);
    playlists.push({name, playlists: []});
    return $q.when($window.localStorage.playlists = JSON.stringify(playlists));
  };

  const del = (index) => {
    if (!$window.localStorage.playlists) return $q.reject('err');
    const playlists = JSON.parse($window.localStorage.playlists);
    if (!playlists[index]) return $q.reject('err');
    playlists.splice(index, 1);
    return $q.when($window.localStorage.playlists = JSON.stringify(playlists));
  };

  const addCreationToPlaylist = (index, creation) => {
    if (!$window.localStorage.playlists) return $q.reject('err');
    const playlists = JSON.parse($window.localStorage.playlists);
    if (!playlists[index]) return $q.reject('err');
    if (playlists[index].playlists.find(crea => crea._id == creation._id)) return $q.reject('err');
    playlists[index].playlists.push(creation);
    return $q.when($window.localStorage.playlists = JSON.stringify(playlists));
  };

  return {get, add, del, addCreationToPlaylist};
}

playlist.$inject = ['$window', '$q'];

export {playlist};