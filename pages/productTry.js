// var cart = [];
// var Item = function (name, price, count) {
//   this.name = name;
//   this.price = price;
//   this.count = count;
// };
// // // 1) Add item to cart
// function addItemToCart(name, price, count) {
//   for (var i in cart) {
//     if (cart[i].name === name) {
//       cart[i].count += count;
//       return;
//     }
//   }
//   var item = new Item(name, price, count);
//   cart.push(item);
//   saveCart();
// }

// // // 2) remove item from cart
function removeItemFromCart(name) {
  for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].count--;

      if (cart[i].count === 0) {
        cart.splice(i, 1);
      }

      break;
    }
  }
  saveCart();
}

// // // 3) remove all the same item
// function removeItemFromCartAll(name) {
//   for (var i in cart) {
//     if (cart[i].name === name) {
//       cart.splice(i, 1);
//       break;
//     }
//   }
//   saveCart();
// }

// // // 4) clear everything in the cart
// function clearCart() {
//   cart = [];
//   saveCart();
// }

// // // 5) count the number of items ->
// function countCart() {
//   var totalCount = 0;
//   for (var i in cart) {
//     totalCount += cart[i].count;
//   }
//   return totalCount;
// }

// // // 6) total of all the items in the cart
// function totalCart() {
//   var totalCost = 0;
//   for (var i in cart) {
//     totalCost += cart[i].price * cart[i].count;
//   }
//   return totalCost;
// }

// // // 7) list cart array of items
// function listCart() {
//   var cartCopy = [];
//   for (var i in cart) {
//     var item = cart[i];
//     var itemCopy = {};
//     for (var p in item) {
//       itemCopy[p] = item[p];
//     }
//     cartCopy.push(itemCopy);
//   }
//   return cartCopy;
// }

// // // save the cart yo local Storage
// function saveCart() {
//   localStorage.setItem("shoppingCart", JSON.stringify(cart));
// }
// addItemToCart("Apple", 1, 1);
// addItemToCart("Apple", 1, 1);
// addItemToCart("Banana", 1, 1);
// addItemToCart("Orange", 1, 1);

// // // load the cart from local storage
// function loadCart() {
//   cart = JSON.parse(localStorage.getItem("shoppingCart"));
// }
