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
	$(".t1").click(function () {
		$(".tc1").fadeIn(600);
		$(".tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t1").attr('border', '#00ff99 solid 1px');
		$(".tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t2").click(function () {
		$(".tc2").fadeIn(600);
		$(".tc1, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t2").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t3").click(function () {
		$(".tc3").fadeIn(600);
		$(".tc1, .tc2, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t3").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t4").click(function () {
		$(".tc4").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t4").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t5").click(function () {
		$(".tc5").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc4, .tc6, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t5").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t6").click(function () {
		$(".tc6").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc7, .tc8, .tc9").fadeOut(0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t7").click(function () {
		$(".tc7").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc8, .tc9").fadeOut(0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc8, .tc9").attr('border', 'none');
	});

	$(".t8").click(function () {
		$(".tc8").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc9").fadeOut(0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc9").attr('border', 'none');
	});

	$(".t9").click(function () {
		$(".tc9").fadeIn(600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8").fadeOut(0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8").attr('border', 'none');
	});
// ТАЛАНТЫ

});