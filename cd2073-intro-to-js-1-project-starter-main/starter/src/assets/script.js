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

function findProduct(productId) {
  
}

function addProductToCart(productId) {

  // Find the product in the products array
  let product = '';
  for (let item = 0; item < products.length; item++) {
    if (productId ===  products[item].productId) {
      product = products[item];
    }
  }

  let itemInCart = false; 
  // check if item is in the cart, if so, increase by 1
  for (let j=0; j < cart.length; j++) {
    if (productId === cart[j].productId) {
      cart[j].quantity = cart[j].quantity +1;
      itemInCart = true;
    }
  }
  // if item is not in the cart, add item to array
    if (!itemInCart) {
      cart.push({...product, quantity:1})
    }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  
  // increasing items in cart
  for (let i = 0; i < cart.length; i++) {
    if (productId === cart[i]. productId) {
      cart[i].quantity = cart[i].quantity +1;
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  // decreasing the quantity in cart
  for (let i = 0; i < cart.length; i++) {
    if (productId === cart[i].productId) {
      cart[i].quantity = cart[i].quantity -1;
    }

    // removing items from cart when at 0
    if (cart[i].quantity === 0) {
      cart.splice(cart[i],1)
     }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  // Removing all items from cart
  for (let i= 0; i < cart.length; i++) {
    if (productId === cart[i].productId) {
      cart.splice(cart[i],1);
    }
  }            
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
  cart.splice(0, cart.length); //emoty everything from cart
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {

  let pay=0;
  let total = cartTotal();

  if (amount < total) {
    pay = amount - total;
  }
  else if (amount > total) {
    pay = amount - total;
  }
  else {
    pay;
  }
  return pay;
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
