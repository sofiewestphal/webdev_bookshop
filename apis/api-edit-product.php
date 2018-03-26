<?php

$sajProductsData = file_get_contents( '../products.txt' );
$ajProductsData = json_decode( $sajProductsData );

//fetch the product input from the form
$sProductId = $_POST['txtProductId'];
$sProductName = $_POST['txtProductName'];
$sProductPrice = $_POST['txtProductPrice'];
$sProductStock = $_POST['txtProductStock'];
$sProductImage = $sProductId . '.jpg';

for ($i = 0; $i < count($ajProductsData); $i++){
	if($ajProductsData[$i]->id == $sProductId){
		
		if($sProductName){
			$ajProductsData[$i]->productname = $sProductName;
		}
		
		if($sProductPrice){
			$ajProductsData[$i]->price = $sProductPrice;
		}
		
		if($sProductStock || $sProductStock == "0"){
			$ajProductsData[$i]->stock = $sProductStock;
		}
		
		if($_FILES['productImage']){
			$sProductFolder = '../productpictures/';
			$sSaveProductFileTo = $sProductFolder.$sProductImage;
			move_uploaded_file( $_FILES['productImage']['tmp_name'], $sSaveProductFileTo );
		}
		break;
	}
}

$sajProductsData = json_encode($ajProductsData);
file_put_contents( '../products.txt' , $sajProductsData);

?>