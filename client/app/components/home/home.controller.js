import bg from '../../../images/bg-login.jpg';

class homeController {
	constructor(Creations, Users, $timeout) {
    this.Creations = Creations;
    this.Users = Users;
    this.loginpic = bg;

    $timeout(function() {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        //centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: false
      });
    }, 0);
		
    this.getCreations();
    this.getUsers();
	}

  getCreations() {
    this.Creations.get()
      .then((creations) => {
        this.creations = creations;
        console.log('creations', creations);
      });
  }

  getUsers() {
    this.Users.get()
    .then((users) => {
      this.users = users;
      console.log('users', users);
    });
  }
}

homeController.$inject = ['Creations', 'Users', '$timeout'];

export {homeController};