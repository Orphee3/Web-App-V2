import bg from '../../../images/bg-login.jpg';
import orphee from '../../../images/logo.png';
import fb from '../../../images/facebook.svg';
import google from '../../../images/google.svg';

class LoginController {
	constructor($location, Auth) {
		this.Auth = Auth;
    this.$location = $location;

		this.loginpic = bg;
    this.logo = {orphee, fb, google};
    this.credentials = {
			login: '',
			password: ''
		};
		this.loginError = false;
	}

	submit() {
		console.log('submit !');
		this.Auth.login(this.credentials)
			.then(() => {
        this.$location.url('/');
			})
			.catch(err => this.loginError = true);
	}
}

LoginController.$inject = ['$location', 'Auth'];

export {LoginController};