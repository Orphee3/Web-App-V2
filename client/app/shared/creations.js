const creations = ($http, API) => {
  const get = () => {
    return $http.get(`${API.url}/api/creationPopular?size=5`)
      .then(({data}) => data);
  };

  return {get};
};

creations.$inject = ['$http', 'API'];

export {creations};