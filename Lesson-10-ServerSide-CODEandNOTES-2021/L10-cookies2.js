//######## LESSON 10: RETRIEVING DATA #########
//NOW THAT WE HAVE STORED DATA ON ONE PAGE, WE CAN ACCESS IT FROM ANY PAGE ON THIS WEBSITE.
window.onload = function(){
//GET ELEMENTS USED FOR OUTPUT
	var userOut = document.getElementById("nameIn");
	var merchOut = document.getElementById("msg_merch");
	var emailOut = document.getElementById("newMsgBox");

//GET VALUES FROM COOKIES/LOCAL STORAGE
	var cookieArray = document.cookie.split(";");
	var userName = cookieArray[0].split("=")[1];
	var userMerch = cookieArray[1].split("=")[1];

	var userEmail = localStorage.getItem("email");

//CREATE OUTPUT WITH VALUES
	userOut.innerHTML = ", " + userName;
	merchOut.innerHTML = userMerch;
	
	
//I didn't do it for the lines above, but our logic should always check first if the cookie/storage item has been created.  Below I am checking if the local storage value is null before outputting to the screen.  For cookies, you can check that the length property is > 0.
	if (userEmail !== null) {
		emailOut.innerHTML = "We will send an email to " + userEmail + " when something new comes in.";
	}
}//end onload