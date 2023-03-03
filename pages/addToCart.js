function setToLocal(cart) {
  let cartStr = JSON.stringify(cart);
  localStorage.setItem("shopcart", cartStr);
}

function getFromLocal() {
  return JSON.parse(localStorage.getItem("shopcart"));
}

//  console.log(getFromLocal())
let cart = getFromLocal();
let arrOfObject = Object.values(cart);

// console.log(arrOfObject);
// console.log(Object.keys(productsFromLocl));
console.log(cart);

// document.appendChild(li);
// console.log(l);

let container = document.getElementById("listOfItems");
let output = "";

for (var i in arrOfObject) {
  console.log(arrOfObject[i].productName + " : " + arrOfObject[i].productPrice);

  output += `
  <div class="item">
  <span style="display:none">${arrOfObject[i].productId} </span>
  <button class="close" onclick="remove()" >X</button>
  <span>${arrOfObject[i].productName} </span>
  <span>${arrOfObject[i].productPrice} </span>
  <img src="${arrOfObject[i].productImg}"  />
  
  </div>
  <hr>
  `;
  container.innerHTML = output;
}

var close = document.getElementsByClassName("close");

// for (let i in close) {
//   close[i].onclick = () => {
//     var div = this.parent;
//     console.log(div);
//     //
//   };
// }

function remove() {
  var close = document.querySelectorAll(".close");
  console.log(close);
  close.forEach((element, index) => {
    console.log(index);
    element.addEventListener("click", function (event) {
      // console.log(event.target.parentElement.children)

      let productId = event.target.parentElement.children[0].innerText;

      let item = event.target.parentElement;
      delete cart[productId];
      setToLocal(cart);
      item.style.display = "none";

      console.log(productId);
    });
  });
}

// /////////////////////////////////////////////

// li.innerHTML =
//   "name:  " +
//   arrOfObject[i].productName +
//   " price : " +
//   arrOfObject[i].productPrice;

// var l = document.getElementsByClassName("addtoCartClass");
// container.appendChild(li);

// var img = document.createElement("img");
// img.setAttribute("src", arrOfObject[i].productImg);
// container.appendChild(img);

// var up = document.getElementById("GFG_UP");
// up.innerHTML = "Click on the button to add image element";
// var down = document.getElementById("GFG_DOWN");
// var img = document.createElement("img");
// img.src = productImg;
// document.appendChild(img);

// localStorage.setItem("student", "Mohamed");

// function removeItem() {
//   // productsFromLocl
//   let arrayOfIds = Object.keys(cart);
//   // arrayOfIds.splice(0, 1);
//   // console.log(arrayOfIds);

//   // console.log(arrayOfIds);
//   // localStorage.removeItem(arrayOfIds[0]);
//   // delete myObject.regex;

//   // delete cart["2"];  sha8ala

//   console.log(cart);
//   setToLocal(cart);

//   // for(){

//   // }
// }

// removeItem();

// cart {

//   1: obj1{

//   }

//   2: obj2{

//   }

// }
