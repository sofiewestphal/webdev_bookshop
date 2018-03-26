<?php

//open the users.txt
$sajUsersData = file_get_contents( '../users.txt' );
//save the content from users.txt in an array
$ajUsersData = json_decode( $sajUsersData );

//fetch the user input from the form
$sUserId = uniqid();
$sUserName = $_POST['txtUserName'];
$sUserLastName = $_POST['txtUserLastName'];
$sUserMobileNumber = $_POST['txtUserMobileNumber'];
$sUserEmail = $_POST['txtUserEmail'];
$sUserPassword = $_POST['txtUserPassword'];
$sUserAdmin = $_POST['txtAdmin'];

//save the image file to the picture folder
$sFolder = '../pictures/';
$sUserImage = $sUserId . '.jpg';
$sSaveFileTo = $sFolder.$sUserImage;
// save by using a php function
move_uploaded_file( $_FILES['userImage']['tmp_name'], $sSaveFileTo );

//save the user information in an JSON object
$jUserData = json_decode('{}');
$jUserData->id = $sUserId;
$jUserData->name = $sUserName;
$jUserData->lastname = $sUserLastName;
$jUserData->mobile = $sUserMobileNumber;
$jUserData->email = $sUserEmail;
$jUserData->password = $sUserPassword;
$jUserData->image = $sUserImage;
$jUserData->admin = $sUserAdmin;

//push the last user to the array
array_push($ajUsersData, $jUserData);
$sajUsersData = json_encode($ajUsersData);
file_put_contents( '../users.txt' , $sajUsersData);

echo "User saved";
?>