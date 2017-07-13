$(document).ready(function() {

	$("span[class^='fig_caption']").hide();

	//for p1
	$(".p1").mouseenter(function() {
		$(".link-1").css({
			"width" : "15%"
		});
		$(".fig_caption1").fadeIn();

	});

	$(".p1").mouseleave(function() {
		$(".link-1").css({
			"width" : "0"
		});
		$(".fig_caption1").hide();

	});

	//for p2
	$(".p2").mouseenter(function() {
		$(".link-2").css({
			"width" : "15%"
		});
		$(".fig_caption2").fadeIn();

	});

	$(".p2").mouseleave(function() {
		$(".link-2").css({
			"width" : "0"
		});
		$(".fig_caption2").hide();

	});

//for p3
	$(".p3").mouseenter(function() {
		$(".link-3").css({
			"width" : "15%"
		});
		$(".fig_caption3").fadeIn();

	});

	$(".p3").mouseleave(function() {
		$(".link-3").css({
			"width" : "0"
		});
		$(".fig_caption3").hide();

	});

//for p4
	$(".p4").mouseenter(function() {
		$(".link-4").css({
			"width" : "15%"
		});
		$(".fig_caption4").fadeIn();

	});

	$(".p4").mouseleave(function() {
		$(".link-4").css({
			"width" : "0"
		});
		$(".fig_caption4").hide();

	});


//for p5
	$(".p5").mouseenter(function() {
		$(".link-5").css({
			"width" : "15%"
		});
		$(".fig_caption5").fadeIn();

	});

	$(".p5").mouseleave(function() {
		$(".link-5").css({
			"width" : "0"
		});
		$(".fig_caption5").hide();

	});


//for p6
	$(".p6").mouseenter(function() {
		$(".link-6").css({
			"width" : "15%"
		});
		$(".fig_caption6").fadeIn();

	});

	$(".p6").mouseleave(function() {
		$(".link-6").css({
			"width" : "0"
		});
		$(".fig_caption6").hide();

	});

});