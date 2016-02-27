class headerController {
  constructor(Auth) {
    this.Auth = Auth;
    this.user = Auth.getUser();
    this.logout = Auth.logout;
  }

  isLog() {
    const islog = this.Auth.isLog();
    if (!islog) return false;
    if (!this.user) this.user = this.Auth.getUser();
    return true;
  }
}

headerController.$inject = ['Auth'];

export {headerController};