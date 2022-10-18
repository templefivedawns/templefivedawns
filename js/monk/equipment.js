$(document).ready(function() {


	// ТАБЫ
	$(".btn-l").click(function(){
		$(".tab-l").fadeIn (600);
		$(".tab-r").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-l").addClass("select");
		$(".btn-r").removeClass("select");
	});
	
	$(".btn-r").click(function(){
		$(".tab-r").fadeIn (600);
		$(".tab-l").fadeOut (0);
		// $(".tab-r").attr('color', '#00ff99');
		// $(".tab-l").attr('color', '#9d9063');
		$(".btn-r").addClass("select");
		$(".btn-l").removeClass("select");
	});
	// ТАБЫ

	//ТАБЫ СТАТЫ
	$(".btn-stat-1").click(function(){
		$(".tab-stat-1").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-1").addClass("select");
		$(".btn-stat-2").removeClass("select");
		$(".btn-stat-3").removeClass("select");
		$(".btn-stat-4").removeClass("select");
		$(".btn-stat-5").removeClass("select");
	});

	$(".btn-stat-2").click(function(){
		$(".tab-stat-2").fadeIn (600);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-2").addClass("select");
		$(".btn-stat-1").removeClass("select");
		$(".btn-stat-3").removeClass("select");
		$(".btn-stat-4").removeClass("select");
		$(".btn-stat-5").removeClass("select");
	});

	$(".btn-stat-3").click(function(){
		$(".tab-stat-3").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-3").addClass("select");
		$(".btn-stat-2").removeClass("select");
		$(".btn-stat-1").removeClass("select");
		$(".btn-stat-4").removeClass("select");
		$(".btn-stat-5").removeClass("select");
	});

	$(".btn-stat-4").click(function(){
		$(".tab-stat-4").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-4").addClass("select");
		$(".btn-stat-2").removeClass("select");
		$(".btn-stat-3").removeClass("select");
		$(".btn-stat-1").removeClass("select");
		$(".btn-stat-5").removeClass("select");
	});

	$(".btn-stat-5").click(function(){
		$(".tab-stat-5").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-5").addClass("select");
		$(".btn-stat-2").removeClass("select");
		$(".btn-stat-3").removeClass("select");
		$(".btn-stat-4").removeClass("select");
		$(".btn-stat-1").removeClass("select");
	});
	//ТАБЫ СТАТЫ

	//ТАБ WTF1
	$(".btn-wtf1-1").click(function(){
		if ($(".tab-wtf1-1").css('display') == 'none') {
			$(".tab-wtf1-1").slideDown(200);
			$(".tab-wtf2-1").slideUp(200);
		} else {
			$(".tab-wtf1-1").slideUp(200);
		}
	});
//ТАБ WTF1

//ТАБ WTF2
	$(".btn-wtf2-1").click(function(){
		if ($(".tab-wtf2-1").css('display') == 'none') {
			$(".tab-wtf2-1").slideDown(200);
			$(".tab-wtf1-1").slideUp(200);
		} else {
			$(".tab-wtf2-1").slideUp(200);
		}
	});
//ТАБ WTF2




	});