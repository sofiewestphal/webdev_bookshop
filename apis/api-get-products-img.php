<?php
	//open the users.txt file
	$sajProductsData = file_get_contents( '../products.txt' );
	$ajProductsData = json_decode( $sajProductsData );

	for ($i = 0; $i < count( $ajProductsData ); $i++){
		$jItem = $ajProductsData[$i];
	}

	$sajProductsData = json_encode($ajProductsData);

	echo $sajProductsData;
?>