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

	// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-5
	$("#tt1").click(function () {
		let name1 = "keg smash"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
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
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("Special Delivery");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-5

// 	ТАЛАНТЫ ХМЕЛЕВАРА 6-10
	$("#tt11").click(function () {
		let name1 = "celestial flames"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("celestial flames");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});



	$("#tt49").click(function () {
		let name1 = "stormstout's last keg"
		let name2 = $("#tn1").text()
		if (name1 === name2) {
			$(".row1-tc").css("display", "none");
			$("#tn1").text("none")
		} else {
			$(".row1-tc").fadeIn (600);
			$("#tn1").text("stormstout's last keg");
			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ ХМЕЛЕВАРА 6-10

	// 	ТАЛАНТЫ МОНАХА 1-5
	$("#ttm1").click(function () {
		let name1 = "Успокаивающий туман"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Успокаивающий туман");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm2").click(function () {
		let name1 = "удар восходящего солнца"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("удар восходящего солнца");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm3").click(function () {
		let name1 = "Тигриное рвение"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Тигриное рвение");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm4").click(function () {
		let name1 = "улучшенный кувырок"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("улучшенный кувырок");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm5").click(function () {
		let name1 = "Успокаивающее присутствие"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Успокаивающее присутствие");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm6").click(function () {
		let name1 = "Вывести из строя"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Вывести из строя");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm7").click(function () {
		let name1 = "взмах тигриного хвоста"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("взмах тигриного хвоста");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm8").click(function () {
		let name1 = "энергичное исторжение"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("энергичное исторжение");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm9").click(function () {
		let name1 = "Улучшенное 'Оживить'"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Улучшенное 'Оживить'");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm10").click(function () {
		let name1 = "Детоксикация"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Детоксикация");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});

	$("#ttm11").click(function () {
		let name1 = "Паралич"
		let name2 = $("#tn2").text()
		if (name1 === name2) {
			$(".row2-tc").css("display", "none");
			$("#tn2").text("none")
		} else {
			$(".row2-tc").fadeIn (600);
			$("#tn2").text("Паралич");
			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		}
	});
// 	ТАЛАНТЫ МОНАХА 1-5
	
// ТАЛАНТЫ

});