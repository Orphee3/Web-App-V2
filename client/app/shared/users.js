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

  const deleteFriend = (idFriend) => {
    return $http.get(`${API.url}/api/removeFriend/${idFriend}`)
      .then(({data}) => data);
  };

  return {get, getFriends, deleteFriend};
};

users.$inject = ['$window', '$http', 'API'];

export {users};