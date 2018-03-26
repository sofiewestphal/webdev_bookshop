//VARIABLES
var linkProductPage = '<li class="navLink" href="#productPage" id="navProduct" data-pageToShow="pageProducts">Products</li>';
var linkCreateProductPage = '<li class="navLink" href="#createProductPage" id="navCreateProduct" data-pageToShow="pageCreateProduct">Create new Product</li>';
var linkAdminProductsPage = '<li class="navLink" href="#adminProductsPage" id="navAdminProducts" data-pageToShow="pageAdminProducts">Admin Products</li>';
var linkAdminUsersPage = '<li class="navLink" href="#adminUsersPage" id="navAdminUsers" data-pageToShow="pageAdminUsers">Admin Users</li>';
var linkYourProfilePage = '<li class="navLink" href="#adminProfilePage" id="navAdminProfileLink" data-pageToShow="pageAdminProfile">Your Profile</li>';
var linkLogOut = '<li class="navLink" href="#logoutPage" id="navLogoutLink" data-pageToShow="pageLogedin">Logout</li>';
var linkLogIn = '<li class="navLink" href="#loginPage" id="navLoginLink" data-pageToShow="pageLogin">Login</li>';
var linkSignUp = '<li class="navLink" href="#signupPage" id="navSignupLink" data-pageToShow="pageSignup">Signup</li>';

var aPages;
var notificationMessage = "";
var newsletterShown = false, signedupnewsletter = ""
var jDataFromServer;
var ajDataFromServerToAdminProducts;
var ajProductsDataToSearch;
var currentUserId;
var aInputFields, inputClassToClear;
var yourPosition = {lat: -25.363, lng: 131.044};
var currentLat, currentLng, googlemap, marker;

// NAVIGATION
navigation.addEventListener("click", function(e){
	if(e.target.classList.contains("navLink")){
		checkNav();
		checkPage(e);
	}
});

function checkNav (){			
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var jDataFromServer = JSON.parse( this.responseText );

			if(jDataFromServer.login == "ok"){
				if( jDataFromServer.userAdminStatus == "yes" ){
					navigation.innerHTML = '<ul id="navLogout">'+ linkProductPage + linkCreateProductPage + linkAdminProductsPage + linkAdminUsersPage + linkYourProfilePage + linkLogOut +'</ul>';			
				} else {
					navigation.innerHTML = '<ul id="navLogout">'+linkProductPage + linkYourProfilePage + linkLogOut +'</ul>';		
				}

			}else{
				navigation.innerHTML = '<ul id="navLogin">'+ linkLogIn + linkSignUp +'</ul>';
			}
		}
	}
	ajax.open( "GET", "apis/api-check-login.php", true );
	ajax.send();
};

checkNav();

function checkPage(e){
	aPages = document.querySelectorAll(".pages");
	var pageToShow = e.target.getAttribute("data-pagetoshow");

	for (i = 0; i < aPages.length; i++){
		aPages[i].style.display = "none";

		if (pageToShow == aPages[i].id){
			aPages[i].style.display="block";
		}
	}
};


//EMPTY INPUT FIELDS
function emptyInputFields(inputClassToClear){
	aInputFields = document.querySelectorAll("input."+inputClassToClear+"");
	console.log(aInputFields);
	for (var i = 0; i < aInputFields.length; i++){
		aInputFields[i].value = "";
	}
};


//NOTIFICATION MESSAGES
function notifyMe(notificationMessage) {
	// Let's check whether notification permissions have already been granted
	if (Notification.permission === "granted") {
		displayNotification(notificationMessage);
	}

	// Otherwise, we need to ask the user for permission
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
	  		// If the user accepts, let's create a notification
	  		if (permission === "granted") {
				displayNotification(notificationMessage);
	  		}
		});
	}
}

function displayNotification(notificationMessage){
	var notification = new Notification(notificationMessage);
}