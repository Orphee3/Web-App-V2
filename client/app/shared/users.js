const users = ($window, $http, API) => {
  const get = () => {
    return $http.get(`${API.url}/api/user`)
      .then(({data}) => data);
  };
  
  const getFriends = () => {
    const id = JSON.parse($window.localStorage.user)._id;
    
    return $http.get(`${API.url}/api/user/${id}/friends`)
      .then(({data}) => data);
  };

  const getById = (idUser) => {
    return $http.get(`${API.url}/api/user/${idUser}`)
      .then(({data}) => data);
  };

  const getCreations = (idUser) => (
    $http.get(`${API.url}/api/user/${idUser}/creation`)
      .then(({data}) => data)
  )

  const dislikeCreation = (idCreation) => (
    $http.get(`${API.url}/api/dislike/${idCreation}`)
      .then(({data}) => {
        const user = JSON.parse($window.localStorage.user);
        const idx = user.likes.indexOf(idCreation);
        user.likes.splice(idx, 1);
        $window.localStorage.user = JSON.stringify(user);
        return data;
      })
  );

  const likeCreation = (idCreation) => (
    $http.get(`${API.url}/api/like/${idCreation}`)
      .then(({data}) => {
        const user = JSON.parse($window.localStorage.user);
        user.likes.push(idCreation);
        $window.localStorage.user = JSON.stringify(user);
        return data;
      })
  );

  const deleteFriend = (idFriend) => {
    return $http.get(`${API.url}/api/removeFriend/${idFriend}`)
      .then(({data}) => data);
  };
  
  const askFriend = (idFriend) => {
    const id = JSON.parse($window.localStorage.user)._id;
    if (id == idFriend) return;
    $http.get(`${API.url}/api/askfriend/${idFriend}`)
  }

  const acceptFriend = (idUser) => {
    return $http.get(`${API.url}/api/acceptfriend/${idUser}`)
      .then(({data}) => data);
  }

  const getFriendInvitation = () => {
    const id = JSON.parse($window.localStorage.user)._id;
    return $http.get(`${API.url}/api/user/${id}/news`)
      .then(({data}) => data.filter(n => n.type == 'friend'));
  }

  return {get, getFriends, getById, getCreations, likeCreation, dislikeCreation, deleteFriend, askFriend, acceptFriend, getFriendInvitation};
};

users.$inject = ['$window', '$http', 'API'];

export {users};