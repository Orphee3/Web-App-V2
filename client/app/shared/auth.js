const auth = ($window, $http, $q, API) => {

	let log = false;

	if ($window.localStorage.user) log = true;

	const getUser = () => {
		if (log) return JSON.parse($window.localStorage.user);
	}

	const isLog = () => log;
	
  const logout = () => {
		log = false;
		delete $window.localStorage.user;
		delete $window.localStorage.token;
	};
	
  const login = (credentials) => {
		
		let encoded = btoa(`${credentials.login}:${credentials.password}`);
	
		return $http({
			method: 'POST',
			url: `${API.url}/api/login`,
			headers: {
				Authorization: `Bearer ${encoded}`
			}
		})
		.then(({data}) => {
			log = true;
			$window.localStorage.user = JSON.stringify(data.user);
			$window.localStorage.token = JSON.stringify(data.token);
		});
	};
  
  const signup = (credentials) => {
    const {login, password, name, confirmPassword} = credentials;
    if (!login || !password || !name || !confirmPassword) return $q.reject('fill');
    if (password.length < 5 || confirmPassword.length < 5) return $q.reject('tooShort');
    if (password !== confirmPassword) return $q.reject('notMatch');
    return $http({
      method: 'POST',
      url: `${API.url}/api/register`,
      data: {
        username: login,
        name,
        password
      }
    })
    .then(({data}) => {
      log = true;
      $window.localStorage.user = JSON.stringify(data.user);
      $window.localStorage.token = JSON.stringify(data.token);
    });
  };

	return {login, signup, isLog, getUser, logout};
};

auth.$inject = ['$window', '$http', '$q', 'API'];

export {auth};