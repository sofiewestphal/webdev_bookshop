<?php
$sUserID = $_GET['id'];

//open the users.txt file
$sajUserData = file_get_contents( '../users.txt' );
$ajUserData = json_decode( $sajUserData );

for ($i = 0; $i < count( $ajUserData ); $i++){
	
	if( $ajUserData[$i]->id == $sUserID ){
		$sjUserData = json_encode($ajUserData[$i]);
		echo $sjUserData;
		break;
	}
}

?>