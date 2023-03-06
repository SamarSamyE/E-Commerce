// get the data of products you choose from local storage 
function getFromLocal() {
  return JSON.parse(localStorage.getItem("shopcart"));
}
var cart2 = getFromLocal();
var list = document.querySelector("#checkOutItems");
// add these items to the list
let newItem = "";
let total=0;
for (const key in cart2) {
 total += parseInt(cart2[key].productPrice);
  newItem +=  `<li
class="list-group-item d-flex justify-content-between lh-condensed"
>
<div>
  <h6 class="my-0">${cart2[key].productName}</h6>
</div>
<span class="text-muted">${cart2[key].productPrice}</span>
</li>`;
  list.innerHTML = newItem;
}
// get the total price
const node=document.createElement("li");
node.className ="totalPrice"
const text=document.createTextNode(`Total Price= ${total} $`)
node.appendChild(text);
list.appendChild(node);
console.log(total);

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert("Thank you for visiting Us")
          }

        form.classList.add("was-validated");
        window.localStorage.removeItem("shopcart");
      },
      false
    );
  });
})();