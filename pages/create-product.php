<div id="pageCreateProduct" class="pages">			
	<div id="containerProductInput" class="container">
		<h1>CREATE A NEW PRODUCT</h1>
		<form id="frmProduct">
			<label for="txtProductName"><p>Book name</p></label>
			<input id="productName" type="text" name="txtProductName" class="inputFieldCreateProduct" placeholder="Eg: Harry Potter and the Deathly Hollows" autofocus="autofocus" autocomplete="on">
			
			<label for="txtProductPrice"><p>Price of the book</p></label>
			<input type="number" name="txtProductPrice" class="inputFieldCreateProduct" placeholder="Eg: 1000 - if it is really expensive">
			
			<label for="txtProductStock"><p>Number of books in stock</p></label>
			<input type="number" name="txtProductStock" class="inputFieldCreateProduct" placeholder="Eg: 10">
			
			<label for="productImage"><p>Image of the book</p></label>
			<input type="file" name="productImage">
			<button type="button" id="btnSaveProduct">SAVE PRODUCT</button>
		</form>
	</div>
</div>