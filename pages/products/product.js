function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

////////////////////////////////////////////////////////////////////////
//to fetch products cateogry from json file
// all products
function filterProductAll() {
  let http = new XMLHttpRequest();
  http.open("get", "https://dummyjson.com/products");
  http.send();
  http.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let components = JSON.parse(this.responseText); //js object
      var products = components.products;
      let output = "";
      for (var item of products) {
        output += `
                <div class="product" onclick="showDetails()" data-target="#exampleModalLong">
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="id">${item.id}</p>
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${
                  (item.discountPercentage / 100) * item.price + item.price
                }</span>
                <span>$</span>
                </p> 
                <button class="cart" onclick = 'getProduct()'>Add to cart<i class="material-icons">shopping_cart</i></button>
                </div>
                `;
        document.querySelector("#products").innerHTML = output;
      }
    }
  };
}

//////////////////////////////////////////////////////////////////////////////////
//////sunglasses category
function filterProductSun() {
  let httpA = new XMLHttpRequest();
  httpA.open("get", "https://dummyjson.com/products/category/sunglasses");
  httpA.send();
  httpA.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let components = JSON.parse(this.responseText); //js object
      var products = components.products;
      let output = "";
      for (var item of products) {
        output += `
                <div class="product" onclick="showDetails()"  data-target="#exampleModalLong">
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="id">${item.id}</p>
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${
                  (item.discountPercentage / 100) * item.price + item.price
                }</span>
                <span>$</span>
                </p> 
                <button class="cart" onclick = 'getProduct()'>Add to cart<i class="material-icons">shopping_cart</i></button>
                </div>
                `;
        // document.getElementById("products").style.display="none";
        document.querySelector("#products").innerHTML = output;
      }
    }
  };
}

//////////////////////////////////////////////////////////////////////////////////
////fashion category
function filterProductFashion() {
  let http_1 = new XMLHttpRequest();
  http_1.open("get", "https://dummyjson.com/products/category/mens-shirts");
  http_1.send();
  http_1.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let components = JSON.parse(this.responseText); //js object
      var products = components.products;
      let output = "";
      for (var item of products) {
        output += `
            <div class="product" onclick="showDetails()" data-target="#exampleModalLong">
            <img src="${item.thumbnail}" alt="${item.thumbnail}">
            <p class ="id">${item.id}</p>
            <p class ="title">${item.title}</p>
            <p class="price">
            <span>${item.price}</span>
            <span>$</span>
            </p>
            <p class="discount">
            <span>${
              (item.discountPercentage / 100) * item.price + item.price
            }</span>
            <span>$</span>
            </p> 
            <button class="cart" onclick = 'getProduct()'>Add to cart<i class="material-icons">shopping_cart</i></button>
            </div>
            `;
        document.querySelector("#products").innerHTML = output;
      }
    }
  };
}

///////////////////////////////////////////////////////////////////////////////////
///accessories category
function filterProductAcc() {
  let httpS = new XMLHttpRequest();
  httpS.open("get", "https://dummyjson.com/products/category/womens-jewellery");
  httpS.send();
  httpS.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let components = JSON.parse(this.responseText); //js object
      var products = components.products;
      let output = "";
      for (var item of products) {
        output += `
                <div class="product" onclick="showDetails()" data-target="#exampleModalLong">
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="id">${item.id}</p>
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${
                  (item.discountPercentage / 100) * item.price + item.price
                }</span>
                <span>$</span>
                </p> 
                <button class="cart" onclick = 'getProduct()'>Add to cart<i class="material-icons">shopping_cart</i></button>
                </div>
                `;
        // document.getElementById("products").style.display="none";
        document.querySelector("#products").innerHTML = output;
      }
    }
  };
}

