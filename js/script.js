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
			bottom: '+=4'
	}, 800);
	$(this).animate({
		bottom: '-=4'
}, 800);
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

	$(".dropdownMenu1").fadeIn(100);
	$(".dropdownMenuContainer1").css("display", "block");

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

	$(".dropdownMenu2").fadeIn(100);
	$(".dropdownMenuContainer2").css("display", "block");

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
