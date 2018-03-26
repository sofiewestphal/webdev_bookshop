<div id="pageSignup" class="pages">
	<div id="containerUserInput" class="container">
	<h1>USER SIGNUP</h1>
		<form id="frmUser">
			<label for="txtUserName"><p>Name</p></label>
			<input type="text" name="txtUserName" class="inputFieldSignUp" placeholder="Eg: Harry" autofocus="autofocus" autocomplete="on">
			
			<label for="txtUserLastName"><p>Lastname</p></label>
			<input type="text" name="txtUserLastName" class="inputFieldSignUp" placeholder="Eg: Potter">
			
			<label for="txtUserMobileNumber"><p>Mobile number</p></label>
			<input type="number" name="txtUserMobileNumber" class="inputFieldSignUp" placeholder="Eg: +45 12345678">
			
			<label for="txtUserMobileNumber"><p>Email</p></label>
			<input type="email" name="txtUserEmail" class="inputFieldSignUp" placeholder="Eg: example@example.com">
			
			<label for="txtUserMobileNumber"><p>Password</p></label>
			<input type="password" name="txtUserPassword" class="inputFieldSignUp" placeholder="I don't want to give an example for this one...">
			
			<legend><p>Are you an admin of this page?</p></legend>		
			<div id="inputAdminField">		
				<input type="radio" name="txtAdmin" id="inputAdminYes" value="yes"><label for="inputAdminYes">Yes</label>
				<input type="radio" name="txtAdmin" id="inputAdminNo" value="no" checked><label for="inputAdminNo">No</label>
			</div>
			
			<label for="userImage"><p>Profile picture</p></label>
			<input type="file" name="userImage" required="required">
			<button type="button" id="btnSaveUser">CREATE USER</button>
		</form>
	</div>
</div>