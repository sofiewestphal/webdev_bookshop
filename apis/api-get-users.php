<?php
//open the users.txt file
$sajUsersData = file_get_contents( '../users.txt' );
$ajUsersData = json_decode( $sajUsersData );

for ($i = 0; $i < count( $ajUsersData ); $i++){
	$jItem = $ajUsersData[$i];
	unset( $jItem->email );
	unset( $jItem->image );
}

$sajUsersData = json_encode($ajUsersData);

echo $sajUsersData;
?>