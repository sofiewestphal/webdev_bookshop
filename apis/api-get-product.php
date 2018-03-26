<?php
$sProductID = $_GET['id'];

//open the users.txt file
$sajProductData = file_get_contents( '../products.txt' );
$ajProductData = json_decode( $sajProductData );

for ($i = 0; $i < count( $ajProductData ); $i++){
	
	if( $ajProductData[$i]->id == $sProductID ){
		$sjProductData = json_encode($ajProductData[$i]);
		echo $sjProductData;
		break;
	}
}

?>