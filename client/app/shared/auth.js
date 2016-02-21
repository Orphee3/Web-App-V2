const auth = ($http, API) => {

	const login = (credentials) => {
		
		let encoded = btoa(`${credentials.login}:${credentials.password}`);
	
		return $http({
			method: 'POST',
			url: `${API.url}/api/login`,
			headers: {
				Authorization: `Bearer ${encoded}`
			}
		}).then(function(data) {
			console.log(data.data);
		});
	};

	return {login};
};

auth.$inject = ['$http', 'API'];

export {auth};