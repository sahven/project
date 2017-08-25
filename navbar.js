var initial_height_navbar = 0;

$(document).scroll(function() {

	var final_height = $(this).scrollTop();

	if ( Math.abs( final_height-initial_height_navbar ) > 0 ) {
		

		if(final_height-initial_height_navbar > 0) {
			$(".navbar1").fadeIn("slow").css({
				"top" : "-66px"
			});
		}

		else
			$(".navbar1").fadeOut("slow").css({
				"top" : ""
			});

	}

	initial_height_navbar = final_height;

});