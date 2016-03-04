function Slider(){
	$(".slider #1").show("fade", 500);
	$(".slider #1").delay(5500).hide("slide", {direction:"left"}, 500);

	var count = 2;
	startImageTimer(count);
}

var imageTimer = null;

function startImageTimer(count){
	var sliderCount = $(".slider div").size();
	if(imageTimer){
		clearInterval(imageTimer); // built in JS function that stops our interval 
	}
	// we then reset or start again the Timer, and have it start at the first slide.
	imageTimer = setInterval(function(){ // returns an ID
		$(".slider #"+count).show("slide",{direction:"right"},500);
		$(".slider #"+count).delay(5500).hide("slide",{direction:"left"},500)

		if(count == sliderCount){
			count = 1;
		} else{
			count = count+1;
		}
	}, 6500); 

}

// Our code below takes 2 arguments, but we only really need the second.
function sliderTo(pictureToSlideTo){
	$(".slider div").hide();
	$(".slider #"+pictureToSlideTo).show("slide",{direction:"right"},500);

	startImageTimer(1);
}

