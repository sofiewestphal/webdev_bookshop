<?php
	session_start();

	$sLoginUserEmail = $_POST['txtLoginUserName'];
	$sLoginUserPassword = $_POST['txtLoginUserPassword'];

	$sajUsersData = file_get_contents( '../users.txt' );
	$ajUsersData = json_decode( $sajUsersData );
	
	// loop through the $ajUsersData to see if any of the emails matches the email from the form:
	for ($i = 0; $i < count($ajUsersData); $i++){
		if($ajUsersData[$i]->email == $sLoginUserEmail && $ajUsersData[$i]->password == $sLoginUserPassword){
			$sUserId = $ajUsersData[$i]->id;
			$sUserLastNameOne = $ajUsersData[$i]->lastname;
			$sUserAdminStatus = $ajUsersData[$i]->admin;
			
			$_SESSION['sUserId'] = $sUserId;
			$_SESSION['sUserLastName'] = $sUserLastNameOne;
			$_SESSION['sUserAdminStatus'] = $sUserAdminStatus;

			$sjResponse = '{"login": "ok", "id": "' . $sUserId . '", "userAdminStatus":"' . $sUserAdminStatus . '"}';
			echo $sjResponse;
			exit;
		}
	}

	$sjResponse = '{"login": "no"}';
	echo $sjResponse;
?>