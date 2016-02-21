import bg from '../../../images/bg-login.jpg';

class LoginController {
	constructor(Auth) {
		this.Auth = Auth;

		this.loginpic = bg;
		this.credentials = {
			login: '',
			password: ''
		};
	}

	submit() {
		console.log('submit !');
		this.Auth.login(this.credentials);
	}
}

LoginController.$inject = ['Auth'];

export {LoginController};