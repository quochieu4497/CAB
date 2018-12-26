$(function() {
	if ($('.canhcam-slider-2 .owl-carousel').length) {
		$('.canhcam-slider-2 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            padding: 0,
            margin: 0,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
			dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
			callbacks: true,
			responsive: {
				768: {
					nav: true
				}
			}
        });
    }

});
