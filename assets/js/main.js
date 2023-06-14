var database = firebase.database();
var productsRef = database.ref('products');
productsRef.on('value', function (snapshot) {
  var products = snapshot.val();

  // Update HTML content with the retrieved data
  var productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var product = products[key];
      var listItem = document.createElement('col-4');

      // Create HTML structure for the product details
      var productImage = document.createElement('img');
      productImage.src = product.imageUrl; 
      productImage.alt = product.name; 
      productImage.width = 200;
      productImage.height = 150;     
      listItem.appendChild(productImage);

      var productName = document.createElement('h3');
      productName.textContent = product.name;
      listItem.appendChild(productName);

      var productDescription = document.createElement('p');
      productDescription.textContent = 'Description: ' + product.description;
      listItem.appendChild(productDescription);

      productsList.appendChild(listItem);

      var productPrice = document.createElement('p');
      productPrice.textContent = 'PHP : ' + product.price;
      listItem.appendChild(productPrice);


       // Add "Add to Cart" button
       var addToCartButton = document.createElement('button');
       addToCartButton.textContent = 'Add to Cart';
      addToCartButton.style.backgroundColor = '#4CAF50';
      addToCartButton.style.color = 'white';
      addToCartButton.style.padding = '8px 16px';
      addToCartButton.style.border = 'none';
      addToCartButton.style.borderRadius = '4px';
      addToCartButton.style.cursor = 'pointer';
      addToCartButton.style.fontSize = '16px';
      addToCartButton.style.margin = '16px';
       listItem.appendChild(addToCartButton);

       productsList.appendChild(listItem);
    }
  }
});
