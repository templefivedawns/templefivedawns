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