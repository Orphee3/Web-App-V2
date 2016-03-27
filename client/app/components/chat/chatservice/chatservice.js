const chatService = ($http, API) => {
  const getPrivateChat = (idTarget) => {
    return $http.get(`${API.url}/api/room/privateMessage/${idTarget}`)
      .then(({data}) => data.reverse());
  };

  return {getPrivateChat};
};

chatService.$inject = ['$http', 'API'];

export default chatService;