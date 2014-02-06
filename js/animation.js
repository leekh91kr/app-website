var $window = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img');

$window.on('scroll', function () {
	// console.log($window.scrollTop());
	$sun.css('transform','rotate(' + $window.scrollTop() / 5 + 'deg)');
});

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '60%' });

$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ship-delay-1');
	$ships.eq(2).addClass('js-ship-delay-2');
	$ships.eq(3).addClass('js-ship-delay-3');

	$ships.addClass('js-ships-animate');
}, {offset: '60%' });