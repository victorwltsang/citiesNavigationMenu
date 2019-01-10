$(document).ready(function() {
	//initialize the first bar width of the element
	$('.navigation__underline').css({
		width: $('.navigation li.active').width(),
		left: $('.navigation li.active').position().left
	});

	/* when nav item is clicked, will move underline to selected item */
	$('.navigation li a').click(function() {
		// reset previous click stylings
		$('.navigation li').removeClass('active');
		$('.navigation li a').css('border-bottom', '2px solid transparent');
		$('.navigation__underline').css('opacity', '1');
		$(this)
			.parent()
			.addClass('active');
		$('.navigation__underline').css({
			width: $('.navigation li.active').width(),
			left: $('.navigation li.active').position().left
		});

		/* this function is to place a fixed border on the bottom of the selected item at the end of animation and hide the underline because without it when resizing the browser, the underline is not responsive. I tried another approach where I use .resize to detect chanages and resize the underline but it will cause a slight jumping animation */
		setTimeout(() => {
			$(this).css('border-bottom', '2px solid #1f1f1f');
			$('.navigation__underline').css('opacity', '0');
		}, 450);
	});
});
