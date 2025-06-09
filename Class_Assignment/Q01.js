function addItem(cart, item) {
  cart.push(item);
}

function removeItem(cart, id) {
  let updatedCart = cart.filter(item => item.id !== id);
  while (cart.length) cart.pop();
  updatedCart.forEach(item => cart.push(item));
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}

let cart = [];

addItem(cart, { id: 1, name: "Book", price: 15.99 });
addItem(cart, { id: 2, name: "Pen", price: 2.49 });
addItem(cart, { id: 3, name: "Notebook", price: 4.99 });
removeItem(cart, 2);
addItem(cart, { id: 4, name: "Eraser", price: 1.29 });

console.log("Final cart contents:", cart);
console.log("Total price:", calculateTotal(cart).toFixed(2));
