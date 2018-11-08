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
 var price =  Math.floor(Math.random() * Math.floor(100))
 itemToAdd = {
   itemName : item,
   itemPrice: price
 }
 cart.push(itemToAdd)
 return `${item} has been added to your cart.`
}


function viewCart() {
  // write your code here
  if(!cart.length) {
    return "Your shopping cart is empty."
  }
  if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
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
