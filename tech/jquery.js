var panels = document.querySelectorAll(".panel");
$(document).ready(function(){

	$(".panel").mouseover(function(){

		$(this).addClass("panel active");
		
		$(this).children().css({ "left": "20px" });

		for (var j = 0; j < panels.length; j++)
		{
    		if (panels[j].className == "panel active")
    		{
      			var a = j;
      			var b = j * 15;
      			panels[j].style.left = b + "%";
    		}
  		}
  		for (var k = 0; k < panels.length; k++) {
  		  if (panels[k].className != "panel active") {
  		    panels[k].className = "panel inactive";
  		    var c;
  		    if (k < a) {
  		      c = b - (a - k) * 15;
  		      panels[k].style.left = c + "%";
  		    } else if (k > a) {
  		      c = b + 25 + (k - a) * 15;
  		      panels[k].style.left = c + "%";
  		    }
  		  }
  		}
	});
	$(".panel").mouseleave(function(){

		$(this).children().css({ "left": "-20px" });
		$(".panel").css({"left" : ""}).removeClass("active").removeClass("inactive");

	});
});