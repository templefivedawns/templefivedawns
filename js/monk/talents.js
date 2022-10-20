$(document).ready(function () {

// ТАБЫ
	$(".btn-l").click(function () {
		$(".tab-l").fadeIn(600);
		$(".tab-r").fadeOut(0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-l").addClass("select");
		$(".btn-r").removeClass("select");
	});

	$(".btn-r").click(function () {
		$(".tab-r").fadeIn(600);
		$(".tab-l").fadeOut(0);
		// $(".tab-r").attr('color', '#00ff99');
		// $(".tab-l").attr('color', '#9d9063');
		$(".btn-r").addClass("select");
		$(".btn-l").removeClass("select");
	});
// ТАБЫ

// ТАЛАНТЫ
// 	tt4 tt11 tc1

	$(".tt4").click(function () {
		$(".tc1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
			"Pellentesque fringilla, nisi eu cursus interdum, nulla augue pulvinar nunc, " +
			"sed molestie ligula sem a magna. Nulla mi nibh, mollis ut est vitae, rutrum imperdiet magna. " +
			"Vestibulum in vulputate eros. Curabitur non.");
	});

	$(".tt11").click(function () {
		$(".tc1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});
// ТАЛАНТЫ

});