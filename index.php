<?php
	session_start();
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Exam project</title>
		<meta name="viewport" content="initial-scale=1.0">
    	<meta charset="utf-8">
		<link rel="stylesheet" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>
	<body>
		
		<nav id="navigation"></nav>
	
		<?php
			include_once('pages/user-signup.php');
			include_once('pages/user-login.php');
			include_once('pages/products.php');
			include_once('pages/create-product.php');
			include_once('pages/admin-products.php');
			include_once('pages/admin-users.php');
			include_once('pages/admin-profile.php');
			include_once('pages/newsletter.php');
		?>
		
		<script src="script/general.js"></script>
		<script src="script/user-signup.js"></script>
		<script src="script/user-login.js"></script>
		<script src="script/product-page.js"></script>
		<script src="script/create-product.js"></script>
		<script src="script/admin-products.js"></script>
		<script src="script/admin-users.js"></script>
		<script src="script/admin-profile.js"></script>
		<script src="script/newsletter.js"></script>
		
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYpqHUlwCIWVnWJihKuuxtscuGQJ5XnrA"></script>
			
	</body>
</html>