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
// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-4
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
// , "#tt21", "#tt26", "#tt24",
// 		"#tt29", "#tt32", "#tt34", "#tt36",
// 		"#tt48", "#tt51", "#tt21", "#tt25",
// 		"#tt28"

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