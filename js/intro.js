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

// анимация попапа
$(".mobHeaderDots").click(function(){
		$(".popup").animate({
			width: "toggle"
	}, 150);
});
// анимация попапа

// работа попапа
$(".mobHeaderDots").click(function(){
		$(".container").toggleClass("fixed");
});
// работа попапа

// скрытие попапа по попапу
// $(".popup").click(function(){
// 	$(".popup").css("display", "none");
// });
// скрытие попапа по попапу

// $(".mobHeaderDots").click(function(){
// 	if($(".popup").css('display') == 'block')
// 	{
// 		$(".container").css({position: "fixed"});
// 	}
// 	else {
// 		$(".container").css({position: "auto"});
// 	}
// });

// $(".mobHeaderDots").click(function(){
// 	if($(".popup").css('display') == 'none')
// 	{
// 		$(".container").css("position", "auto");
// 		$(".popup").animate({
// 			width: "toggle"
// 	}, 150);
// 	}
// 	else {
// 		$(".container").css("position", "fixed");
// 		$(".popup").animate({
// 			width: "toggle"
// 	}, 150);
// 	}
// });

});
