<?php
session_start();

$sajUserData = file_get_contents( '../users.txt' );
$ajUserData = json_decode( $sajUserData );

$sProfileId = $_SESSION['sUserId'];

//fetch the product input from the form
$sUserName = $_POST['txtEditUserName'];
$sUserLastName = $_POST['txtEditUserLastName'];
$sUserMobile = $_POST['txtEditUserMobileNumber'];
$sUserEmail = $_POST['txtEditUserEmail'];
$sUserPassword = $_POST['txtEditUserPassword'];
$sProfileImage = $sProfileId . '.jpg';

for ($i = 0; $i < count($ajUserData); $i++){

	if($ajUserData[$i]->id == $sProfileId){

		if($sUserName){
			$ajUserData[$i]->name = $sUserName;
		}
		
		if($sUserLastName){
			$ajUserData[$i]->lastname = $sUserLastName;
		}
		
		if($sUserMobile){
			$ajUserData[$i]->mobile = $sUserMobile;
		}
		
		if($sUserEmail){
			$ajUserData[$i]->email = $sUserEmail;
		}
		
		if($sUserPassword){
			$ajUserData[$i]->password = $sUserPassword;
		}
		
		if($_FILES['userImage']){
			$sProductFolder = '../pictures/';
			$sSaveProductFileTo = $sProductFolder.$sProfileImage;
			move_uploaded_file( $_FILES['userImage']['tmp_name'], $sSaveProductFileTo );
		}
		break;
	}
}

$sajUserData = json_encode($ajUserData);
file_put_contents( '../users.txt' , $sajUserData);


?>