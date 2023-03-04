const form = document.getElementById('form');
const fname = document.getElementById('Firstname');
const lname = document.getElementById('Lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const password2 = document.getElementById('password2');
let lenghtErr= emailErr= addressErr =passwordMErr = requiredErr= false;

// check user login
// this function to check if user login befor this time or not
// and if he login change location to outher page
let username = localStorage.getItem("fname");


function checklogin() {
  // checked if user signup befor this or not
  if(username !== null){
    window.location.href="../index.html"
  }
}
//console.log(username);


//checklogin();
// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {//lw hims7le kol el white spaces
    showSuccess(input);
    emailErr=true;
  } else {
    showError(input, 'Email is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
      requiredErr =true;
    }
  });
}

function allLetter(input)
{ 
var letters = /^[A-Za-z]+$/;
if(input.value.match(letters))
{
  showSuccess(input);
  lenghtErr=true;
}
else
{
  showError(input, `${getFieldName(input)} is not allowed to use numbers`);
  lenghtErr=false;
}
}


//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    return false;
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

//check address
function checkaddress(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
    addressErr =true
return true;

}
else
{
  showError(uadd, 'address is not valid');
uadd.focus();
return false;
}
}


// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
  else{
    passwordMErr = true;
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([fname,lname, email,address, password, password2]);
  let fnamecheck = checkLength(fname, 3, 15);
  //3mltlhom var gdeda l2n kn m3mol var 1 lehum l tlata f kt lw whda b2t true hikhale lba2e true by def
  let lnamecheck = checkLength(lname, 3, 15);
  let passwordcheck = checkLength(password, 6, 25);
  checkEmail(email);
  checkaddress(address);
  checkPasswordsMatch(password, password2);
  const fnamevalue = document.getElementById('Firstname').value;
  const lnamevalue = document.getElementById('Lastname').value;
  const emailvalue = document.getElementById('email').value;
  const addressvalue = document.getElementById('address').value;
  //console.log(fnamecheck + lnamecheck + passwordcheck + emailErr + passwordMErr + requiredErr );
  if((requiredErr && passwordMErr && addressErr && emailErr && fnamecheck && lnamecheck && passwordcheck)===true){
    // h set localstorage ll user info
    localStorage.setItem("fname", fnamevalue);
    localStorage.setItem("lname", lnamevalue);
    localStorage.setItem("email", emailvalue);
    localStorage.setItem("password", password.value);
    localStorage.setItem("address", addressvalue);
    window.location.href="../index.html"
  }
});