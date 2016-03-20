const auth = ($window, $http, $q, $auth, API, Socket) => {

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
    $auth.logout();
    Socket.disconnect();
    $window.location.reload();
	};
	
  const login = (credentials) => {
		
		const encoded = btoa(`${credentials.login}:${credentials.password}`);
	
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
			$auth.setToken(data.token);
      Socket.connect();
		});
	};

  const loginSocial = (provider) => {
    return $auth.authenticate(provider)
      .then(({data}) => {
        log = true;
        $window.localStorage.user = JSON.stringify(data.user);
      })
      .catch(() => $auth.logout());
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
      $auth.setToken(data.token);
    });
  };

	return {login, loginSocial, signup, isLog, getUser, logout};
};

auth.$inject = ['$window', '$http', '$q', '$auth', 'API', 'Socket'];

export {auth};