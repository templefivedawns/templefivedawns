$(document).ready(function () {

// ТАБЫ
	$(".btn-rotation-1").click(function(){
		$(".tab-rotation-1").fadeIn (600);
		$(".tab-rotation-2").fadeOut (0);
		$(".btn-rotation-1").addClass("select-bg-leg");
		$(".btn-rotation-2").removeClass("select-bg-leg");
	});

	$(".btn-rotation-2").click(function(){
		$(".tab-rotation-2").fadeIn (600);
		$(".tab-rotation-1").fadeOut (0);
		$(".btn-rotation-2").addClass("select-bg-leg");
		$(".btn-rotation-1").removeClass("select-bg-leg");
	});

	$(".btn-rotation-3").click(function(){
		$(".tab-rotation-3").fadeIn (600);
		$(".tab-rotation-2").fadeOut (0);
		$(".btn-rotation-3").addClass("select-bg-leg");
		$(".btn-rotation-2").removeClass("select-bg-leg");
	});
// ТАБЫ

// ТАЛАНТЫ
	// СВАП
	$("#talents-swap-spec").click(function () {
		if ($("#tt10").css('display') === 'block') {
			$("#talents-swap-spec").css("color", "#fff468");
			$("#tt10").css("display", "none");
			$("#tt21").css("display", "none");
			$("#tt26").css("display", "none");
			$("#tt24").css("display", "none");
			$("#tt29").css("display", "none");
			$("#tt32").css("display", "none");
			$("#tt36").css("display", "none");
			$("#tt48").css("display", "none");
			$("#tt51").css("display", "none");
		} else {
			$("#talents-swap-spec").css("color", "#00FF99");
			$("#tt10").css("display", "block");
			$("#tt21").css("display", "block");
			$("#tt26").css("display", "block");
			$("#tt24").css("display", "block");
			$("#tt29").css("display", "block");
			$("#tt32").css("display", "block");
			$("#tt36").css("display", "block");
			$("#tt48").css("display", "block");
			$("#tt51").css("display", "block");
		}
	});

	$("#talents-swap-monk").click(function () {
		if ($("#ttm21").css('display') === 'block') {
			$("#talents-swap-monk").css("color", "#fff468");
			$("#ttm21").css("display", "none");
			$("#ttm26").css("display", "none");
			$("#ttm28").css("display", "none");
		} else {
			$("#talents-swap-monk").css("color", "#00FF99");
			$("#ttm21").css("display", "block");
			$("#ttm26").css("display", "block");
			$("#ttm28").css("display", "block");
		}
	});
// СВАП

	// let tt1 = document.querySelector('#tt1');
	// $(window).resize(function() {
	// 	if ($(window).width() < 480) {
	// 		tt1.setAttribute("data-disable-wowhead-tooltip", "true")
	// 	} else {
	// 		tt1.setAttribute("data-disable-wowhead-tooltip", "false")
	// 	}
	// });

	// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-4
	$("#tt1").click(function () {
		let name1 = "keg smash"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("keg smash");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt2").click(function () {
		let name1 = "stagger"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("stagger");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt3").click(function () {
		let name1 = "Purifying Brew"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Purifying Brew");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt4").click(function () {
		let name1 = "Shuffle"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Shuffle");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt5").click(function () {
		let name1 = "Hit Scheme"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Hit Scheme");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt6").click(function () {
		let name1 = "gift of the ox"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("gift of the ox");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt7").click(function () {
		let name1 = "Healing elixir"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Healing elixir");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt8").click(function () {
		let name1 = "Quick Sip"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Quick Sip");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt9").click(function () {
		let name1 = "Rushing Jade Wind"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Rushing Jade Wind");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#tt10").click(function () {
		let name1 = "Special Delivery"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row2-tc").css("display", "none");
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Special Delivery");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-4

// 	ТАЛАНТЫ ХМЕЛЕВАРА 5-7
	$("#tt11").click(function () {
		let name1 = "celestial flames"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row1-tc").css("display", "none");
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("celestial flames");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ ХМЕЛЕВАРА 5-7

// 	ТАЛАНТЫ ХМЕЛЕВАРА 8-10
	$("#tt49").click(function () {
		let name1 = "stormstout's last keg"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row1-tc").css("display", "none");
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("stormstout's last keg");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ ХМЕЛЕВАРА 8-10
// ТАЛАНТЫ

});