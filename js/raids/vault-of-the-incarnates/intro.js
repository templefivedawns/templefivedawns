$(document).ready(function() {


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


// ---------------
$(".eranog-saturate").hover(function () {

	$(".eranog-saturate").addClass("saturate");


} );

$(".eranog-saturate").mouseleave(function () {

$(".eranog-saturate").removeClass("saturate");
} );
// ---------------
$(".terros-saturate").hover(function () {

	$(".terros-saturate").addClass("saturate");


} );

$(".terros-saturate").mouseleave(function () {

$(".terros-saturate").removeClass("saturate");
} );
// ---------------
$(".council-saturate").hover(function () {

	$(".council-saturate").addClass("saturate");


} );

$(".council-saturate").mouseleave(function () {

$(".council-saturate").removeClass("saturate");
} );
// ---------------
$(".sennarth-saturate").hover(function () {

	$(".sennarth-saturate").addClass("saturate");


} );

$(".sennarth-saturate").mouseleave(function () {

$(".sennarth-saturate").removeClass("saturate");
} );
// ---------------
$(".dathea-saturate").hover(function () {

	$(".dathea-saturate").addClass("saturate");


} );

$(".dathea-saturate").mouseleave(function () {

$(".dathea-saturate").removeClass("saturate");
} );
// ---------------
$(".grimtotem-saturate").hover(function () {

	$(".grimtotem-saturate").addClass("saturate");


} );

$(".grimtotem-saturate").mouseleave(function () {

$(".grimtotem-saturate").removeClass("saturate");
} );
// ---------------
$(".diurna-saturate").hover(function () {

	$(".diurna-saturate").addClass("saturate");


} );

$(".diurna-saturate").mouseleave(function () {

$(".diurna-saturate").removeClass("saturate");
} );
// ---------------
$(".raszageth-saturate").hover(function () {

	$(".raszageth-saturate").addClass("saturate");


} );

$(".raszageth-saturate").mouseleave(function () {

$(".raszageth-saturate").removeClass("saturate");
} );
// ---------------



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
		// $("#footer-mob").css("display", "none");
		$(".container").css("marginTop", "11vw");
	
	});
	
	$(".mobHeaderDotsHide").click(function(){
		
		$(".mobHeaderDots").css("display", "block");
		$(".mobHeaderDotsHide").css("display", "none");
		// $("#footer-mob").css("display", "block");
		$(".container").css("marginTop", "0%");
	
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
	
	
	

	
	
	$(".WW").hover(function(){
		$(".WWbrush").fadeIn(100);
	
	
	});
	
	$(".WW").mouseleave(function(){
		$(".WWbrush").fadeOut(100);
	
	});
	
	
	
	
	$(".MW").hover(function(){
		$(".MWbrush").fadeIn(100);
	
	
	});
	
	$(".MW").mouseleave(function(){
		$(".MWbrush").fadeOut(100);
	
	});
	
	
	
	
	$(".Support").hover(function(){
		$(".Supportbrush").fadeIn(100);
	
	
	});
	
	$(".Support").mouseleave(function(){
		$(".Supportbrush").fadeOut(100);
	
	});
	
	
	

	});
	