//////////////////////////////////////////////////////////////////////////////////
////watches category
function filterProductWatches() {
  let http_w1 = new XMLHttpRequest();
  http_w1.open("get", "https://dummyjson.com/products/category/mens-watches");
  http_w1.send();
  http_w1.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let components = JSON.parse(this.responseText); 
      var products = components.products;
      let output = "";
      for (var item of products) {
        output += `
            <div class="product" onclick="showDetails()"  data-target="#exampleModalLong">
            <img src="${item.thumbnail}" alt="${item.thumbnail}">
            <p class ="id">${item.id}</p>
            <p class ="title">${item.title}</p>
            <p class="price">
            <span>${item.price}</span>
            <span>$</span>
            </p>
            <p class="discount">
            <span>${
              (item.discountPercentage / 100) * item.price + item.price
            }</span>
            <span>$</span>
            </p> 
            <button class="cart" onclick = 'getProduct()'>Add to cart<i class="material-icons">shopping_cart</i></button>
            </div>
            `;
        document.querySelector("#products").innerHTML = output;
      }
    }
  };
}

/////////Reload all products in your page as default 
window.onload = () => {
  filterProductAll();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
// to save th products in local storage
var cart = {};
let loginstatus = localStorage.getItem("loginstatus");
 if(loginstatus != null){
    let fname = localStorage.getItem("fname");
     let lname = localStorage.getItem("lname");
    const myNode = document.getElementById("loginspan");
    myNode.innerHTML = '<span class="hllo" class="navcontent">  Hello ' + fname + '</span> <span class="navcontent" onclick="logout()">Logout</span>';
    function logout() {
      setInterval(()=>{
          window.localStorage.clear();
          window.location.href="../login/login.html"
      },1000)
          
      }

  }
  // action when you click on add to cart button 
function getProduct() {
  // check if he is login already or not
  if(loginstatus != null){
  var btns = document.querySelectorAll(".product");
  btns.forEach((element) => {
    element.addEventListener("click", function (event) {
      if (JSON.parse(localStorage.getItem("shopcart")) != null) {
        cart = getFromLocal();
      }
      // console.log(event.target.parentElement.children)
      // get your product data from local storage
      let productId = event.target.parentElement.children[1].innerText;
      let productImg =event.target.parentElement.children[0].getAttribute("src");
      let productPrice = event.target.parentElement.children[3].innerText;
      let productName = event.target.parentElement.children[2].innerText;

      let product = {
        productId,
        productImg,
        productPrice,
        productName,
      };

      cart[productId] = product;
      setToLocal(cart);
    });
  });
}
// if he isn't login
else{
  window.location.href="../login/login.html"
}

}

function setToLocal(cart) {
  let cartStr = JSON.stringify(cart);
  localStorage.setItem("shopcart", cartStr);
}

function getFromLocal() {
  return JSON.parse(localStorage.getItem("shopcart"));
}

let productsFromLocl = getFromLocal();


//////////////////////////Go to add to cart when click on it's icon
function goCart(){
  window.location.href="../addTocart/addToCart.html"
}


////////////////////////show details about product
let myModal = document.querySelector(".myModal");
function showDetails() {
  var modal = document.querySelectorAll(".product");
  var countOfFor = true;
  modal.forEach((element) => {
    element.addEventListener("click", function (event) {
      element.setAttribute("data-toggle","modal");
        if (countOfFor && event != null ) {
        console.log(element)
        // let Id = event.target.parentElement.children[1].innerText;
        let title = event.target.parentElement.children[2].innerText;
        let image = event.target.parentElement.children[0].getAttribute("src");
        let price= event.target.parentElement.children[3].innerText;
      if(event.target.classList.contains("cart")){
        event.stopPropagation()
      }
        let details=`
        <div class="modal-content detailsmodalcontent">
        <div class="modal-body detailsmodalbody">
        <article class="product product-container-card" >
        <picture class="product__img"> <img src="${image}"></img> </picture>
        <div class="product__content">
          <h1 class="product__title">${title}</h1>
          <p class="product__price">${price}</p>
          <p class="product__description">This is a new product that has many qualities,hurry now to buy it before sold out</p>
        </article>
        </div>
        </div>`;
         myModal.innerHTML = details;
        countOfFor = false;
      }
    });
    clearModel();
  }); 
}
function clearModel() {
  myModal.innerHTML = "";
}

