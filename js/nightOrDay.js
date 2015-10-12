$(function(){
	
	var today = new Date();
	var hours = today.getHours();
	if(hours <= 7 || hours >= 19){
		//night
		
		//handles changing the CSS for the navigation.
		$(".JQueryUnselectedNavLink").removeClass("JQueryUnselectedNavLink").addClass("nightJQueryUnselectedNavLink");
		$(".JQuerySelectedNavLink").removeClass("JQuerySelectedNavLink").addClass("nightJQuerySelectedNavLink");
		$(".DDItemLink").removeClass("DDItemLink").addClass("nightDDItemLink");
		//anything with class "dayLink" is switched to "nightLink".
		$(".dayLink").removeClass("dayLink").addClass("nightLink");
		//anything with class "dayContainer" is switched to "nightContainer".
		$(".dayContainer").removeClass("dayContainer").addClass("nightContainer");
	}
});