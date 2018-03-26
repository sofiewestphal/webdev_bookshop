<?php
session_start();

$sajUsersData = file_get_contents( '../newsletter.txt' );
$ajUsersData = json_decode( $sajUsersData );

$sUserId= $_SESSION['sUserId'];

//fetch the user input from the form
$sUserName = $_POST['txtNewsUserName'];
$sUserLastName = $_POST['txtNewsUserLastName'];
$sUserEmail = $_POST['txtUserNewsEmail'];
$sUserLat = $_POST['txtUserLat'];
$sUserLng = $_POST['txtUserLng'];

//save the user information in an JSON object
$jUserData = json_decode('{}');
$jUserData->id = $sUserId;
$jUserData->name = $sUserName;
$jUserData->lastname = $sUserLastName;
$jUserData->email = $sUserEmail;
$jUserData->lat = $sUserLat;
$jUserData->lng = $sUserLng;

array_push($ajUsersData, $jUserData);
$sajUsersData = json_encode($ajUsersData);
file_put_contents( '../newsletter.txt' , $sajUsersData);

$sjUserData = json_encode($jUserData);

echo $sjUserData;
?>