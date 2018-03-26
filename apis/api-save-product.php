<?php
//open the products.txt
$sajProductsData = file_get_contents( '../products.txt' );
//save the content from users.txt in an array
$ajProductsData = json_decode( $sajProductsData );

//fetch the product input from the form
$sProductId = uniqid();
$sProductName = $_POST['txtProductName'];
$sProductPrice = $_POST['txtProductPrice'];
$sProductStock = $_POST['txtProductStock'];

//save the product image file to the productpicture folder
$sProductImage = $sProductId . '.jpg';
$sProductFolder = '../productpictures/';
$sSaveProductFileTo = $sProductFolder.$sProductImage;
// save by using a php function
move_uploaded_file( $_FILES['productImage']['tmp_name'], $sSaveProductFileTo );

//save the product information in a JSON object
$jProductData = json_decode('{}');
$jProductData->id = $sProductId;
$jProductData->productname = $sProductName;
$jProductData->price = $sProductPrice;
$jProductData->stock = $sProductStock;
$jProductData->image = $sProductImage;

array_push($ajProductsData, $jProductData);
$sajProductsData = json_encode($ajProductsData);
file_put_contents( '../products.txt' , $sajProductsData);

?>