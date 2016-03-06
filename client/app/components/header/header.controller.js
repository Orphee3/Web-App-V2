import orphee from '../../../images/logo.png';

class headerController {
  constructor(Auth) {
    this.Auth = Auth;
    this.user = Auth.getUser();
    this.logout = Auth.logout;

    this.logo = {orphee};
  }

  isLog() {
    const islog = this.Auth.isLog();
    if (!islog) return false;
    this.user = this.Auth.getUser();
    return true;
  }
}

headerController.$inject = ['Auth'];

export {headerController};