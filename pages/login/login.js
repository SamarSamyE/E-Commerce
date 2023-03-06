const form = document.getElementById('form');

const email = document.getElementById('email');
const password = document.getElementById('password');


requiredErr= lenghtErr =emailErr =false;
function showError(input, message) {
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}


function showSuccess(input) {
formControl = input.parentElement;
formControl.className = 'form-control success';
}

function checkEmail(input) {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (re.test(input.value.trim())) {
  showSuccess(input);
  emailErr=true
 
} else {
  showError(input, 'Email is not valid');
}
}


function checkRequired(inputArr) {
inputArr.forEach(function (input) {
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input)} is required`);
  } else {
    showSuccess(input);
    requiredErr=true;
  }
});
}

function checkLength(input, min, max) {
if (input.value.length < min) {
  showError(input, `${getFieldName(input)} must be at least ${min} characters`);
} else if (input.value.length > max) {
  showError(input, `${getFieldName(input)} must be less than ${max} characters`);
} else {
  showSuccess(input);
  lenghtErr=true;
}
}

function getFieldName(input) {
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
e.preventDefault();
//checkRequired([ email, password]);
const emailvalue = document.getElementById('email').value;
  const passwordvalue = document.getElementById('password').value;
  let storageusernamed = localStorage.getItem("email");
  let storagepassword = localStorage.getItem("password");
if(emailvalue == storageusernamed && storagepassword == passwordvalue){
  localStorage.setItem("loginstatus",true);//incase eno 3ml login h save l data d 3shan a check hwa logged in wla
    window.location.href="../../index.html"
 }else{

  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const emaileror = document.querySelector('.emailerr');
  const pasworderor = document.querySelector('.pasworderr');

  email.style.border = '1px solid red';
  password.style.border = '1px solid red';
  emaileror.style.visibility = 'visible';
  pasworderor.style.visibility = 'visible';

 }
});
