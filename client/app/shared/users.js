const users = ($http, API) => {
  const get = () => {
    return $http.get(`${API.url}/api/user`)
      .then(({data}) => data);
  };

  return {get};
};

users.$inject = ['$http', 'API'];

export {users};