$(document).ready(function() {

	// скролл вверх выбранного итема меню
	$(".select").click(function(){
		$("html,body").animate({
			scrollTop: 0
	}, 200);
	});  
	// скролл вверх выбранного итема меню

	
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
	
	});
	