class homeController {
	constructor($timeout) {

    $timeout(function() {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        //centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      });
    }, 0);
		
	}
}

homeController.$inject = ['$timeout'];

export {homeController};