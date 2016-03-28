const creations = ($http, API) => {
  const get = () => {
    return $http.get(`${API.url}/api/creationPopular?size=5`)
      .then(({data}) => data);
  };

  const getById = (idCreation) => (
    $http.get(`${API.url}/api/creation/${idCreation}`)
      .then(({data}) => data)
  )

  const getComments = (idCreation) => (
    $http.get(`${API.url}/api/comment/creation/${idCreation}`)
      .then(({data}) => data)
  )

  const addComment = (creation, parentId, creator, message) => (
    $http({
      method: 'POST',
      url: `${API.url}/api/comment`,
      data: {creation, parentId, creator, message}
    }).then(({data}) => data)
  )

  return {get, getById, getComments, addComment};
};

creations.$inject = ['$http', 'API'];

export {creations};