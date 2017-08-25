$(document).ready(function() {

	$("span[class^='fig_caption']").hide();
	$(".panel1").mouseenter(function() {

		$(this).children(".link").css({"width" : "15%"});
		$(this).children(".fig_caption").fadeIn();

	});

	$(".panel1").mouseleave(function() {

		$(this).children(".link").css({"width" : "5%"});
		$(this).children(".fig_caption").hide();

	});
	$(window).scroll(function(){
		var scroll_height = $(this).scrollTop();
		if (scroll_height > 800) {
			$("#container1").css({"display" : "none"});
		}
		else
		{
			$("#container1").show();
		}
	})

});