$(document).ready(function() {

	$(".fig_caption").hide();

	$(".p1").mouseenter(function() {
		$(".link").css({
			"width" : "500px"
		});
		$(".fig_caption").fadeIn(200);

	});

	$(".p1").mouseleave(function() {
		$(".link").css({
			"width" : "2%"
		});
		$(".fig_caption").fadeOut(1);

	});

});