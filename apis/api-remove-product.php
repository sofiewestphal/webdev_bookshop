<?php
	$sajData = file_get_contents( '../products.txt' );
	$ajData = json_decode( $sajData );
	$sProductId = $_GET['sProductId'];

	for ($i = 0; count($ajData); $i++){
		if($ajData[$i]->id == $sProductId ){
			array_splice($ajData, $i, 1);
			break;
		}
	}

	$sajData = json_encode($ajData);
	file_put_contents("../products.txt", $sajData);
?>