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

});