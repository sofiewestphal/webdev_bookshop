document.addEventListener("click", function(e){
	
	for (var i = 0; i < e.path.length; i++){
		if(e.path[i].classList){
			
			if( e.path[i].classList.contains("BoxUser") && !e.target.classList.contains("btnDeleteUser") ){
				var idUserToShow = e.path[i].getAttribute("data-id");
				getUserInfo(idUserToShow);
			}	
		}
	}
	
	if(  e.target.classList.contains("closeUserInfo") ){
		e.target.parentElement.style.display = "none";
	}
	
	if(  e.target.classList.contains("btnDeleteUser") ){
		e.target.parentElement.remove();
		var userIdToRemove = e.target.getAttribute("data-userId");
		removeUser(userIdToRemove);
	}
	
	if( e.target.id == "navAdminUsers" ){
		showUsers();
	}
});

//SHOW THE USERS
function showUsers(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var ajUsersData = JSON.parse(sDataFromServer);

			var divUsers = "";
			for (var i = 0; i < ajUsersData.length; i++ ){
				var sUserId = ajUsersData[i].id;
				var sUserName = ajUsersData[i].name;
				divUsers += '<div class="BoxUser" data-id="'+ sUserId +'">\
								<p>'+ sUserName +'</p>\
								<button class="btnDeleteUser" data-userId="'+sUserId+'">DELETE</button>\
							</div>'
			}

			boxShowUsers.innerHTML = divUsers;
			divUsers = "";
		}
	}		
	ajax.open( "GET", "apis/api-get-users.php", true );
	ajax.send();
};

function getUserInfo(idUserToShow){
	console.log("show user info");
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jUserData = JSON.parse(sDataFromServer);

			var sUserId = jUserData.id;
			var sUserName = jUserData.name;
			var sUserEmail = jUserData.email;
			var sUserImageName = jUserData.image;

			var divUserInfo ="";
			divUserInfo += '<div class="BoxUserInfo" data-id="'+ sUserId +'">\
								<i class="closeUserInfo material-icons">clear</i>\
								<div class="BoxUserInfoFlex"><div>\
									<p>Name: '+ sUserName +'</p>\
									<p>Email: '+ sUserEmail +'</p>\
								</div>\
								<img src="pictures/'+ sUserImageName +'">\
							</div>'

			boxShowUser.innerHTML = divUserInfo;
			divUsers = "";
		}
	}		
	ajax.open( "GET", "apis/api-get-user.php?id="+idUserToShow, true );
	ajax.send();
};

function removeUser(userIdToRemove){
	var ajax = new XMLHttpRequest(); //AJAX
		ajax.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var sMessageFromRemoveApi = this.responseText;		
			}
		};

	ajax.open( "GET", "apis/api-remove-user.php?sUserId="+userIdToRemove, true );
	ajax.send();
}