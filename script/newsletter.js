//CHECK IF USER PREVIOUSLY SIGNED UP FOR NEWSLETTER
function checkNewsletter(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jUserData = JSON.parse(sDataFromServer);

			signedupnewsletter = jUserData.newsletter;
			showNewsletter();
		}
	}		
	ajax.open( "GET", "apis/api-check-newsletter.php", true );
	ajax.send();
};

//SHOW NEWSLETTER BOX
function showNewsletter (){
	if( signedupnewsletter == "no" && !newsletterShown){
		setTimeout(showNewsletterBox, 2000);
		newsletterShown = true;
	}
};

function showNewsletterBox (){	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jUserData = JSON.parse(sDataFromServer);

			var sUserId = jUserData.id;
			var sUserName = jUserData.name;
			var sUserLastName = jUserData.lastname;
			var sUserEmail = jUserData.email;
			
			txtNewsUserEmail.value = sUserEmail;
			txtNewsUserName.value = sUserName;
			txtNewsUserLastName.value = sUserLastName;
		}
	}		
	ajax.open( "GET", "apis/api-get-user.php?id="+currentUserId, true );
	ajax.send();

	boxNewsletter.style.display = "block";
	initMap();
};

// USER REJECTS NEWSLETTER
btnNoNewsletter.addEventListener("click", function(){
	boxNewsletter.style.display = "none";
});

// USER SIGNUP FOR NEWSLETTER
btnSignUpForNewsletter.addEventListener("click", function(){
	var iUserLat = marker.getPosition().lat();
	var iUserLng = marker.getPosition().lng();
	marker.getPosition().lng()
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
		}
	}
	ajax.open( "POST", "apis/api-signup-newsletter.php", true );
	var jFrmNewsletterSignup = new FormData( frmNewsletterSignup );
	jFrmNewsletterSignup.append("txtUserLat", iUserLat);
	jFrmNewsletterSignup.append("txtUserLng", iUserLng);
	ajax.send( jFrmNewsletterSignup );
	
	boxNewsletter.style.display = "none";
	notificationMessage = "We will not keep you up to date!";
	notifyMe(notificationMessage);
});

// GET USERS LOCATION
function success(pos) {
	currentLat = pos.coords.latitude;
	currentLng = pos.coords.longitude;
	yourPosition = {lat: currentLat, lng: currentLng};
};

function error() {
	mapContainer.innerHTML = "<p>Ups, you do not allow us to see your current position so we do not know for which area to keep you updated.</p>";
};

function getLocation() {
	var geo = navigator.geolocation.getCurrentPosition(success, error);
};

getLocation();

// INIT MAP WHEN PAGE IS READY
function initMap() {
	 	googlemap = new google.maps.Map(document.getElementById('mapContainer'), {
		zoom: 12,
		center: yourPosition
	});
	
	marker = new google.maps.Marker({
		position: yourPosition,
		map: googlemap,
		title: 'You are here',
		draggable:true
	});
	
	googlemap.setCenter(marker.getPosition());
	
	google.maps.event.addListener(googlemap, 'click', function(event) {
		placeMarker(event.latLng);
	});
};

function placeMarker(location) {
	marker.setPosition(location);
}