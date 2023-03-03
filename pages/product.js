function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}
////////////////////////////////////////////////////////////////////////
// function replace( hide1, hide2,hide3,hide4,show ) {
//     document.getElementById(hide1).style.display="none";
//     document.getElementById(hide1).style.display="none";
//     document.getElementById(hide1).style.display="none";
//     document.getElementById(show).style.display="block";
//   }
////////////////////////////////////////////////////////////////////////
//products cateogry
function filterProductAll(){
let http= new XMLHttpRequest();
        http.open("get", "https://dummyjson.com/products");
        http.send();
        http.onload=function(){
            if (this.readyState === 4 && this.status === 200) {
            let components = JSON.parse(this.responseText);  //js object
            var  products = components.products;
            let output = "";
            for (var item of products) {
                output +=`
                <div class="product" >
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${((item.discountPercentage/100)*item.price)+item.price}</span>
                <span>$</span>
                </p> 
                <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
                </div>
                `;
                document.querySelector("#products").innerHTML =output;
            }
        }
    } }

    //////////////////////////////////////////////////////////////////////////////////
    //////sunglasses category
    function filterProductSun(){
    let httpA= new XMLHttpRequest();
        httpA.open("get", "https://dummyjson.com/products/category/sunglasses");
        httpA.send();
        httpA.onload=function(){
            if (this.readyState === 4 && this.status === 200) {
            let components = JSON.parse(this.responseText);  //js object
            var  products = components.products;
            let output = "";
            for (var item of products) {
                output +=`
                <div class="product">
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${((item.discountPercentage/100)*item.price)+item.price}</span>
                <span>$</span>
                </p> 
                <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
                </div>
                `;
                // document.getElementById("products").style.display="none";
                document.querySelector("#products").innerHTML =output;
                
            }
        }
    } }

    //////////////////////////////////////////////////////////////////////////////////
    ////fashion category
    function filterProductFashion(){
        let http_1= new XMLHttpRequest();
    http_1.open("get", "https://dummyjson.com/products/category/mens-shirts");
    http_1.send();
    http_1.onload=function(){
        if (this.readyState === 4 && this.status === 200) {
        let components = JSON.parse(this.responseText);  //js object
        var  products = components.products;
        let output = "";
        for (var item of products) {
            output +=`
            <div class="product">
            <img src="${item.thumbnail}" alt="${item.thumbnail}">
            <p class ="title">${item.title}</p>
            <p class="price">
            <span>${item.price}</span>
            <span>$</span>
            </p>
            <p class="discount">
            <span>${((item.discountPercentage/100)*item.price)+item.price}</span>
            <span>$</span>
            </p> 
            <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
            </div>
            `;
             document.querySelector("#products").innerHTML =output;
            
        }
    }
}  }

///////////////////////////////////////////////////////////////////////////////////
///accessories category
function filterProductAcc(){
let httpS= new XMLHttpRequest();
        httpS.open("get", "https://dummyjson.com/products/category/womens-jewellery");
        httpS.send();
        httpS.onload=function(){
            if (this.readyState === 4 && this.status === 200) {
            let components = JSON.parse(this.responseText);  //js object
            var  products = components.products;
            let output = "";
            for (var item of products) {
                output +=`
                <div class="product">
                <img src="${item.images[0]}" alt="${item.thumbnail}">
                <p class ="title">${item.title}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="discount">
                <span>${((item.discountPercentage/100)*item.price)+item.price}</span>
                <span>$</span>
                </p> 
                <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
                </div>
                `;
                // document.getElementById("products").style.display="none";
                document.querySelector("#products").innerHTML =output;
                
            }
        }
    } }


    //////////////////////////////////////////////////////////////////////////////////
    ////watches category
    function filterProductWatches(){
        // document.getElementById("products").style.display="none";
        // document.getElementById("fashion").style.display="none";
        // document.getElementById("productsA").style.display="none";
        // document.getElementById("productsSun").style.display="none";
    let http_w1= new XMLHttpRequest();
    http_w1.open("get", "https://dummyjson.com/products/category/mens-watches");
    http_w1.send();
    http_w1.onload=function(){
        if (this.readyState === 4 && this.status === 200) {
        let components = JSON.parse(this.responseText);  //js object
        var  products = components.products;
        let output = "";
        for (var item of products) {
            output +=`
            <div class="product">
            <img src="${item.thumbnail}" alt="${item.thumbnail}">
            <p class ="title">${item.title}</p>
            <p class="price">
            <span>${item.price}</span>
            <span>$</span>
            </p>
            <p class="discount">
            <span>${((item.discountPercentage/100)*item.price)+item.price}</span>
            <span>$</span>
            </p> 
            <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
            </div>
            `;
             document.querySelector("#products").innerHTML =output;}
    }
} 
 }

window.onload=()=>{
    filterProductAll();
}