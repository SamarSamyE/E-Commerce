// const form = document.querySelector(".needs-validation");

// const firstName = document.getElementById("firstName");

// const lastName = document.getElementById("lastName");

// const username = document.getElementById("username");

// const email = document.getElementById("email");

// const address = document.getElementById("address");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   ValidateInputs();
// });

// const setSucces = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");
//   errorDisplay.innerText = "";
//   inputControl.classList.add("succes");
//   inputControl.classList.remove("error");
// };

// const setError = (element, message) => {
//   console.log("eee");
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".invalid-feedback");
//   console.log(errorDisplay);
//   errorDisplay.innerText = message;
//   inputControl.classList.add("invalid-feedback");
//   inputControl.classList.remove("succes");
// };

// const ValidateInputs = () => {
//   const firstNameValue = firstName.value.trim();

//   if (firstNameValue === "") {
//     setError(firstName, "firstName is required");
//   } else {
//     setSucces(firstName);
//   }
// };

// // var SubmitBtn = document.querySelector("#SubmitId");

// // SubmitBtn.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   var firstName = document.getElementById("firstName").value;
// //   console.log(firstName);

// //   if(firstName===""){

// //   }

// //   var lastName = document.getElementById("lastName").value;
// //   console.log(lastName);

// //   var username = document.getElementById("username").value;
// //   console.log(username);

// // });
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
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
