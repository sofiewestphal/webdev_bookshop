document.addEventListener("click", function(e){
	if( e.target.id == "navProduct" ){
		showProductImg();
	};
	
	if (e.target.classList.contains("btnBuyBook") ){
		
		for (i = 0; i < e.path.length; i++){
			if( e.path[i].classList && e.path[i].classList.contains("boxProductImg") ){
				var idProductToBuy = e.path[i].getAttribute("data-productId");
				buyBook(idProductToBuy);
			}
		}
	};
});

function showProductImg(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var ajProductsData = JSON.parse(sDataFromServer);

			ajProductsDataToSearch = ajProductsData;

			var divProducts = "";
			for (var i = 0; i < ajProductsData.length; i++ ){
				var sProductId = ajProductsData[i].id;
				var sProductName = ajProductsData[i].productname;
				var sProductPrice = ajProductsData[i].price;
				var sProductStock = Number(ajProductsData[i].stock);
				var sProductImgSrc = ajProductsData[i].image;
				
				if(sProductStock){
					divProducts += '<div class="boxProductImg" data-productId="'+ sProductId +'">\
									<h3>'+ sProductName +'</h3>\
									<img class="productImage" src="productpictures/'+sProductImgSrc+'">\
									<p>Price: '+ sProductPrice +'</p>\
									<button type="button" class="btnBuyBook">BUY BOOK</button>\
								</div>'					
				}else{
					divProducts += '<div class="boxProductImg boxProductImgSoldout" data-productId="'+ sProductId +'">\
									<h3>'+ sProductName +'</h3>\
									<img class="productImage" src="productpictures/'+sProductImgSrc+'">\
									<p>Price: '+ sProductPrice +'</p>\
									<button type="button disabled">SOLD OUT</button>\
								</div>'
				}
			}
			boxShowProductsImg.innerHTML = divProducts;
			divProducts = "";
		}
	}		
	ajax.open( "GET", "apis/api-get-products-img.php", true );
	ajax.send();
};


// I THINK I AM NOT USING THIS FUNCTION
function getProductInfoImg(idProductToShow){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sDataFromServer = this.responseText;
			var jProductData = JSON.parse(sDataFromServer);

			var sProductId = jProductData.id;
			var sProductName = jProductData.productname;
			var sProductPrice = jProductData.price;
			var sProductImage = jProductData.image;

			var divProductInfo ="";
			divProductInfo += 	'<div class="BoxProductInfo" data-ProductId="'+ sProductId +'">\
									<h3>'+sProductName+'</h3>\
									<p>Price: '+ sProductPrice +'</p>\
									<button type="button" id="btnBuyBook">BUY BOOK</button>\
								</div>'

			boxShowProductImg.innerHTML = divProductInfo;
		}
	}		
	ajax.open( "GET", "apis/api-get-product.php?id="+idProductToShow, true );
	ajax.send();
};

txtSeachProducts.addEventListener("keyup", function(){
	var lettersToFilterProducts = txtSeachProducts.value.toUpperCase();
	
	for(var i = 0; i < ajProductsDataToSearch.length; i++) {
		if( ajProductsDataToSearch[i].productname.toUpperCase().indexOf(lettersToFilterProducts) == -1) {
			var hideProductWithThisId = ajProductsDataToSearch[i].id;
			document.querySelector('.boxProductImg[data-productid="'+ajProductsDataToSearch[i].id+'"]').style.display = "none";
		} else {
			document.querySelector('.boxProductImg[data-productid="'+ajProductsDataToSearch[i].id+'"]').style.display = "";
		}
	}
});

function buyBook (idProductToBuy){
	var oSound = new Audio('sounds/chaching.mp3');
	oSound.play();

	notificationMessage = "Wuhuu your book will soon be on the way to you.";
	notifyMe(notificationMessage);
	
	var iCurrentStock, sCurrentStock;
	
	for(var i = 0; i < ajProductsDataToSearch.length; i++){
		if(ajProductsDataToSearch[i].id == idProductToBuy){
			iCurrentStock = ajProductsDataToSearch[i].stock-=1;
			sCurrentStock = iCurrentStock.toString();
		}
	}
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var sProductDataFromServer = this.responseText;

			if (sCurrentStock == 0){
				showProductImg();
			}
		}
	}

	ajax.open( "POST", "apis/api-edit-product.php", true );
	var jFrmEditProduct = new FormData();
	jFrmEditProduct.append("txtProductId", idProductToBuy);
	jFrmEditProduct.append("txtProductStock", sCurrentStock);
	ajax.send( jFrmEditProduct );			
};