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
    playlists[index].playlists.push({
      _id: creation._id,
      name: creation.name,
      nbComments: creation.nbComments,
      nbLikes: creation.nbLikes,
      creator: creation.creator,
      dateCreation: creation.dateCreation
    });
    return $q.when($window.localStorage.playlists = JSON.stringify(playlists));
  };

  const removeCreationFromPlaylist = (index, creationIndex) => {
    if (!$window.localStorage.playlists) return $q.reject('err');
    const playlists = JSON.parse($window.localStorage.playlists);
    if (!playlists[index]) return $q.reject('err');
    try {
      playlists[index].playlists.splice(creationIndex, 1);
      return $q.when($window.localStorage.playlists = JSON.stringify(playlists));
    } catch (e) {
      return $q.reject('err');
    }
  };

  return {get, add, del, addCreationToPlaylist, removeCreationFromPlaylist};
}

playlist.$inject = ['$window', '$q'];

export {playlist};