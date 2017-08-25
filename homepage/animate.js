$(document).ready(function() {

	$("span[class^='fig_caption']").hide();

		$(".panel1").mouseenter( function() {
			
			$(this).children(".link").css({ "width" : "15%" });
			
			$(this).children(".fig_caption").fadeIn();
			
		});
		
		$(".panel1").mouseleave( function() {
			
			$(this).children(".link").css({ "width" : "5%" });
			
			$(this).children(".fig_caption").hide();
			
		});

});