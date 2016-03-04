import bg from '../../../images/bg-signup.jpg';
import orphee from '../../../images/logo.png';
import fb from '../../../images/facebook.svg';
import google from '../../../images/google.svg';

class signupController {
  constructor($location, Auth) {
    this.Auth = Auth;
    this.location = $location;

    this.signupPic = bg;
    this.logo = {orphee, fb, google};
    this.credentials = {
      login: '',
      password: '',
      name: '',
      confirmPassword: ''
    }
    this.loginError = false;
  }

  submit() {
    this.Auth.signup(this.credentials)
    .then(() => {
      $location.url('/');
    })
    .catch(err => {
      if (err.status === 409) return this.loginError = 'alreadyUse';
      this.loginError = err;
    })
  }
};

signupController.$inject = ['$location', 'Auth'];

export {signupController};