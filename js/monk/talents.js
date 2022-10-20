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
// 	tt4 tt11 tc1 tn1

	$("#tt1").click(function () {
		$("#tn1").text("keg smash");
		$("#tc1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
			"Pellentesque fringilla, nisi eu cursus interdum, nulla augue pulvinar nunc, " +
			"sed molestie ligula sem a magna. Nulla mi nibh, mollis ut est vitae, rutrum imperdiet magna. " +
			"Vestibulum in vulputate eros. Curabitur non.");
	});

	$("#tt2").click(function () {
		$("#tn1").text("stagger");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt3").click(function () {
		$("#tn1").text("Purifying Brew");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt4").click(function () {
		$("#tn1").text("Shuffle");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt5").click(function () {
		$("#tn1").text("Hit Scheme");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt6").click(function () {
		$("#tn1").text("gift of the ox");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt7").click(function () {
		$("#tn1").text("Healing elixir");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt8").click(function () {
		$("#tn1").text("Quick Sip");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt9").click(function () {
		$("#tn1").text("Rushing Jade Wind");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});

	$("#tt10").click(function () {
		$("#tn1").text("Special Delivery");
		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	});
// ТАЛАНТЫ

});