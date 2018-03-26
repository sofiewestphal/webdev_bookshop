document.addEventListener("click", function(e){
	var aCurrentEpath = e.path;
	
	for (var i = 0; i < e.path.length; i++ ){
		if ( e.path[i].classList ){
			if ( e.path[i].classList.contains("BoxProduct") && e.target.nodeName !== "BUTTON" ){
				var idProductToShow = e.path[i].getAttribute("data-productId");
				getProductInfo(idProductToShow);
			}
		}
	}
	
	if(  e.target.classList.contains("btnDeleteProduct") ){
		e.target.parentElement.parentElement.remove();
		var productIdToRemove = e.target.getAttribute("data-productId");
		removeProduct(productIdToRemove);
	}
	
	if(  e.target.classList.contains("btnEditProduct") ){
		var productIdToEdit = e.target.getAttribute("data-productId");
		editProduct(productIdToEdit);
	}
	
	if(  e.target.id == "navAdminProducts" ){
		showProducts();
	}
});

//SHOWING THE PRODUCTS
function showProducts(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sajDataFromServerToAdminProducts = this.responseText;
			ajDataFromServerToAdminProducts = JSON.parse(sajDataFromServerToAdminProducts);
			
			if (!ajDataFromServerToAdminProducts.length) {
				ajDataFromServerToAdminProducts = [];
			}
			
			var divProducts = "";
			for (var i = 0; i < ajDataFromServerToAdminProducts.length; i++ ){
				var sProductId = ajDataFromServerToAdminProducts[i].id;
				var sProductName = ajDataFromServerToAdminProducts[i].productname;
				divProducts += '<div class="editProductContainer">\
									<div class="BoxProduct" data-productId="'+ sProductId +'">\
										<p class="adminProductHeadline">'+ sProductName +'</p>\
										<div>\
											<button class="btnEditProduct" data-productId="'+sProductId+'">EDIT</button>\
											<button class="btnDeleteProduct" data-productId="'+sProductId+'">DELETE</button>\
										</div>\
									</div>\
								</div>'
			}
			boxShowProducts.innerHTML = divProducts;
			divProducts = "";
		}
	}		
	ajax.open( "GET", "apis/api-get-products.php", true );
	ajax.send();
};

function removeProduct(productIdToRemove){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sMessageFromRemoveApi = this.responseText;			
		}
	};
	ajax.open( "GET", "apis/api-remove-product.php?sProductId="+productIdToRemove, true );
	ajax.send();
}

function getProductInfo(idProductToShow){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jProductData = JSON.parse(sDataFromServer);

			var sProductId = jProductData.id;
			var sProductName = jProductData.productname;
			var sProductPrice = jProductData.price;
			var sProductStock = jProductData.stock;
			var sProductImageName = jProductData.image;

			var divProductInfo ="";
			divProductInfo += 	'<div class="BoxProductInfo" data-ProductId="'+ sProductId +'">\
									<i class="closeUserInfo material-icons">clear</i>\
									<div id="BoxProductModal">\
										<h3>'+ sProductName +'</h3>\
										<img src="productpictures/'+ sProductImageName +'">\
										<p>Price: '+ sProductPrice +'</p>\
										<p>Books in stock: '+ sProductStock +'</p>\
									</div>\
								</div>'
								
			boxShowProduct.innerHTML = divProductInfo;
		}
	}		
	ajax.open( "GET", "apis/api-get-product.php?id="+idProductToShow, true );
	ajax.send();
};

//EDIT PRODUCT
function editProduct (productIdToEdit){
	boxEditProduct.style.display="block";
	boxEditProduct.scrollIntoView({behavior: "smooth"});
	
	btnUpdateProduct.addEventListener("click", updateProduct);

	for (var i = 0; i < ajDataFromServerToAdminProducts.length; i++ ){
		if (ajDataFromServerToAdminProducts[i].id == productIdToEdit){
			txtEditProductName.value = ajDataFromServerToAdminProducts[i].productname;
			txtEditProductPrice.value = ajDataFromServerToAdminProducts[i].price;
			txtEditProductStock.value = ajDataFromServerToAdminProducts[i].stock;
		}
	}
	
	function updateProduct(){
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var sProductDataFromServer = this.responseText;
				btnUpdateProduct.removeEventListener("click", updateProduct);
				showProducts();
			}
		}				 
		ajax.open( "POST", "apis/api-edit-product.php", true );
		var jFrmEditProduct = new FormData( frmEditProduct );
		jFrmEditProduct.append("txtProductId", productIdToEdit);
		ajax.send( jFrmEditProduct );

		boxEditProduct.style.display="none";
	};
};