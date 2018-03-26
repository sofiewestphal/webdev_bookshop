//SAVING THE PRODUCT
btnSaveProduct.addEventListener("click", function(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sProductDataFromServer = this.responseText;
		}
	}				 
	ajax.open( "POST", "apis/api-save-product.php", true );
	var jFrmProduct = new FormData( frmProduct );
	ajax.send( jFrmProduct );

	emptyInputFields("inputFieldCreateProduct");
	
	notificationMessage = "The product has been created.";
	notifyMe(notificationMessage);
});