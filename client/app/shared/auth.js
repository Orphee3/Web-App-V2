const auth = ($window, $http, API) => {

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
			console.log(data);
			log = true;
			$window.localStorage.user = JSON.stringify(data.user);
			$window.localStorage.token = JSON.stringify(data.token);
		});
	};

	return {login, isLog, getUser, logout};
};

auth.$inject = ['$window', '$http', 'API'];

export {auth};