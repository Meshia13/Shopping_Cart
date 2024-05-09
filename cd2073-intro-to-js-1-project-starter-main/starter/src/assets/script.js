/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  { name : "Cherry", price : 1.00, quantity : 0, productId : 1, image : "images/cherry.jpg" },
  { name : "Orange",  price : 1.50, quantity : 0, productId : 2, image : "images/orange.jpg" },
  { name : "Strawberry", price : 2.00, quantity : 0,  productId : 3, image : "images/strawberry.jpg" }
];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/ 

// Helper function
//find() method is finding the first items that match and is returning it
// productList will take in either "products" object or "cart" array
function findProduct(productId, productList) {
  return productList.find(function(product) { 
    return  product.productId === productId
  });
}

function addProductToCart(productId) {

  // Using helper function to find matching IDs of the
  // productId and object array "products"
  let product = findProduct(productId, products)

  // if cart does not include product (returns false),
  // product is being pushed to cart array
  if (!cart.includes(product)) {
    cart.push(product)
  }

  increaseQuantity(productId)
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {

  // increasing quantity of products in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity + 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  // decreasing the quantity of products in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity - 1;

  // removing items from cart when quantity is at 0
  if (product.quantity === 0) {
    cart.splice(product,1)
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  // product quantity displays zero when item is removed
  let product = findProduct(productId, cart)
  product.quantity = 0;          
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let totalCost = 0;

  // calculating the total cost and returning it
  for (let i =0; i < cart.length; i++) {
    totalCost = totalCost + (cart[i].quantity * cart[i].price);
  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.splice(0, cart.length); //empty everything from cart
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let totalPaid = 0;

function pay(amount) {

  // Amount paid
  totalPaid = totalPaid + amount;

  // remaining balance is total paid - cartTotal()
  let remainingBalance = totalPaid - cartTotal();

  // if remainingBalance is greater than or equal to zero
  // totalPaid resets to zero to allow additional payment
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
   return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
