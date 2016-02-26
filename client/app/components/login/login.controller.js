import bg from '../../../images/bg-login.jpg';

class LoginController {
	constructor(Auth) {
		this.Auth = Auth;

		this.loginpic = bg;
		this.credentials = {
			login: '',
			password: ''
		};
		this.loginError = false;
	}

	submit() {
		console.log('submit !');
		this.Auth.login(this.credentials)
			.catch(err => this.loginError = true);
	}
}

LoginController.$inject = ['Auth'];

export {LoginController};