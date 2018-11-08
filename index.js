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
  var i = 0
  function incrementVariable() {
    i = i + 1
  }

  if(!cart.length) {
    return "Your shopping cart is empty."
  }
  if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if (cart.length > 1 && cart.length < 3) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }else {

    for (var i = 0; i < cart.length; i++) {
      var string = []
      string.push(`${cart.map(({itemName})=> itemName)}.`)
    }
    
    var strings.push(`${string.join(', and ')}.`)
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
