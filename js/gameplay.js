$(document).ready(function() {

	// скролл вверх выбранного итема меню
	$(".select").click(function(){
		$("html,body").animate({
			scrollTop: 0
	}, 200);
	});  
	// скролл вверх выбранного итема меню
	
	// аккордеон начало
	$(".accordion").click(function(){
		if($(".panel").css('display') == 'none')
		{
			$(".panel").slideDown(200);
		}
		else {
			$(".panel").slideUp(200);
		}
	});  
	// аккордеон конец
	
	
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
	});

	$(".btn-r").click(function(){
			$(".tab-r").fadeIn (600);
			$(".tab-l").fadeOut (0);
	});



});