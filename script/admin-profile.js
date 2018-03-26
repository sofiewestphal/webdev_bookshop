document.addEventListener("click", function(e){
	
	if(  e.target.id == "navAdminProfileLink" ){
		showProfileInfo();
	}

	if(  e.target.id == "btnUpdateProfile" ){
		updateProfile();
	}
	
});

function showProfileInfo(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jUserData = JSON.parse(sDataFromServer);

			var sUserId = jUserData.id;
			var sUserName = jUserData.name;
			var sUserLastName = jUserData.lastname;
			var sUserMobile = jUserData.mobile;
			var sUserEmail = jUserData.email;
			var sUserImageName = jUserData.image;
			
			txtEditUserName.value = sUserName;
			txtEditUserLastName.value = sUserLastName;
			txtEditUserMobileNumber.value = sUserMobile;
			txtEditUserEmail.value = sUserEmail;

			var divUserInfo ="";
			divUserInfo += '<div class="" data-id="'+ sUserId +'">\
								<div class="BoxUserInfoFlex"><div>\
									<p>Name: '+ sUserName +'</p>\
									<p>Lastname: '+ sUserLastName +'</p>\
									<p>Mobile: '+ sUserMobile +'</p>\
									<p>Email: '+ sUserEmail +'</p>\
								</div>\
								<img src="pictures/'+ sUserImageName +'">\
							</div>'

			boxShowProfile.innerHTML = divUserInfo;
			divUsers = "";
		}
	}		
	ajax.open( "GET", "apis/api-get-user.php?id="+currentUserId, true );
	ajax.send();
};


function updateProfile(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sProfileDataFromServer = this.responseText;

			showProfileInfo();
		}
	}				 
	ajax.open( "POST", "apis/api-edit-profile.php", true );
	var jFrmEditProfile = new FormData( frmEditProfile );
	ajax.send( jFrmEditProfile );
};