<?php
	session_start();

	if ( $_SESSION['sUserLastName'] ){
		$sUserLastNameOne = $_SESSION['sUserLastName'];
		$sjResponse = '{"login": "ok", "lastName": "' . $sUserLastNameOne . '"}';
		echo $sjResponse;
		exit;
	}
	$sjResponse = '{"login": "no"}';
	echo $sjResponse;
?>