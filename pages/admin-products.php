<div id="pageAdminProducts" class="pages">			
	<div id="containerShowProducts" class="container">
	<h1>ADMIN PRODUCTS</h1>
	<!--	<button id="btnShowProducts">SHOW PRODUCT</button>-->
		<div id="boxShowProducts"></div>
		<div id="boxShowProduct"></div>
		
		<div id="boxEditProduct">
			<h1>Edit Product</h1>
			<form id="frmEditProduct">
				<label for="txtProductName"><p>Book name</p></label>
				<input type="text" id="txtEditProductName" name="txtProductName" placeholder="PRODUCTNAME" autofocus="autofocus" autocomplete="on">
				
				<label for="txtEditProductPrice"><p>Price of the book</p></label>
				<input type="number" id="txtEditProductPrice" name="txtProductPrice" placeholder="PRICE">
				
				<label for="txtEditProductStock"><p>Number of books in stock</p></label>
				<input type="number" id="txtEditProductStock" name="txtProductStock" placeholder="STOCK">
				
				<label for="productImage"><p>Image of the book</p></label>
				<input type="file" name="productImage">
				<button type="button" id="btnUpdateProduct">UPDATE PRODUCT</button>
			</form>
		</div>
	</div>
</div>