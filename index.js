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
  }else {
    if(cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if (cart.length > 1 && cart.length < 3) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    }
    const string = []
    for (var i = 0; i < cart.length-1; i++) {
      string.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    /*for (var i = 0; i < cart.length; i++) {
      var string = []
      string.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }*/
    return `In your cart, you have ${string.join(', ')}, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}.`
  }


}

function total() {
  // write your code here
  const string = []
  for (var i = 0; i < cart.length; i++) {
    string.push(cart[i].itemPrice)
  }
  var total = string.reduce((a,b) => a + b)
  return total
}

function removeFromCart(item) {
  // write your code here
  var itemList = []
  itemList = cart.map(({itemName}) => itemName)
  return itemList
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
