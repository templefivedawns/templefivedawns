$(document).ready(function() {

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

	if($(".popup").css('display') == 'none')
	{
		$(".popup").slideDown(200);
	}
	else {
		$(".popup").slideUp(200);
	}
});





/*скролл вверх выбранного итема меню*/ 
$(".select").click(function(){

		  $("html,body").animate({
        scrollTop: 0
    }, 200);

  });  
/*скролл вверх выбранного итема меню*/ 










});
