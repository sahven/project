var initial_height_navbar = 40;

$(window).scroll(function() {

	var final_height = $(this).scrollTop();

	if ( Math.abs( final_height-initial_height_navbar ) > 5 ) {
		

		if(final_height-initial_height_navbar > 0) {
			$("#navbar-header").css({
				"top" : "-45px"
			});
		}

		else
			$("#navbar-header").css({
				"top" : ""
			});

	}

	initial_height_navbar = final_height;

});