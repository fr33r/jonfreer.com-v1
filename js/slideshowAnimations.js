
$(function(){
	
	//remove first slide class
	var $first = $(".firstSlide");
	$first.removeClass("firstSlide");
	
	//fade first slide in.
	$first.fadeIn();
	
	//grab all of the slides.
	var slides = document.getElementsByClassName("slide");
	var currentIndex = 0;
	
	//check to see if there is more than one slide in the document.
	//why? --> so that a photo doesnt fade out and fade back in to itself
	//over and over.
	if(slides.length > 1){
	
		//set a timer.
		var timer = window.setInterval(function(){
		
			//gets the current slide.
			var current = slides[currentIndex];
			
			//fades it out.
			$(current).fadeOut("slow", function(){
			
				//once the fade out has completed,
				//it analyzes whether the slideshow should progress
				//or start over.
				if(currentIndex === slides.length - 1){
					currentIndex = 0;
				}else{
					currentIndex++;
				}
				
				//fades in the next slide.
				current = slides[currentIndex];
				$(current).fadeIn("slow");
			});
			
		//interval fires every 10 seconds.
		}, 10000);
	}
});