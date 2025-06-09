
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function discountElectronics(cart) {
  return cart.map(item => {
    if (item.category === "Electronics") {
      return { ...item, price: item.price * 0.9 }; 
    }
    return item;
  });
}


function buy2Get1FreeBooks(cart) {
  return cart.map(item => {
    if (item.category === "Books") {
      const freeItems = Math.floor(item.quantity / 3);
      return {
        ...item,
        quantity: item.quantity - freeItems
      };
    }
    return item;
  });
}


function applyCartLevelDiscount(total) {
  return total > 1000 ? total * 0.95 : total;
}


function applyDiscounts(cart, ...discountFunctions) {
  return discountFunctions.reduce((updatedCart, discountFn) => discountFn(updatedCart), cart);
}


const cart = [
  { name: "Shirt", price: 25.99, quantity: 2, category: "Clothing" },
  { name: "Laptop", price: 999.99, quantity: 1, category: "Electronics" },
  { name: "Book", price: 12.50, quantity: 3, category: "Books" },
  { name: "Headphones", price: 49.99, quantity: 1, category: "Electronics" }
];


const originalTotal = calculateTotal(cart);
const afterCategoryDiscountCart = applyDiscounts(cart, discountElectronics, buy2Get1FreeBooks);
const afterCategoryDiscountTotal = calculateTotal(afterCategoryDiscountCart);
const finalTotal = applyCartLevelDiscount(afterCategoryDiscountTotal);


console.log("Original cart total: $" + originalTotal.toFixed(2));
console.log("After category discounts: $" + afterCategoryDiscountTotal.toFixed(2));
console.log("Final total after all discounts: $" + finalTotal.toFixed(2));
