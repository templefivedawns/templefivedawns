$(document).ready(function() {

	// $(".Slide1").hover(function(){
	// 	for (var i=2; i<20; i++) {
	// 	if (i%2==0) { $(".SLide1").css("margin-top", "5%"); }
	// 	else { $(".SLide1").css("margin-top", "0"); }
	// 	}
		
	//  });
	 

	// $(".Slide1").hover(function(){
	// 	$(".Slide1").css("margin-top", "5%");
	//  });

	for (var i=0; i<5000; ++i) {
		

	$(".Slide1").hover(function () {

		$(this).animate({
			bottom: '+=10'
	}, 800);
	$(this).animate({
		bottom: '-=10'
}, 800);
} );

	}

	$(".Slide1").mouseleave(function(){
		$(this).stop(true, false);
		$(this).animate({
			bottom: '0'
	}, 800);
	});



	$(".discord, .boosty").hover(function () {

		$(this).animate({
			bottom: '+=5'
	}, 400);
	$(this).animate({
		bottom: '-=5'
}, 400);
} );

$(".discord, .boosty").mouseleave(function(){
	$(this).stop(true, false);
	$(this).animate({
		bottom: '0'
}, 400);
});



for (var i=0; i<5000; ++i) {
		

	$(".support").hover(function () {

		$(this).animate({
			bottom: '+=5'
	}, 500);
	$(this).animate({
		bottom: '-=5'
}, 500);
} );

	}

	$(".support").mouseleave(function(){
		$(this).stop(true, false);
		$(this).animate({
			bottom: '0'
	}, 800);
	});





// 	$(".first").hover(function () {

// 		$(".dropdownMenu").css("visibility", "visible");
	
// } );

// $(".first").mouseleave(function(){
// 	$(".dropdownMenu").css("visibility", "hidden");
// });







$(".first").hover(function () {

	var widthContainer1 = $(".dropdownMenu1").outerWidth()
	var heightContainer1 = $(".dropdownMenu1").outerHeight()
	var widthWindow = $( window ).width();
	$(".dropdownMenu1").fadeIn(100);
	$(".dropdownMenuContainer1").css("display", "block");
	$(".dropdownMenuContainer1").css("width", (100 * widthContainer1 / widthWindow) + "vw");
	$(".dropdownMenuContainer1").css("height", (100 * heightContainer1 / widthWindow) + 0.4 +"vw");

} );

$(".first").mouseleave(function (){
  
if (

	$('.dropdownMenuContainer1:hover').length != 0 

) 
{
	$(".dropdownMenu1").css("display", "block");
	
} else {$(".dropdownMenu1").fadeOut(100);
$(".dropdownMenuContainer1").css("display", "none");
}
});

$(".second").hover(function () {
	var widthContainer2 = $(".dropdownMenu2").outerWidth()
	var heightContainer2 = $(".dropdownMenu2").outerHeight()
	var widthWindow = $( window ).width();
	$(".dropdownMenu2").fadeIn(100);
	$(".dropdownMenuContainer2").css("display", "block");
	$(".dropdownMenuContainer2").css("width", (100 * widthContainer2 / widthWindow) + "vw");
	$(".dropdownMenuContainer2").css("height", (100 * heightContainer2 / widthWindow) + 0.4 +"vw");

} );




$(".second").mouseleave(function (){
  
	if (
	
		$('.dropdownMenuContainer2:hover').length != 0 
	
	) 
	{
		$(".dropdownMenu2").css("display", "block");
		
	} else {$(".dropdownMenu2").fadeOut(100);
	$(".dropdownMenuContainer2").css("display", "none");
	
}

	});





$(".dropdownMenuContainer").mouseleave(function () {
	$(".dropdownMenu").fadeOut(100);
	$(".dropdownMenuContainer1").css("display", "none");
	$(".dropdownMenuContainer2").css("display", "none");

} );
















});
