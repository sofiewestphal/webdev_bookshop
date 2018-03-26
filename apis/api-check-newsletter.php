<?php
session_start();
$sUserID = $_SESSION['sUserId'];

$sajUserData = file_get_contents( '../newsletter.txt' );
$ajUserData = json_decode( $sajUserData );

for ($i = 0; $i < count( $ajUserData ); $i++){
	
	if( $ajUserData[$i]->id == $sUserID ){
		$sjResponse = '{"newsletter":"yes"}';
		echo $sjResponse;
		exit;
	}
}

$sjResponse = '{"newsletter":"no"}';
echo $sjResponse;

?>