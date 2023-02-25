function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}
////////////////////////////////////////////////////////////////////////
//products cateogry
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
                 document.querySelector("#products").innerHTML =output;
                
            }
        }
    } 

    //////////////////////////////////////////////////////////////////////////////////
    //////accessories category
    let httpA= new XMLHttpRequest();
        httpA.open("get", "https://dummyjson.com/products/category/womens-jewellery");
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
                 document.querySelector("#productsA").innerHTML =output;
                
            }
        }
    } 

    //////////////////////////////////////////////////////////////////////////////////
    ////fashion category
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
             document.querySelector("#products_1").innerHTML =output;
            
        }
    }
} 
let http_2= new XMLHttpRequest();
    http_2.open("get", "https://dummyjson.com/products/category/womens-dresses");
    http_2.send();
    http_2.onload=function(){
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
             document.querySelector("#products_2").innerHTML =output;
            
        }
    }
} 

let http_3= new XMLHttpRequest();
    http_3.open("get", "https://dummyjson.com/products/category/tops");
    http_3.send();
    http_3.onload=function(){
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
             document.querySelector("#products_3").innerHTML =output;
            
        }
    }
} 
let http_4= new XMLHttpRequest();
    http_4.open("get", "https://dummyjson.com/products/category/mens-shoes");
    http_4.send();
    http_4.onload=function(){
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
             document.querySelector("#products_4").innerHTML =output;
            
        }
    }
} 
let http_5= new XMLHttpRequest();
    http_5.open("get", "https://dummyjson.com/products/category/mens-shoes");
    http_5.send();
    http_5.onload=function(){
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
             document.querySelector("#products_5").innerHTML =output;
            
        }
    }
} 

///////////////////////////////////////////////////////////////////////////////////
///sunglasses category
let httpS= new XMLHttpRequest();
        httpS.open("get", "https://dummyjson.com/products/category/sunglasses");
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
                 document.querySelector("#productsS").innerHTML =output;
                
            }
        }
    } 


    //////////////////////////////////////////////////////////////////////////////////
    ////watches category
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
             document.querySelector("#productsW1").innerHTML =output;
            
        }
    }
} 
let http_w2= new XMLHttpRequest();
http_w2.open("get", "https://dummyjson.com/products/category/womens-watches");
http_w2.send();
http_w2.onload=function(){
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
         document.querySelector("#productsW2").innerHTML =output;
        
    }
}
} 
    

