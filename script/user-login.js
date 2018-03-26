document.addEventListener("click", function(e){
	if( e.target.id == "navLogoutLink" ){
		logout();
	}
});

//CHECK WHETHER USER IS ALREADY LOGGED IN
function checkLogin(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			jDataFromServer = JSON.parse( this.responseText );
			if(jDataFromServer.login == "ok"){
				currentUserId = jDataFromServer.id;
				showLoginSucces();
			}else{
				showLoginFailed();
			}
		}
	}

	ajax.open( "GET", "apis/api-check-login.php", true );
	ajax.send();
}

checkLogin();

//LOGIN
btnLogin.addEventListener("click", function(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			jDataFromServer = JSON.parse( this.responseText );
			
			if(jDataFromServer.login == "ok"){
				currentUserId = jDataFromServer.id;
				showLoginSucces();
			}else{
				showLoginFailed();
			}
			
			checkNav();
		}
	}				 
	ajax.open( "POST", "apis/api-login.php", true );
	var jFrmLogin = new FormData( frmLogin );
	ajax.send(jFrmLogin);
	
	emptyInputFields("inputFieldLogin");
});

function showLoginSucces (){
	aPages = document.querySelectorAll(".pages");
	for (i = 0; i < aPages.length; i++){
		aPages[i].style.display = "none";
	}
	pageProducts.style.display = "block";
	showProductImg();
	checkNewsletter();
}

function showLoginFailed (){
	aPages = document.querySelectorAll(".pages");
	for (i = 0; i < aPages.length; i++){
		aPages[i].style.display = "none";
	}
	pageLogin.style.display = "block";
	boxLoginFail.innerHTML = "<p>Login above or signup if you do not have a user.</p>";
}

//LOGOUT
function logout (){
	checkNav();
	pageLogin.style.display = "block";

	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				var DataFromServer = this.responseText;
			}
		}				 
	ajax.open( "GET", "apis/api-end-session.php", true );
	ajax.send();
	checkNav();
}