$(document).ready(function() {

	// ОПЕНЕР
	$(".rb1").click(function(){
		if ($(".rp1").css('display') == 'none') {
			$(".rp1").fadeIn(600);
			$(".rb1").removeClass("fa-xmark");
			$(".rb1").addClass("fa-check");
		} else {
			$(".rp1").fadeOut(200);
			$(".rb1").removeClass("fa-check");
			$(".rb1").addClass("fa-xmark");
		}
	});

	$(".rb2").click(function(){
		if ($(".rp3").css('display') == 'none') {
			$(".rp3").fadeIn(600);
			$(".rb2").removeClass("fa-xmark");
			$(".rb2").addClass("fa-check");
		} else {
			$(".rp3").fadeOut(200);
			$(".rb2").removeClass("fa-check");
			$(".rb2").addClass("fa-xmark");
		}
	});

	$(".rb3").click(function(){
		if ($(".rp4").css('display') == 'none') {
			$(".rp4").fadeIn(600);
			$(".rp5").fadeIn(600);
			$(".rb3").removeClass("fa-xmark");
			$(".rb3").addClass("fa-check");
		} else {
			$(".rp4").fadeOut(200);
			$(".rp5").fadeOut(200);
			$(".rb3").removeClass("fa-check");
			$(".rb3").addClass("fa-xmark");
		}
	});

	$(".rb4").click(function(){
		if ($(".rp6").css('display') == 'none') {
			$(".rp6").fadeIn(600);
			$(".rb4").removeClass("fa-xmark");
			$(".rb4").addClass("fa-check");
		} else {
			$(".rp6").fadeOut(200);
			$(".rb4").removeClass("fa-check");
			$(".rb4").addClass("fa-xmark");
		}
	});
// ОПЕНЕР

	// СТ
	$(".srb1").click(function(){
		if ($(".srp6").css('display') == 'none') {
			$(".srp6").fadeIn(600);
			$(".srb1").removeClass("fa-xmark");
			$(".srb1").addClass("fa-check");
		} else {
			$(".srp6").fadeOut(200);
			$(".srb1").removeClass("fa-check");
			$(".srb1").addClass("fa-xmark");
		}
	});

	$(".srb2").click(function(){
		if ($(".srp8").css('display') == 'none') {
			$(".srp9").fadeOut(0);
			$(".srp8").fadeIn(600);
			$(".srb2").removeClass("fa-xmark");
			$(".srb2").addClass("fa-check");
		} else {
			$(".srp8").fadeOut(0);
			$(".srp9").fadeIn(600);
			$(".srb2").removeClass("fa-check");
			$(".srb2").addClass("fa-xmark");
		}
	});
	// СТ


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

});