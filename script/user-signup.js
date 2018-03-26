//SAVE THE USER
btnSaveUser.addEventListener("click", function(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
		}
	}				 
	ajax.open( "POST", "apis/api-save-user.php", true );
	var jFrmUser = new FormData( frmUser );
	ajax.send( jFrmUser );
	
	emptyInputFields("inputFieldSignUp");
	
	notificationMessage = "Your user is now saved. Login to see the products.";
	notifyMe(notificationMessage);
});