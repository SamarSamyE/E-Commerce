function setToLocal(cart) {
  let cartStr = JSON.stringify(cart);
  localStorage.setItem("shopcart", cartStr);
}

function getFromLocal() {
  return JSON.parse(localStorage.getItem("shopcart"));
}
cart = getFromLocal();
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
function goProduct(){
  window.location.href = "../products/products.html"
}

let loginstatus = localStorage.getItem("loginstatus");//check 3ml login wla lw ah f hi3ml da
if(loginstatus !== null){
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    const myNode = document.getElementById("loginspan");
    myNode.innerHTML = '<span class="hllo" class="navcontent">  Hello ' + fname +'</span> <span class="navcontent" onclick="logout()">Logout</span>';
}
function logout() {
setInterval(()=>{
    window.localStorage.removeItem("loginstatus");
    window.localStorage.removeItem("shopcart");
    window.location.href="../login/login.html"
},1000)
    
}
function darkMode(){
  var element=document.body;
  element.classList.toggle("dark-mode");
}
