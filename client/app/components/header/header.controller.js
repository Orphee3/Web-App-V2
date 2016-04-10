import orphee from '../../../images/logo.png';
import moment from 'moment/min/moment-with-locales';

class headerController {
  constructor(Auth, $translate) {
    this.Auth = Auth;
    this.$translate = $translate;
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

  changeLanguage(lang) {
    this.$translate.use(lang);
    moment.locale(this.$translate.use());
  }
}

headerController.$inject = ['Auth', '$translate'];

export {headerController};