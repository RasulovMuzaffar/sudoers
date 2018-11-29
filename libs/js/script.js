$(".fa-heart").click(function() {
	$(this).toggleClass("fa-heart-o");
});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('.aside').owlCarousel({
	items: 1,
	nav: true,
	loop: true,
	autoplay: true,
	autoplayTimeout : 7000,
	navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
});

let $btn = $('#topcontrol .btn-special');

$btn.on('click', function(){
	$('html').animate({
		scrollTop: 0
	}, 1000);
});

$(window).on('scroll', function(){
	if(scrollY > 800){
		$btn.fadeIn();
	}else{
		$btn.fadeOut();
	}
})

let config = {
	'.chosen-select'           : {},
	'.chosen-select-deselect'  : { allow_single_deselect: true },
	'.chosen-select-no-single' : { disable_search_threshold: 10 },
	'.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
	'.chosen-select-rtl'       : { rtl: true },
	'.chosen-select-width'     : { width: '95%' }
}
for (let selector in config) {
	$(selector).chosen(config[selector]);
}

var $range = $(".js-range-slider");

// $range.ionRangeSlider({
//     min: 0,
//     max: 1000,
//     to: 800,
//     prefix: "$"
// });