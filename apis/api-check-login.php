<?php
	session_start();

	if ( $_SESSION['sUserLastName'] ){
		$sUserId = $_SESSION['sUserId'];
		$sUserAdminStatus = $_SESSION['sUserAdminStatus'];
		$sjResponse = '{"login": "ok", "id": "' . $sUserId . '", "userAdminStatus":"' . $sUserAdminStatus . '"}';
		echo $sjResponse;
		exit;
	}
	$sjResponse = '{"login": "no"}';
	echo $sjResponse;
?>