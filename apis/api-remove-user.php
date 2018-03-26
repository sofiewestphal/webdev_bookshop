<?php
	$sajData = file_get_contents( '../users.txt' );
	$ajData = json_decode( $sajData );
	$sUserId = $_GET['sUserId'];

	for ($i = 0; count($ajData); $i++){
		if($ajData[$i]->id == $sUserId ){
			array_splice($ajData, $i, 1);
			break;
		}
	}

	$sajData = json_encode($ajData);
	file_put_contents("../users.txt", $sajData);


	$sajDataNews = file_get_contents( '../newsletter.txt' );
	$ajDataNews = json_decode( $sajDataNews );

	for ($j = 0; count($ajDataNews); $j++){
		if($ajDataNews[$j]->id == $sUserId ){
			array_splice($ajDataNews, $j, 1);
			break;
		}
	}

	$sajDataNews = json_encode($ajDataNews);
	file_put_contents("../newsletter.txt", $sajDataNews);
?>