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
