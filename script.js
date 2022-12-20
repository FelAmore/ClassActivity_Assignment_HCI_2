$('.text-contents').fadeOut()

$('.lesson').hover(
	function() {
		$(this).find('.text-contents').fadeIn();
	},
	function() {
		$(this).find('.text-contents').fadeOut();
	}
);
