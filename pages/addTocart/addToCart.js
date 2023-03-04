function setToLocal(cart) {
  let cartStr = JSON.stringify(cart);
  localStorage.setItem("shopcart", cartStr);
}

function getFromLocal() {
  return JSON.parse(localStorage.getItem("shopcart"));
}
let cart = getFromLocal();
let arrOfObject = Object.values(cart);
console.log(cart);
let container = document.getElementById("listOfItems");
let output = "";
for (var i in arrOfObject) {
  console.log(arrOfObject[i].productName + " : " + arrOfObject[i].productPrice);
  output += `
  <div class="item">
  <span id="id" class="comp">${arrOfObject[i].productId} </span>
  <span class="comp">${arrOfObject[i].productName} </span>
  <span class="comp">${arrOfObject[i].productPrice} </span>
  <img src="${arrOfObject[i].productImg}"  />
  <button class="close" onclick="remove()" >X</button>
    </div>
    <hr/>
   `;
  container.innerHTML = output;
}

var close = document.getElementsByClassName("close");
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

