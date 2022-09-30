$(document).ready(function() {

	// скролл вверх выбранного итема меню
	$(".select").click(function(){
		$("html,body").animate({
			scrollTop: 0
	}, 200);
	});  
	// скролл вверх выбранного итема меню	
	
// ФИКС ЗАГОЛОВКА ГАЙДА
$(".mobHeaderDots").click(function(){
	
	$(".mobHeaderDots").css("display", "none");
	$(".mobHeaderDotsHide").css("display", "block");
	// $("#footer-mob").css("display", "none");
	$(".container").css("marginTop", "11vw");

});

$(".mobHeaderDotsHide").click(function(){
	
	$(".mobHeaderDots").css("display", "block");
	$(".mobHeaderDotsHide").css("display", "none");
	// $("#footer-mob").css("display", "block");
	$(".container").css("marginTop", "0%");

});
// ФИКС ЗАГОЛОВКА ГАЙДА
	
	$(".mobHeaderDots").click(function(){
		
		$(".mobHeaderDots").css("display", "none");
		$(".mobHeaderDotsHide").css("display", "block");
	
	});
	
	$(".mobHeaderDotsHide").click(function(){
		
		$(".mobHeaderDots").css("display", "block");
		$(".mobHeaderDotsHide").css("display", "none");
	
	});
	
	
	$(".mobHeaderDots").click(function(){
		$(".popup").animate({
			width: "70vw"
	}, 150);
	
	$(".popupBackground").animate({
		width: "100%"
	}, 150);
	
	
	$(".popup-menu").fadeIn(150);
	
	$("#header-mob").css("display", "none");
	$("#popup-header-mob").css("display", "block");
	
	});
	
	
	$(".mobHeaderDotsHide").click(function(){
		$(".popup").animate({
			width: "0%"
	}, 150);
	
	$(".popupBackground").animate({
		width: "0%"
	}, 150);
	
	
	$(".popup-menu").fadeOut(150);
	
	$("#header-mob").css("display", "block");
	$("#popup-header-mob").css("display", "none");
	
	});
	
	
	$(".popupBackground").click(function(){
		$(".popup").animate({
			width: "0%"
	}, 150);
	
	$(".popupBackground").animate({
		width: "0%"
	}, 150);
	
	
	$(".popup-menu").fadeOut(150);
	
	$(".mobHeaderDots").css("display", "block");
		$(".mobHeaderDotsHide").css("display", "none");
		$(".container").removeClass("fixed");
	
		$("#header-mob").css("display", "block");
	$("#popup-header-mob").css("display", "none");
	
	});
	
	$(".mobHeaderDots").click(function(){
		
		$(".container").addClass("fixed");
	
	});
	
	$(".mobHeaderDotsHide").click(function(){
		
		$(".container").removeClass("fixed");
	
	});



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

// ТАЛАНТЫ
	$(".t1").click(function(){
		$(".tc1").fadeIn (600);
		$(".tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t1").attr('border', '#00ff99 solid 1px');
		$(".tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t2").click(function(){
		$(".tc2").fadeIn (600);
		$(".tc1, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t2").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t3").click(function(){
		$(".tc3").fadeIn (600);
		$(".tc1, .tc2, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t3").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc4, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t4").click(function(){
		$(".tc4").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc5, .tc6, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t4").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc5, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t5").click(function(){
		$(".tc5").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc4, .tc6, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t5").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc6, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t6").click(function(){
		$(".tc6").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc7, .tc8, .tc9").fadeOut (0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc7, .tc8, .tc9").attr('border', 'none');
	});

	$(".t7").click(function(){
		$(".tc7").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc8, .tc9").fadeOut (0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc8, .tc9").attr('border', 'none');
	});

	$(".t8").click(function(){
		$(".tc8").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc9").fadeOut (0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc9").attr('border', 'none');
	});

	$(".t9").click(function(){
		$(".tc9").fadeIn (600);
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8").fadeOut (0);
		$(".t6").attr('border', '#00ff99 solid 1px');
		$(".tc1, .tc2, .tc3, .tc4, .tc5, .tc6, .tc7, .tc8").attr('border', 'none');
	});

// ТАЛАНТЫ

// ХЭДЕР МЕНЮ БРАШ

$(".WW").hover(function(){
	$(".WWbrush").fadeIn();


});

$(".WW").mouseleave(function(){
	$(".WWbrush").fadeOut();

});




$(".MW").hover(function(){
	$(".MWbrush").fadeIn();


});

$(".MW").mouseleave(function(){
	$(".MWbrush").fadeOut();

});




$(".Support").hover(function(){
	$(".Supportbrush").fadeIn();


});

$(".Support").mouseleave(function(){
	$(".Supportbrush").fadeOut();

});

// ХЭДЕР МЕНЮ БРАШ

});