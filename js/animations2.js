/**	
  *	Function responsible for fading the 
  *	page in once the page is loaded.
  */
function pageFadeIn(){
	$("#mainContainer").hide().fadeIn("slow");
}

/**
  *	Change navigation and dropdown element classes to
  * appropriate JQuery versions. The purpose is that 
  * new classes (and CSS rules) need to be assigned to
  * these elements, as there are current CSS rules detecting
  * hover psuedo classes. (why? to have a CSS only functional
  * navigation in the event of Javascript being disabled).
  */
function applyJQueryNavigationCSS(){
	$(".dropdownList").addClass("JQueryDropdownList").removeClass("dropdownList");
	$(".navLink").addClass("JQueryUnselectedNavLink").addClass("JQueryNavLink").removeClass("navLink");
	$(".selectedNavLink").addClass("JQuerySelectedNavLink").addClass("JQueryNavLink").removeClass("selectedNavLink");
}

/**
  *	Function responsible for hiding the drop down
  *	menus once the page loads. (Making the drop down in 
  *	CSS should automatically hide the drop downs. It is 
  *	it is important to have the drop downs function in 
  *	just CSS so that if the user has Javascript disabled,
  * the navigation is still functional.
  */
function hideAllDropdownMenus(){
	$(".JQueryDropdownList").hide();
}
	
/**
  *	Takes in a JQuery object representing the drop down menu
  * that is to be open. Takes care of hiding other potentially
  * open drop down menus. (Add in error handling for fadeSpeed).
  */
function fadeInDropdownMenu($desiredDropdownMenu, fadeSpeed){
	
	var $dropdowns = $(".JQueryDropdownList");
	//for each drop down menu...
	$dropdowns.each(function(){
		
		//if the current is not the desired...
		if($(this).attr("id") !== $desiredDropdownMenu.attr("id")){
			
			//hide it.
			$(this).hide();
			
		//otherwise...
		}else{
		
			//stop current animation (if any) and fade it in.
			$(this).stop().fadeIn(fadeSpeed);
		}
	});
}
/**
  *	JQuery function that handles all page and navigation
  *	animations and functionalities.
  */
$(function(){
	
	//fades the page in.
	pageFadeIn();
	
	//alters navigation and dropdown CSS.
	applyJQueryNavigationCSS();
	
	//hide all drop down menus.
	hideAllDropdownMenus();
	
	//cache.
	var $nav = $("#navList");
	var $navLinks = $(".JQueryNavLink");
	var $highSchoolDD = $("#highSchoolDDList");
	var $collegeDD = $("#collegeDDList");
	var $professionDD = $("#professionDDList");
	var $dropdowns = $(".JQueryDropdownList");
	
	$navLinks.on("mouseenter tap", function(event){
		if(event.target.id === "highSchoolNavLink"){
			fadeInDropdownMenu($highSchoolDD, "fast");
		}else if(event.target.id === "collegeNavLink"){
			fadeInDropdownMenu($collegeDD, "fast");
		}else if(event.target.id === "professionNavLink"){
			fadeInDropdownMenu($professionDD, "fast");
		}else if(event.target.id === "nowNavLink"){
			hideAllDropdownMenus();
		}else{
			window.alert("bruhh");
		}
	});
	
	//bind "mouseleave" event to the navigation.
	//fires every time the mouse leaves the navLinks and DD's 
	//(because DD's are children of the navLinks.
	$nav.on("mouseleave", function(){
		//stop() method call prevents the animation
		//cue from building up if rapid movement in/out
		//of nav.
		$dropdowns.stop().fadeOut("fast");
	}); 
});

 