<div id="pageAdminProfile" class="pages">		
	<div id="containerShowProfile" class="container">
		<h1>YOUR PROFILE INFORMATION</h1>
		<div id="boxShowProfile"></div>
		<h2>UPDATE PROFILE INFORMATION</h2>
		<form id="frmEditProfile">
			<label for="txtEditUserName"><p>Name</p></label>
			<input type="text" id="txtEditUserName" name="txtEditUserName" placeholder="NAME" autofocus="autofocus" autocomplete="on">
			
			<label for="txtEditUserName"><p>Lastname</p></label>
			<input type="text" id="txtEditUserLastName" name="txtEditUserLastName" placeholder="LASTNAME">
			
			<label for="txtEditUserName"><p>Mobile number</p></label>
			<input type="number" id="txtEditUserMobileNumber" name="txtEditUserMobileNumber" placeholder="MOBILE NUMBER">
			
			<label for="txtEditUserName"><p>Email</p></label>
			<input type="email" id="txtEditUserEmail" name="txtEditUserEmail" placeholder="EMAIL">
			
			<label for="txtEditUserName"><p>Password</p></label>
			<input type="password" id="txtEditUserPassword" name="txtEditUserPassword" placeholder="Well, this I will not show...">
			
			<legend><p>Are you an admin of this page?</p></legend>
			<div id="inputAdminField">
				<input type="radio" name="txtAdmin" id="inputAdminYes" value="yes"><label for="inputAdminYes">Yes</label>
				<input type="radio" name="txtAdmin" id="inputAdminNo" value="no" checked><label for="inputAdminNo">No</label>
			</div>
			
			<label for="userImage"><p>Profile picture</p></label>
			<input type="file" name="userImage" required="required">
			<!--<input type="submit" id="btnSaveUser" value="CREATE USER">-->
			<button type="button" id="btnUpdateProfile">UPDATE PROFILE</button>
		</form>
	</div>
</div>