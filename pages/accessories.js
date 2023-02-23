function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}
let http= new XMLHttpRequest();
        http.open("get", "https://dummyjson.com/products/category/womens-jewellery");
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
                <p class="description">${item.description}</p>
                <p class="price">
                <span>${item.price}</span>
                <span>$</span>
                </p>
                <p class="cart">Add to cart<i class="material-icons">shopping_cart</i></p>
                </div>
                `;
                 document.querySelector("#products").innerHTML =output;
                
            }
        }
    } 