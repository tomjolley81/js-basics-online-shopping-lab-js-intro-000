var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 price = 0
 var itemToAdd = {}
 function getPrice() {
   var price =  Math.floor(Math.random() * Math.floor(100))
   return price
 }
 getPrice()
 itemToAdd = {
   itemName : item
   itemPrice: price
 }
 cart.push(itemToAdd)
 return cart
}


function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
