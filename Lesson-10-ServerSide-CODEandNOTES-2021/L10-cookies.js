//######## LESSON 10: COOKIES & LOCAL STORAGE #########
//THE HTTP PROTOCOL ON ITS OWN DOES NOT LET US STORE INFORMATION FROM PAGE TO PAGE. THERE ARE 2 USEFUL TOOLS THAT HELP US DEAL WITH THIS ISSUE: COOKIES & LOCAL STORAGE.
//THE document OBJECT HAS A cookie OBJECT ATTRIBUTE THAT LETS US STORE OR ACCESS OUR TEXT STRING IN THE COOKIE FILE. IT'S AS SIMPLE AS ASSIGNING A key=value PAIR.  THE COOKIE ITSELF IS A TEXT FILE CREATED ON THE WEB SERVER THAT GETS STORED ON THE CLIENT COMPUTER WITH A REFERENCE TO THE SERVER THAT CREATED IT.

//==== CREATING OUR FIRST COOKIE ====
document.cookie = "firstName=Frankie SameSite=Lax;";
	console.log(document.cookie);
//NOTE THAT COOKIE NAMES MAY NOT INCLUDE SPACES, COMMAS, OR SEMICOLONS.
//COOKIES ACCEPT A FEW OTHER VALUES THAT ARE USEFUL FOR US. HERE'S THE SAME COOKIE WITH THE MOST COMMON PROPERTY SET:
document.cookie = "firstName=Frankie; max-age=60; SameSite=Lax;";
console.log(document.cookie);//NOTE, YOU CAN'T SEE THE max-age PROPERTY WE'VE SET.  
/*max-age IS HOW LONG (IN SECONDS) YOU WOULD LIKE TO STORE THE COOKIE FOR.  IF THIS VALUE IS NOT SET, THE COOKIE WILL BE DELETED WHEN THE BROWSER IS CLOSED.  THE ABOVE COOKIE WILL 'LIVE' FOR 1 MINUTE.*/

//==== CREATING OUR SECOND COOKIE ====
document.cookie = "language=enca;max-age=10; SameSite=Lax;";
console.log(document.cookie);
//NOTE, NEW COOKIE STRING IS CONCATENATED TO ORIGINAL COOKIE STRING.
var fullCookie = document.cookie;
console.log("FullCookieString:" + fullCookie);

//==== DELETING A COOKIE ==== REASSIGN ITS MAX-AGE TO 0 SECONDS
document.cookie = "firstName=Frankie;max-age=0; SameSite=Lax;";
document.cookie = "language=enca;max-age=0; SameSite=Lax;";

//==== ACCESSING THE COOKIE VALUES (1 COOKIE) ====
//CREATE A COOKIE & STORE STRING VALUE IN A VARIABLE.
document.cookie = "lastname=McGillicuddy; max-age=120; SameSite=Lax;";
var nameCookie = document.cookie;

//USE indexOf METHOD TO FIND THE LAST LETTER OF OUR KEY + THE EQUALS SIGN.
var startIndex = nameCookie.indexOf("e=");//FOUND AT INDEX 7 OF STRING
//KNOWING THAT, WE CAN USE THE substring METHOD TO GET OUR VALUE, WHICH STARTS 2 CHARACTERS AFTER OUR startIndex...
var lastName = nameCookie.substring(startIndex + 2);
console.log("LastName stored: " + lastName);

//==== ACCESSING THE COOKIE VALUES (MULTIPLE COOKIES) ====
document.cookie = "favTeam=Raptors; max-age=120; SameSite=Lax;";
console.log("Multiple Cookie: " + document.cookie);

//REMEMBER join() WHERE WE TURNED AN ARRAY INTO A STRING?  HERE WE TURN THE STRING INTO AN ARRAY WITH split(DELIMITER).
var cookieArray = document.cookie.split(";");//BECAUSE THE COOKIES ARE SEPARATED BY ; IN THE STRING.
console.log(cookieArray);

//NOW, IF WE WANT THE favTeam VALUE, IT'S IN THE SECOND ELEMENT OF THE ARRAY...
var teamKeyValue = cookieArray[1];
console.log(teamKeyValue);

//GETTING CLOSE, NOW USE split() AGAIN.
var team = teamKeyValue.split("=")[1];
console.log("Fav Team: " + team);

//HERE'S THE SHORTCUT...
var shortCut = cookieArray[1].split("=")[1];
console.log("Shortcut to Team: " + shortCut);

//COOKIES HAVE DRAWBACKS, THEY ARE LIMITED TO AROUND 4 KB AND ARE SENT WITH EACH SERVER REQUEST. THERE IS ANOTHER OPTION:
/*The window object has two properties we can use for persistent storage as well.  localStorage & sessionStorage  store name/value pairs on the client computer in a setters & getters fashion.  The only difference is that sessionStorage is removed when the session ends. Better than cookies, they can store 5MB or more of data.*/
//STORING DATA ON THE CLIENT COMPUTER
localStorage.setItem("email", "me@example.com");

//OTHER METHODS
var userEmail = localStorage.getItem("email");//RETRIEVE STORED VALUE.
//localStorage.removeItem("email");//DELETES THIS ITEM.
//localStorage.clear();//DELETES ALL ITEMS.