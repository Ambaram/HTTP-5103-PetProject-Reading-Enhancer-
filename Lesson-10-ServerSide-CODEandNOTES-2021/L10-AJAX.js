//######## LESSON 10: AJAX #########
//This demo is based on content and files from JavaScript & AJAX (7th ed)
//Negrino, T., &amp; Smith, D. (2009). 13 Introducing AJAX. In JavaScript and Ajax for the Web (7th ed.). Berkeley, CA: Peachpit Press.

//ASYNCHRONOUS JAVASCRIPT AND XML ALLOWS US TO ACCESS FILES FROM THE WEB SERVER AND UPDATE SECTIONS OF CONTENT WITHOUT REFRESHING THE PAGE.
function initAll() {
	var showData = document.getElementById("updateArea");
	document.getElementById("makeTextRequest").onclick = getTextFile;
	document.getElementById("makeXMLRequest").onclick = getXmlFile;

function getTextFile(){//THIS FUNCTION WILL RETRIEVE A TEXT FILE FROM THE SERVER.
//IT ALL STARTS WITH A SPECIAL XMLHttpRequest OBJECT.
	var xhr = new XMLHttpRequest();//CREATE A NEW REQUEST OBJECT

//NOW, WE CREATE A LISTENER & A FUNCTION FOR WHEN THE OBJECT'S readyState CHANGES.
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 ) {//readyState OF 4 MEANS SERVER RESPONSE IS COMPLETE
			if (xhr.status === 200) {//status OF 200 MEANS "OK"
				showData.innerHTML = xhr.responseText; //DISPLAY RETREIVED DATA
			//THE ABOVE PROPERTY responseText RETURNS THE DATA AS A STRING
			} else {//HANDLE THE ERROR
				alert("Connection was unsuccessful");
			}
		}//end if readyState
	}//end readyState listener function

//NOW THAT WE'RE READY FOR A RESPONSE, OPEN A CONNECTION TO THE SERVER
	xhr.open("GET","gAddress.txt",true);
//open METHOD TAKES 3 PARAMETERS: METHOD (GET OR POST); THE URL LOCATION OF THE FILE; WHETHER OR NOT TO SEND ASYNCHRONOUSLY (true TO SEND ASYNCHRONOUSLY)

	//FINALLY, WE CAN SEND OUR REQUEST 
	xhr.send(null);//DIDN'T WE ALREADY DO THIS ABOVE? NO, WE SET UP THE LISTENER & FUNCTION TO HANDLE WHEN THIS REQUEST COMES BACK.
}//end getTextFile

//WE CAN RETRIVE MANY DIFFERENT TYPES OF DATA INCLUDING XML...
function getXmlFile(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
	if (xhr.readyState === 4 ) {
		if (xhr.status === 200) {
			xmlDoc = xhr.responseXML;//FOR XML, USE .responseXML
//LET'S CREATE A TABLE WITH THE RETURNED XML FILE...
			var tblOut = "<table><tr><th>State</th><th>Abbreviation</th></tr>";
//WE CAN USE A FAMILIAR JS METHOD ON THE XML FILE...
			xmlItems = xmlDoc.getElementsByTagName("item");

//NOW, LOOP THROUGH THE COLLECTION AND ACCESS THE NODE VALUES.
			for (var i = 0; i < xmlItems.length; i++) {
				tblOut += "<tr><td>";
				tblOut += xmlItems[i].childNodes[0].childNodes[0].nodeValue + "</td><td>";
				tblOut += xmlItems[i].childNodes[1].childNodes[0].nodeValue;
				tblOut += "</td></tr>";
			}
//FINALLY, END THE TABLE AND OUTPUT TO OUR <div>.
			tblOut += "</table>";
			showData.innerHTML = tblOut;
		} else {
			alert("Connection was unsuccessful");
		} 
	}
  }//end readyState function

	xhr.open("GET","us-states.xml",true);
	xhr.send(null);
}//end getXmlFile

}//end onload
window.onload = initAll;